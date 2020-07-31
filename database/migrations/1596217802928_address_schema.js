'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('addresses', (table) => {
      table.increments()
      table.string('cep', 9).notNullable()
      table.string('street', 100).notNullable()
      table.string('number', 100)
      table.string('district', 100)
      table.string('city', 100).notNullable()
      table.string('state', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddressSchema
