'use strict';

const db = require("../../db");

const TABLE_NAME = 'cities';

class Cities {
    constructor() {
        this.table = TABLE_NAME;
    }

    static async createTable() {
        try {
			let exist = await db.schema.hasTable(TABLE_NAME);

			if (!exist) {
				await db.schema.createTable(TABLE_NAME, function(t) {
                    t.increments().primary();
                    t.string('name_ru');
                    t.integer('region_id').references('id').inTable('regions').notNull().onDelete('cascade');
                    t.timestamps();
				});
				return console.log(TABLE_NAME + ' created');
			} else {
				return console.error(TABLE_NAME + ' is already exist');
			}
		} catch (e) {
			return console.error(e);
		}
    }

}

module.exports = Cities;
