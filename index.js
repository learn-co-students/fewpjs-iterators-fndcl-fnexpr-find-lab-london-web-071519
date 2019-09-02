const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = array => {
  const recordWin = array.find(record => record['result'] === 'W')
  if (recordWin) {
    return recordWin.year
  }
}
