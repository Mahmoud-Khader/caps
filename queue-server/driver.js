'use strict';

const client=require('socket.io-client');

const host = 'http://localhost:3000/caps';

const socket = client.connect(host);

socket.emit('get_all');

socket.on('order',payload=>{
    console.log('I Got The Order And I Will Delivered It : ',payload);
    socket.emit('received',payload)

    setInterval(()=>{
        console.log('Driver : Picked Up ');
        socket.emit('InTransit',payload)
    },3000);

    setInterval(()=>{
        console.log('Driver : Delivered ',payload);
        socket.emit('delivered',payload)
    },3000);
})