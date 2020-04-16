// 
function is_pc_device() {
  var ua = window.navigator.userAgent
  var platform = /Windows|Macintosh|Linux|Ubuntu/i
  return platform.test(ua)
}

console.log('is_mobile_device', is_mobile_device())