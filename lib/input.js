"use strict";
const minimist = require('minimist');

function Input(){
    const beforeSlice  = process.argv.slice(2)
    const args = minimist(beforeSlice );
    const action = Object.keys(args)[1]
    const note = args[action]

    let ajax = /[A-z]/g
    if((action == "a" || action == "add")){
        if(ajax.test(note)){
            this.action = "add"
            this.payload = note
        }else{
            console.log("please enter a note")
        }
    }else{
        console.log("wrong method, please use --add or -a")
    }
}
module.exports = Input;


