"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calander = void 0;
const Event_1 = require("./Event");
const GetInput_1 = require("./GetInput");
class Calander {
    constructor() {
        this._events = [];
        this.initionalizeEvents();
    }
    initionalizeEvents() {
        let validInput = new GetInput_1.GetInput();
        let addingEvent = validInput.getYesNo("do you want to enter an event : yes/no : ");
        while (addingEvent) {
            this._events.push(new Event_1.Event());
            addingEvent = validInput.getYesNo("do you want to enter another event : yes/no : ");
        }
    }
    addEvent() {
        this._events.push(new Event_1.Event());
    }
    printAllEvents() {
        if (this._events.length > 0) {
            console.log("\nall events: ");
            this._events.forEach(event => {
                console.log(event.toString());
            });
        }
        else
            console.log("\nno events");
    }
    printAllEventsToday() {
        console.log("\nall events today: ");
        let sumOfEventsToday = 0;
        this._events.forEach(event => {
            if (event.isToday()) {
                console.log(event.toString());
                sumOfEventsToday++;
            }
        });
        if (sumOfEventsToday === 0)
            process.stdout.write("no events today");
    }
    clearPreEvents() {
        this._events.forEach((event, index) => {
            if (event.isLessThanToday())
                this._events.splice(index, 1);
        });
    }
}
exports.Calander = Calander;
