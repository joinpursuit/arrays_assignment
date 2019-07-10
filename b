let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
let noDupeList = []
let echoArray = []

for (let i = 0; i < dupeFriendlyList.length; i ++){
  if (dupeFriendlyList[i] !== noDupeList[i]){
     noDupeList.push(dupeFriendlyList[i])
  } else if (dupeFriendlyList[i] === noDupeList[i]){
    echoArray.push(dupeFriendlyList[i])
  }
}
console.log(noDupeList)
