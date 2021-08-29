'use strict';
// Global Event Pool 
const Events = require('events');
const events = new Events();
// singleton
module.exports = events;