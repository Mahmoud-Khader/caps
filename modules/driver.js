'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000/caps';
const capsConnection=io.connect(host);

capsConnection.on('pickup',pickedUp);

function pickedUp(payload) {
    setInterval(()=>{
        console.log('Driver : picked up');
        capsConnection.emit('pick',payload);
        capsConnection.emit('InTransit',payload)
    },3000);

    setInterval(()=>{
        console.log('Driver : Delivered ',payload['orderID']);
        capsConnection.emit('delivered',payload);

    },3000);
}