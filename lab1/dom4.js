import { EventEmitter } from "events";

const form = new EventEmitter();

form.on("submit", (uname, password)=> {
  console.log("form submission");
  console.log(`user name: ${uname}`);
  console.log(`user password : ${password}`);
});

form.emit("submit", "abc@abes.ac.in","11223344");