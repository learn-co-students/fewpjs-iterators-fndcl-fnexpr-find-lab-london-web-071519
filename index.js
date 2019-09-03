const testVar = {}

function testFunc() {
  return "hi"
}



function superbowlWin(record) {
    let answer = record.find(r => {return r.result === "W"}).year;  
    return answer 
  } 