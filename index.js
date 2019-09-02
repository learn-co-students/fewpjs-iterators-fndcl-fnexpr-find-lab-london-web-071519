const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(win) {
  let res = win.find(function(object) {return object.result === "W"})
  if (res) {
    return res.year
  } else {
    return undefined
  }
}