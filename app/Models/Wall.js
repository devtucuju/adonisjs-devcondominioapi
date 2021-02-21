'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Wall extends Model {
  likes () {
    return this.hasMany('App/Models/WallLike')
  }
}

module.exports = Wall
