var events = require('events')
var util = require('util')
// var myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent',function(mssg){
// console.log(mssg);
// })
// myEmitter.emit('someEvent',"hello")

var Person = function(name){
this.name = name
}

util.inherits(Person,events.EventEmitter);
// first argument which constructor wants to inherit and second which we want to inherit this time events
var James = new Person('james');
var Mughees = new Person('mughees')

var People = [James,Mughees]

People.forEach(function(person){
    person.on('speak',function(mssg){
        console.log(person.name + " " + mssg ) 
    })
})

James.emit('speak',"hey dude")
Mughees.emit('speak',"hello")