'use strict';

const Database = use('Database');
const User = use('App/Models/User');

class AuthController {
  async register({ request, response }) {
    const transaction = await Database.beginTransaction();

    try {
      const { name, email, cpf, password } = request.all();

      const user = await User.create(
        { name, email, cpf, password },
        transaction
      );

      await transaction.commit();

      return response.status(201).json(user);
    } catch (error) {
      await transaction.rollback();
      return response.status(400).json({ message: `${error}` });
    }
  }
  async login({ request, response, auth }) {
    try {
      const { cpf, password } = request.all();

      const token = await auth.withRefreshToken().attempt(cpf, password);

      return response.json(token);
    } catch (error) {
      return response.status(400).json({ message: 'Erro ao logar!' });
    }
  }
  async refresh({ request, response, auth }) {
    let refresh_token = request.input('refresh_token');
    if (!refresh_token) {
      refresh_token = request.header('refresh_token');
    }
    const user = await auth
      .newRefreshToken()
      .generateForRefreshToken(refresh_token);
    return response.send(user);
  }

  async logout({ request, response, auth }) {
    let refreshToken = request.input('refresh_token');
    if (!refreshToken) {
      refresh_token = request.header('refresh_token');
    }

    await auth.authenticator('jwt').revokeTokens([refresh_token], true);

    return response.status(204).send({});
  }
}

module.exports = AuthController;
