function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  const withCall = fn()
  return withCall.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args) {
  
}

function returnNewFunctionOf (functionToBeCopied, thisValue) {
  
}