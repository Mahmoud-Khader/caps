'use strict'

const port = process.env.PORT || 3000 ;

const io = require('socket.io')(port);

const capsSystem = io.of('/caps'); // http://localhost:3000/caps

// For The Home

io.on('connecting',(socket)=>{
    console.log('connected',socket.id);
});

const faker = require('faker');

class payload{
    constructor(){
        this.store=process.env.STORE_NAME;
        this.orderID=faker.datatype.uuid();
        this.customer=faker.name.findName();
        this.address=faker.address.streetAddress();
    }
}

// For the Caps 

capsSystem.on('connection',(socket)=>{
    console.log('A New One Have Connected To The Caps Route',socket.id);

    // The PickUp

    socket.on('pick',pickup);

    function pickup(payload) {

        let order={
            event:'pickup',
            time:new Date(),
            payload
        };

        console.log('Event',order);
        
    }

    // For InTransit

    socket.on('InTransit',inTransit);

    function inTransit(payload) {
        let order={
            event:'InTransit',
            time:new Date(),
            payload
        };
        console.log('Event',order);
        
    }

    // For Delivered 

    socket.on('delivered',delivered);

    function delivered(payload) {
        let order={
            event:'delivered',
            time:new Date(),
            payload
        };
        console.log('Event',order);
        
    }

    setInterval(()=>{
        let newPaylaod = new payload();
        capsSystem.emit('pickup',newPaylaod);
        capsSystem.emit('delivered',newPaylaod)
    },5000);
});