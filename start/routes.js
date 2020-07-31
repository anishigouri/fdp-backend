'use strict'

const Route = use('Route')

Route.post('users', 'UserController.save')
Route.post('sessions', 'SessionController.store').validator(['Session'])

Route.post('passwords', 'ForgotPasswordController.store').validator(['ForgotPassword'])
Route.put('passwords', 'ForgotPasswordController.update').validator(['ResetPassword'])

Route.post('/files', 'FileController.store')
Route.get('/files/:id', 'FileController.show')

Route.post('pilots', 'PilotController.save').validator(['pilot'])

