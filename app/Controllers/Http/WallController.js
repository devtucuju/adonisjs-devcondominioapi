'use strict'

const Wall = use('App/Models/Wall')
const WallLike = use('App/Models/WallLike')

class WallController {
  async index ({ request, response, auth }) {
    const user = await auth.user

    const walls = await Wall.query().with('likes').fetch()

    const serialization = []

    for (const wall of walls.toJSON()) {
      const liked = await WallLike.query().where('wall_id', wall.id).where('user_id', user.id).getCount()

      serialization.push({ ...wall, likes: wall.likes.length, liked: !!liked })
    }

    return response.json(serialization)
  }

  async like ({ request, response, auth }) {
    const array = { error: '' }

    const { id } = request.params
    const user = await auth.user
    // verificar se o usuario logado ja deu like no quadro de avisos
    const liked = await WallLike.query().where('wall_id', id).where('user_id', user.id).getCount()

    if (liked > 0) {
      // remover o like
      await WallLike.query().where('wall_id', id).where('user_id', user.id).delete()
      array.liked = false
    } else {
      // adiconar o like
      const likeData = {
        wall_id: id,
        user_id: user.id
      }
      await WallLike.create(likeData)
      array.liked = true
    }

    // recontar a quantidade de likes no mural e inserir na resposta

    const likes = await WallLike.query().where('wall_id', id).getCount()
    array.likes = likes

    return response.json(array)
  }
}

module.exports = WallController
