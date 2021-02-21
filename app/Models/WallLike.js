'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class WallLike extends Model {
  wall () {
    return this.belongsTo('App/Models/Wall')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = WallLike
