
/**
 * Module dependencies.
 */
var mongoose = require('mongoose')
  , User = mongoose.model('User')
  , utils = require('../../lib/utils')


/**
 *  Show Index
 */
exports.index = function (req, res) {
  res.render('home/index', {
    title: "Swing Local!",
  })
}
