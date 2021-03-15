module.exports = function towelSort (arr) {
  let newArray = []
  if (arr === undefined || arr.length === 0) return []
  else {
    arr.forEach((element, index) => {
      if (index % 2 === 0)
        element.forEach(subElem => newArray.push(subElem))
      else 
        for (let i = element.length - 1; i != -1; i--) newArray.push(element[i])
    });
  }
  return newArray
}

