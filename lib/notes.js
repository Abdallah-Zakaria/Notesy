"use strict"
let id = 0
function Handler(){

}

Handler.prototype.execute = function(newInput){
    this[newInput.action](newInput)
}

Handler.prototype.add = function(newInput){
    id ++ 
    let obj = {}
    obj[id] = `Adding Note: ${newInput.payload}`
    console.log(id)
    console.log(obj[id])
}

module.exports = Handler;