var event = require('events');
var util = require('util');

var person = function(name){
    this.name = name ;
};

util.inherits(person,event.EventEmitter);

var james = new person('james');
var nashaat = new person('nashaat');
var Ali = new person('Ali');
var people =[james,nashaat,Ali];

people.forEach(function(person){
    person.on('speak',function(mssg){
        console.log(person.name + ' said: '+ mssg);
    });
});

james.emit('speak','hi dudes');