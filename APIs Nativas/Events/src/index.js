// const events = require("events");
import events from "events";
const eventEmitter = new events.EventEmitter();

//Create an event handler:
const myEventHandler = function () {
  console.log("I hear a scream!");
};

// //Assign the event handler to an event:
// eventEmitter.on("scream", myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit("scream");

eventEmitter.on("error", (err) => {
  console.error("Erro detectado:", err);
});

// Disparando um erro
eventEmitter.emit("error", new Error("Algo deu errado!"));
