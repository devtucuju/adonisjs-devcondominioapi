'use strict'
const Billet = use('App/Models/Billet')
const Unit = use('App/Models/Unit')

class BilletController {
  async index ({ request, response, auth }) {
    const array = { error: '' }

    const user = await auth.user
    const property = request.input('property')

    if (property) {
      const unit = await Unit.query().where('id', property).where('user_id', user.id).getCount()

      if (unit > 0) {
        const billets = await Billet.query().where('unit_id', property).fetch()

        // adicionar em cada billet o file url
        array.list = billets
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

module.exports = BilletController
