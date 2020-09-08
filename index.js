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
 return sourceArray.reduce( (startingPoint,ele)=> {return ele+startingPoint},startingPoint=0)
}
function reduceToAllTrue(sourceArray){
  
}
function reduceToAnyTrue(sourceArray){
  
}


