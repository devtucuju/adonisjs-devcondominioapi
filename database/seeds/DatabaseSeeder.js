'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */

const User = use('App/Models/User')
const Unit = use('App/Models/Unit')
const Area = use('App/Models/Area')
const Wall = use('App/Models/Wall')

class DatabaseSeeder {
  async run () {
    await User.create({
      name: 'demo user',
      email: 'demo@gmail.com',
      cpf: '12345678912',
      password: 'secret'
    })
    await Unit.create({
      name: 'APT 100',
      user_id: 1
    })
    await Unit.create({
      name: 'APT 101',
      user_id: 1
    })
    await Unit.create({
      name: 'APT 200',
      user_id: '0'
    })
    await Unit.create({
      name: 'APT 201',
      user_id: '0'
    })
    await Area.create({
      allowed: '1',
      title: 'Academia',
      cover: 'gyn.jpg',
      days: '1,2,4,5',
      start_time: '06:00:00',
      end_time: '22:00:00'
    })
    await Area.create({
      allowed: '1',
      title: 'Piscina',
      cover: 'pool.jpg',
      days: '1,2,3,4,5',
      start_time: '07:00:00',
      end_time: '23:00:00'
    })
    await Area.create({
      allowed: '1',
      title: 'Churrasqueira',
      cover: 'barbecue.jpg',
      days: '1,2,4,5',
      start_time: '09:00:00',
      end_time: '23:00:00'
    })
    await Wall.create({
      title: 'Titulo de aviso de teste',
      content: 'Lorem ipsum bla bla bla jkjhkjk llkjlkjl lkjlklk'
    })
    await Wall.create({
      title: 'Alerta geral para todos',
      content: 'Lorem ipsum bla bla bla jkjhkjk llkjlkjl lkjlklk cuidado'
    })
  }
}

module.exports = DatabaseSeeder
