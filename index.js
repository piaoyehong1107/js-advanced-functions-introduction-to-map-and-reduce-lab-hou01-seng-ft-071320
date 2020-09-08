function mapToNegativize(sourceArray){
  return sourceArray.map(ele=>{return ele*(-1)})
}
function mapToNoChange(sourceArray){
  return sourceArray
}
function mapToDouble(sourceArray){
  return sourceArray.map(ele=>{return ele*2})
}
function mapToSquare(sourceArray){
  return sourceArray.map(ele=>{return ele*ele})
}
function reduceToTotal(sourceArray, startingPoint){
 return sourceArray.reduce( (startingPoint=0, ele)=> {return ele+startingPoint}, startingPoint);
}
function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  return true
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (src[i]) return true
  }
  return false
}


