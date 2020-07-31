'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PilotSchema extends Schema {
  up () {
    this.create('pilots', (table) => {
      table.increments()
      table.string('name', 100).notNullable()
      table.string('nickname', 100)
      table.string('email', 100).notNullable().unique()
      table.string('photo', 200)
      table.string('photo_helmet', 200)
      table.string('celphone', 11).notNullable()
      table.boolean('active').notNullable()
      table.timestamp('birthdate')
      table.timestamps()
    })
  }

  down () {
    this.drop('pilots')
  }
}

module.exports = PilotSchema
