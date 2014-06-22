
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
  res.render('statics/index', {
    title: "Swing Local!"
  })
}

/**
 *  Show The App
 */
 exports.theApp = function (req, res) {
  res.render('statics/the_app', {
    title: "The App!"
  })
 }
