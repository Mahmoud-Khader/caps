'use strict'
const events=require('./events')
const faker=require('faker')
require('dotenv').config()

require('./modules/vendor')

class payload{
    constructor(){
        this.store= process.env.STORE_NAME;
        this.orderID=faker.datatype.uuid() ;
        this.customer= faker.name.findName();
        this.address= faker.address.streetAddress()
    }
}
setInterval(()=>{
    let newPayload=new payload
    events.emit('pickup',newPayload)
},5000)
