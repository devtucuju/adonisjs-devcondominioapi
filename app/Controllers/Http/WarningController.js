'use strict'
const Warning = use('App/Models/Warning')
const Unit = use('App/Models/Unit')

class WarningController {
  async show ({ request, response, auth }) {
    const array = { error: '' }

    const user = await auth.user
    const property = request.input('property')

    if (property) {
      const unit = await Unit.query().where('id', property).where('user_id', user.id).getCount()

      if (unit > 0) {
        // ordenar pela data de criacao e id
        const warnings = await Warning.query().where('unit_id', property).fetch()

        // adicionar em cada warning o file url,formatar a data e criar um array com as urls da imagens
        array.list = warnings
      } else {
        array.error = 'Está unidade não é sua!'
      }
    } else {
      array.error = 'A propriedade é Obrigatoria!'
    }

    // serializar o array para trazer o id, titulo e url do arquivo

    return response.json(array)
  }
}

module.exports = WarningController
