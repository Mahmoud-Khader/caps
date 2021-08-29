'use strict';

require('../modules/driver')
const events = require('../events');

events.on('pickup',pickedUp)
events.on('delivered',delivered)
function pickedUp(payload){
    let order={
        event:'pickup',
        time:new Date(),
        payload
    }
    console.log('Event', order)
    
    events.emit('InTransit',payload)
}


function delivered(payload){
    let order={
        event:'delivered',
        time:new Date(),
        payload
    }
    console.log('Event', order)
console.log('Thank You')
}