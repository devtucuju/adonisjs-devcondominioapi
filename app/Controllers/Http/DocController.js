'use strict'
const Doc = use('App/Models/Doc')

class DocController {
  async index ({ request, response, auth }) {
    const array = { error: '' }
    const docs = await Doc.all()
    array.list = docs

    // serializar o array para trazer o id, titulo e url do arquivo

    return response.json(array)
  }
}

module.exports = DocController
