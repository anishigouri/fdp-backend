'use strict'

const Pilot = use('App/Models/Pilot')
const User = use('App/Models/User')
const Database = use('Database')

class PilotController {

  async save ({ request, response }) {
    try {
      const trx = await Database.beginTransaction()

      const data = request.all()

      const pilot = await Pilot.create(data, trx);

      const dataUser = { email: data.email, password: 'fdp@123', firstAccess: true, pilot_id: pilot.id }
      await User.create(dataUser, trx);

      await trx.commit()

      return response.status(200).send({ data: pilot, success: { message: 'Piloto salvo com sucesso' } })

    } catch(err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Erro ao salvar o piloto' }})
    }
  }
}

module.exports = PilotController
