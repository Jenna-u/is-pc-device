'use strict'

function isPC() {
  var ua = null
  if (typeof window !== "undefined") {
    ua = window.navigator.userAgent
  }

  var platform = /Windows|Macintosh|Linux|Ubuntu/i
  return platform.test(ua)
}

module.exports = isPC