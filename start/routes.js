'use strict'

const Route = use('Route')

Route.post('users', 'UserController.save')
Route.post('sessions', 'SessionController.store').validator(['Session'])

Route.post('passwords', 'ForgotPasswordController.store').validator(['ForgotPassword'])
Route.put('passwords', 'ForgotPasswordController.update').validator(['ResetPassword'])

Route.post('/files', 'FileController.store')
Route.get('/files/:id', 'FileController.show')

Route.post('pilots', 'PilotController.save').validator(['pilot'])
Route.put('pilots/:id', 'PilotController.update')
Route.get('pilots/:id', 'PilotController.findById')
Route.get('pilots', 'PilotController.findAll')

Route.post('kart-tracks', 'KartTrackController.save').validator(['kartTrack'])
Route.put('kart-tracks/:id', 'KartTrackController.update')
Route.get('kart-tracks/:id', 'KartTrackController.findById')
Route.get('kart-tracks', 'KartTrackController.findAll')

