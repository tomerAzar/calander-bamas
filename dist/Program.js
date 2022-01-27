"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calander_1 = require("./Calander");
const calander = new Calander_1.Calander();
calander.printAllEvents();
calander.printAllEventsToday();
calander.clearPreEvents();
calander.printAllEvents();
