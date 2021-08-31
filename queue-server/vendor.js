'use strict';

const client = require('socket.io-client');
const host = 'http://localhost:3000/caps';
const socket = client.connect(host);
const faker = require('faker');

setInterval(()=>{
    const payload={
        store : process.env.STORE_NAME,
        orderID:faker.datatype.uuid(),
        customer:faker.name.findName(),
        address:faker.address.streetAddress()
    }

    socket.emit('new_Order',payload);
    socket.emit('pickUp',payload);
},5000)

socket.on('added',payload=>{
    console.log('Thank You For Adding To Queue ',payload);
});

socket.on('delivered',delivered)

function delivered(payload) {
    console.log('Thank You For Delivering ',payload);
    
}