'use strict';

class Login {
  get rules() {
    return {
      cpf: 'required|min:11|max:11',
      password: 'required',
    };
  }

  get messages() {
    return {
      'cpf.required': 'O cpf é obrigatório!',
      'cpf.min': 'O cpf deve conter 11 digitos!',
      'cpf.max': 'O cpf deve conter 11 digitos!',
      'password.required': 'A senha é obrigatória!',
    };
  }
}

module.exports = Login;
