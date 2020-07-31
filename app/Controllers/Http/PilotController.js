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

  async update ({ params, request, response }) {
    try {

      const { nickname, name, celphone, active, birthdate } = request.all()
      const pilot = await Pilot.findOrFail(params.id)
      pilot.merge({ nickname, name, celphone, active, birthdate });
      await pilot.save()

      return response.status(200).send({ data: pilot, success: { message: 'Piloto salvo com sucesso' } })

    } catch(err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Erro ao salvar o piloto' }})
    }
  }

  async findById({ params }) {

    try {
      const pilot = await Pilot.findOrFail(params.id);
      return pilot
    } catch(err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Não foi possível buscar o piloto' }})
    }
  }

  async findAll() {

    try {
      const pilots = await Pilot.all();
      return pilots
    } catch(err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Não foi possível buscar os pilotos' }})
    }
  }

  async delete({ params }) {
    try {
      const pilot = await Pilot.findOrFail(params.id);
      await pilot.delete()
      return response.status(200).send({ data: pilot, success: { message: 'Piloto removido com sucesso' } })
    } catch(err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Não foi possível remover o piloto' }})
    }
  }
}

module.exports = PilotController
