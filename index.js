'use strict'

function is_pc_device() {
  var ua = window.navigator.userAgent
  var platform = /Windows|Macintosh|Linux|Ubuntu/i
  return platform.test(ua)
}

module.exports = is_pc_device
module.exports.is_pc_device = is_pc_device