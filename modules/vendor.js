'use strict';

const io = require('socket.io-client');
const host ='http://localhost:3000/caps';
const capsConnection=io.connect(host)

capsConnection.on('delivered',delivered)

function delivered(payload) {
    console.log('Thank You For Delivering ',payload.orderID);
    
}