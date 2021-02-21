/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'AuthController.unauthorized').as('login')

Route.group(() => {
  Route.post('/register', 'AuthController.register')
    .validator('Register')
    .as('auth.register')

  Route.post('/login', 'AuthController.login')
    .validator('Login')
    .as('auth.login')

  Route.post('/refresh', 'AuthController.refresh').as('auth.refresh')

  Route.post('/reset-password', 'AuthController.forgot').as('auth.forgot')
  Route.get('/reset-password', 'AuthController.remember').as('auth.remember')
  Route.put('/reset-password', 'AuthController.reset').as('auth.reset')
}).prefix('/auth')

Route.group(() => {
  Route.post('/validate', 'AuthController.validateToken').as('auth.validate')
  Route.post('/logout', 'AuthController.logout').as('auth.logout')
  // Mural de Avisos
  Route.get('/walls', 'WallController.index').as('wall.index')
  Route.post('/wall/:id/like', 'WallController.like').as('wall.like')

  // Documentos
  Route.get('/docs', 'DocController.index').as('doc.index')

  // Livro de Ocorrências
  Route.get('/warning/:id_user', 'WarningController.show').as('warning.show')
  Route.post('/warning', 'WarningController.create').as('warning.create')
  Route.post('/warning/file', 'WarningController.file').as('warning.file')

  // Boletos
  Route.get('/billets', 'BilletController.index').as('doc.index')

  // Achados e perdidos
  Route.get('/foundandlost', 'FoundAndLostController.index').as(
    'foundandlost.index'
  )
  Route.post('/foundandlost', 'FoundAndLostController.create').as(
    'foundandlost.create'
  )
  Route.put('/foundandlost/:id', 'FoundAndLostController.update').as(
    'foundandlost.update'
  )

  // Unidade
  Route.get('/unit/:id', 'UnitController.show').as('unit.show')
  Route.post('/unit/:id/person', 'UnitController.createPerson').as(
    'unit.createPerson'
  )
  Route.post('/unit/:id/vehicle', 'UnitController.createVehicle').as(
    'unit.createVehicle'
  )
  Route.post('/unit/:id/pet', 'UnitController.createPet').as('unit.createPet')

  Route.post('/unit/:id/removeperson', 'UnitController.removePerson').as(
    'unit.removePerson'
  )
  Route.post('/unit/:id/removevehicle', 'UnitController.removeVehicle').as(
    'unit.removeVehicle'
  )
  Route.post('/unit/:id/removepet', 'UnitController.removePet').as(
    'unit.removePet'
  )

  // Reservas
  Route.get('/reservations', 'ReservationController.index').as(
    'reservation.index'
  )
  Route.post('/reservation/:id_area', 'ReservationController.create').as(
    'reservation.create'
  )
  Route.get('/reservation/id_user', 'ReservationController.show').as(
    'reservation.show'
  )
  Route.delete('/reservation/:id', 'ReservationController.delete').as(
    'reservation.delete'
  )
  Route.get(
    '/reservation/:id/disableddates',
    'ReservationController.disabledates'
  ).as('reservation.disabledates')
  Route.get('/reservation/:id/times', 'ReservationController.times').as(
    'reservation.times'
  )
}).middleware(['auth'])

// controller tipo resource : adonis make:controller NomedoController --resource
// Route.resource('recurso','Controller').apiOnly()
