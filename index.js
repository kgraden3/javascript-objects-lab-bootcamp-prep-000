var recipes = { prop: '1'}
var obj = { prop: '1'}
var newObj = Object.assign({}, obj)


function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, obj, { ['prop2']: "2" })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj['prop2'] = '2'
  return obj
}

function deleteFromObjectByKey(newObj, key){
  delete newObj.prop
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  var obj = { prop: '1'}
  delete obj.prop
  return obj
}
