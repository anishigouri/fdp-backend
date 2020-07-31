'use strict'

const Mail = use('Mail')

class NewPilotMail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency () {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key () {
    return 'NewPilotMail-job'
  }

  // This is where the work is done.
  async handle ({ email, name, password }) {
    console.log('ENVIANDO EMAIL')

    await Mail.send(
      ['emails.new_pilot'],
      { email, name, password },
      message => {
        message
          .to(email)
          .from('allanfurlani@gmail.com')
          .subject(`Bem vindo ${name}!`)
      }
    )
  }
}

module.exports = NewPilotMail

