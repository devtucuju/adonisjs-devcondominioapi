'use strict';

class Register {
  get rules() {
    return {
      name: 'required',
      email: 'required|email|unique:users,email',
      cpf: 'required|min:11|max:11|unique:users,cpf',
      password: 'required',
      password_confirm: 'required|same:password',
    };
  }

  get messages() {
    return {
      'name.required': 'O nome é obrigatório!',
      'email.required': 'O email é obrigatório!',
      'email.email': 'Digite um email válido!',
      'email.unique': 'O email informado já foi cadastrado!',
      'cpf.required': 'O cpf é obrigatório!',
      'cpf.min': 'O cpf deve conter 11 digitos!',
      'cpf.max': 'O cpf deve conter 11 digitos!',
      'cpf.unique': 'O cpf informado já foi cadastrado',
      'password.required': 'A senha é obrigatória!',
      'password_confirm.required': 'A confirmação da senha é obrigatória!',
      'password_confirm.same':
        'A senha e a confirmação da senha não são iguais!',
    };
  }
}

module.exports = Register;
