const EventsEmitter=require("events")

const eventEmitter= new EventsEmitter()

eventEmitter.on('start', (name) => { 
  console.log(`Good morning ${name}`); 
}); 
// we can also trigger and pass an argument 
eventEmitter.emit('start', "John"); 



// Assignment 1. an order track
// Assignment 2. an download track
// Assignment 1. an login audit trail track

// orderEmitter.js

const EventEmitter = require('events');

// Create an instance of EventEmitter
const orderEmitter = new EventEmitter();

// Listener: Log order details
orderEmitter.on('orderPlaced', (orderId) => {
  console.log(`✅ Order #${orderId} placed.`);
});

// Listener: Send confirmation
orderEmitter.on('orderPlaced', (orderId) => {
  console.log(`📧 Sending confirmation for order #${orderId}.`);
});

// Listener: Check stock
orderEmitter.on('orderPlaced', (orderId) => {
  console.log(`📦 Checking stock for order #${orderId}...`);
});

// Simulate placing orders
function placeOrder(orderId) {
  console.log('\n--- New Order Incoming ---');
  orderEmitter.emit('orderPlaced', orderId);
}

// Simulate a few orders
placeOrder(101);
placeOrder(102);
placeOrder(103);
