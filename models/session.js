var DBModel = require('./db_model')

var Session = DBModel.extend({

  defaults: {
    'id': undefined,
    'category_ids': undefined,
    'use_modifier_ids': undefined,
    'parcel_id': undefined
  }

}, {

  table: 'sessions'

})

module.exports = Parcel
