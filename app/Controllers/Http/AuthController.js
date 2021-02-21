'use strict'

const Database = use('Database')
const User = use('App/Models/User')
const Unit = use('App/Models/Unit')
const Hash = use('Hash')

class AuthController {
  async unauthorized ({ request, response }) {
    return response.status(401).json({ error: 'Não Autorizado!' })
  }

  async register ({ request, response, auth }) {
    const transaction = await Database.beginTransaction()

    try {
      const { name, email, cpf, password } = request.all()
      // Informações do usuários
      const user = await User.create(
        { name, email, cpf, password },
        transaction
      )

      await transaction.commit()

      // fazer o login do usuario

      const token = await auth.withRefreshToken().attempt(cpf, password)

      if (!token) {
        return response.json({ message: 'Ocorreu um erro!' })
      }

      // Unidades associadas a esse usuário

      const properties = await Unit.query(['id', 'name'])
        .where('id_user', user.id)
        .fetch()

      return response.status(201).json({
        user,
        token,
        properties
      })
    } catch (error) {
      await transaction.rollback()
      return response.status(400).json({ message: `${error}` })
    }
  }

  async login ({ request, response, auth }) {
    try {
      const { cpf, password } = request.all()

      // // verificar se o existe usuario com esse cpf
      const userExists = await User.findBy('cpf', cpf)

      if (!userExists) {
        return response
          .status(404)
          .json({ message: 'Usuário não foi localizado' })
      }

      // // verificar se a senha está correta

      const isSame = await Hash.verify(password, userExists.password)

      if (!isSame) {
        return response.status(400).json({ message: 'Senha incorreta' })
      }

      const token = await auth.withRefreshToken().attempt(cpf, password)

      if (!token) {
        return response.json({ message: 'CPF e/ou senha incorretos!' })
      }

      // Unidades associadas a esse usuário

      const properties = await Unit.query(['id', 'name'])
        .where('id_user', userExists.id)
        .fetch()

      return response.json({
        user: userExists,
        token,
        properties
      })
    } catch (error) {
      return response.status(401).json({ message: 'Erro ao logar!' })
    }
  }

  async validateToken ({ request, response, auth }) {
    // usuario logado
    const user = await auth.user
    // Unidades associadas a esse usuário

    const properties = await Unit.query(['id', 'name'])
      .where('id_user', user.id)
      .fetch()

    return response.json({
      user,
      properties
    })
  }

  async refresh ({ request, response, auth }) {
    let refresh_token = request.input('refresh_token')
    if (!refresh_token) {
      refresh_token = request.header('refresh_token')
    }
    const user = await auth
      .newRefreshToken()
      .generateForRefreshToken(refresh_token)
    return response.send(user)
  }

  async logout ({ request, response, auth }) {
    // let refreshToken = request.input('refresh_token');
    // const { refresh_token } = request.all();
    // if (!refresh_token) {
    //   refresh_token = request.header('refresh_token');
    // }

    // await auth.authenticator('jwt').revokeTokens([refresh_token]);

    // return response.status(204).send({});
    try {
      const check = await auth.check()

      if (check) {
        const token = await auth.getAuthHeader()
        await auth.authenticator('jwt').revokeTokens([token])
        return response.status(200).send({ message: 'Logout successfully!' })
      }
    } catch (error) {
      return response.send({ message: 'Invalid jwt token' })
    }
  }
}

module.exports = AuthController
