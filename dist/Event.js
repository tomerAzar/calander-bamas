"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const GetInput_1 = require("./GetInput");
class Event {
    constructor() {
        console.log("event is creating: ");
        let validInput = new GetInput_1.GetInput();
        this._name = validInput.getString("enter name: ");
        this._place = validInput.getString("enter place: ");
        this._date = validInput.getFullDate("enter date: ");
    }
    toString() {
        return `name: ${this._name}, place: ${this._place}, date: ${this._date.toString().substring(0, this._date.toString().length - 28)} `;
    }
    isToday() {
        return (new Date().toDateString() == this._date.toDateString());
    }
    isLessThanToday() {
        return (new Date() > this._date);
    }
}
exports.Event = Event;
