import { EventEmitter } from "events";
class DomClass extends EventEmitter {
  addEventListner(eventName, callback)
  {
    this.on(eventName, callback);
  }
  removeEventListner(eventName, callback)
  {
    this.off(eventName, callback);
  }
  dispatchEvent(eventName, eventData={})
  {
    const event={
      type:eventName,
      timespam:new Date(),
      ...eventData,
    };
    this.emit(eventName, event);
  }
}
const button=  new DomClass();
const handleClick=(events)=>{
  console.log(`button clicked type: ${event.type}`)
}
