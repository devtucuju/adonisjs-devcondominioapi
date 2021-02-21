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
}

module.exports = WallController
