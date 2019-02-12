var recipes = { prop: '1'}
const obj = { prop: '1'}

function updateObjectWithKeyAndValue(object, key, value){
  var obj = { prop: '1'}
  return Object.assign({}, obj, { ['prop2']: "2" })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj['prop2'] = '2'
  return obj
}

function deleteFromObjectByKey(obj, key){
var obj = { prop: '1'}
var newObj = Object.assign({}, obj)
delete newobj.prop
return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  var obj = { prop: '1'}
  delete obj.prop
  return obj
}
