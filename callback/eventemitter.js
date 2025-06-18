// we need to use events which is a core module in node
const EventsEmitter=require("events")
// we have a class which we need to create its instance to access events methods
const eventEmitter= new EventsEmitter()

//using the eventEmitter instance we can access method .on 
// .on acts as our listener if any event has been triggered  
eventEmitter.on('start', () => { 
  console.log(`Good Morning `); 
}); 

// .emit act as the trigger so when the event is fired the listener will hear it
// and will execute some block of code
eventEmitter.emit('start'); 

