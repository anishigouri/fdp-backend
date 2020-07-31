'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class KartTrackSchema extends Schema {
  up () {
    this.create('kart_tracks', (table) => {
      table.increments()
      table.string('name', 100).notNullable()
      table.string('site_url', 100).notNullable()
      table.string('photo', 200)
      table.string('phone', 11).notNullable()
      table.integer('address_id').unsigned().references('id').inTable('addresses').onDelete('CASCADE').onUpdate('CASCADE')
      table.boolean('active').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('kart_tracks')
  }
}

module.exports = KartTrackSchema
