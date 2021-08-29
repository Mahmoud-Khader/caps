'use strict';

const events = require('../events');
require('../modules/vendor')
events.on('InTransit',Intransit)

function Intransit(payload){

    let order={
        event:'InTransit',
        time:new Date(),
        payload
    }
    console.log('Event', order)
    
setTimeout(()=>{
    console.log('Driver: picked up ',payload['orderID']);
   
},1000)

setTimeout(()=>{
    console.log('Delivered');
    events.emit('delivered',payload)
},3000)
    
}