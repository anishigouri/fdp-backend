'use strict'

const PilotHook = exports = module.exports = {}

const Kue = use('Kue')
const Job = use('App/Jobs/NewPilotMail')


PilotHook.sendNewPilotEmail = async (pilotInstance) => {
  const { email, name, password } = await pilotInstance

  Kue.dispatch(Job.key, { email, name, password }, { attempts: 3 })

}
