'use strict'

const KartTrack = use('App/Models/KartTrack')
const Address = use('App/Models/Address')
const Database = use('Database')

class KartTrackController {

  async save ({ request, response }) {
    try {
      const trx = await Database.beginTransaction()

      const { address } = request.only(['address'])
      const addressSaved = await Address.create(address, trx);

      const { name, site_url, phone, active } = request.all()
      const kartTrack = await KartTrack.create({ name, site_url, phone, active, address_id: addressSaved.id }, trx);

      await trx.commit()

      return response.status(200).send({ data: kartTrack, success: { message: 'Kartódromo salvo com sucesso' } })

    } catch(err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Erro ao salvar o kartódromo' }})
    }
  }

  async update ({ params, request, response }) {
    try {

      const { name, site_url, phone, active } = request.all()
      const kartTrack = await KartTrack.findOrFail(params.id)
      kartTrack.merge({ name, site_url, phone, active })
      await kartTrack.save()

      const { address } = request.only(['address'])
      const returnAddress = await Address.findOrFail(kartTrack.address_id)
      returnAddress.merge(address)
      await returnAddress.save()

      return response.status(200).send({ data: kartTrack, success: { message: 'Kartódromo salvo com sucesso' } })

    } catch(err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Erro ao salvar o kartódromo' }})
    }
  }

  async findById({ params }) {

    try {
      const kartTrack = await KartTrack.findOrFail(params.id);
      return kartTrack
    } catch(err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Não foi possível buscar o kartódromo' }})
    }
  }

  async findAll() {

    try {
      const kartTracks = await KartTrack.all();
      return kartTracks
    } catch(err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Não foi possível buscar os kartódromos' }})
    }
  }

  async delete({ params }) {
    try {
      const kartTrack = await KartTrack.findOrFail(params.id);
      await kartTrack.delete()
      return response.status(200).send({ data: kartTrack, success: { message: 'Kartódromo removido com sucesso' } })
    } catch(err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Não foi possível remover o kartódromo' }})
    }
  }
}

module.exports = KartTrackController
