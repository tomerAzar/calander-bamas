"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInput = void 0;
const prompt = require('prompt-sync')({ sigint: true });
class GetInput {
    getYesNo(msg) {
        let input = prompt(msg);
        if (input !== "yes" && input !== "no")
            return this.getYesNo(msg);
        else {
            if (input === "yes")
                return true;
            return false;
        }
    }
    getString(msg) {
        let input = prompt(`${msg}  `);
        if (input.trim().length === 0)
            return this.getString(msg);
        return input;
    }
    getFullDate(msg) {
        console.log(msg);
        const date = this.getValidDate("enter future date dd/mm/yyyy: ");
        const fullDate = this.getTime("enter time: hh:mm:ss: ", date);
        return fullDate;
    }
    getTime(msg, date) {
        const today = new Date();
        let input = prompt(`${msg}  `);
        const hours = Number(input.substring(0, 2));
        const minuts = Number(input.substring(3, 5));
        const seconds = Number(input.substring(6, 8));
        if (!this.isTimeFormat(input, hours, minuts, seconds) || !this.isFutureTime(date, today, hours, minuts, seconds))
            return this.getTime(msg, date);
        else {
            date.setHours(hours);
            date.setMinutes(minuts);
            date.setSeconds(seconds);
            return date;
        }
    }
    isTimeFormat(input, hours, minuts, seconds) {
        return (input.length === 8 && input[2] === ':' && input[5] === ':' && !isNaN(hours) && !isNaN(minuts) && !isNaN(seconds) && hours >= 0 && hours <= 23 && minuts >= 0 && minuts <= 59 && seconds >= 0 && seconds <= 59);
    }
    isFutureTime(date, today, hours, minuts, seconds) {
        if (date.toDateString() == today.toDateString()) {
            if (hours < today.getHours())
                return false;
            if (hours == today.getHours() && minuts < today.getMinutes())
                return false;
            if (hours == today.getHours() && minuts == today.getMinutes() && seconds < today.getSeconds())
                return false;
        }
        return true;
    }
    getValidDate(msg) {
        let input = prompt(`${msg}  `);
        const day = Number(input.substring(0, 2));
        const month = Number(input.substring(3, 5));
        const year = Number(input.substring(6, 10));
        if (input.length !== 10 || input[2] !== '/' || input[5] !== '/' || isNaN(day) || isNaN(month) || isNaN(year) || !this.isFutureDate(day, month, year))
            return this.getValidDate(msg);
        else
            return new Date(year, month - 1, day);
    }
    isFutureDate(day, month, year) {
        const today = new Date();
        if (day < 1 || day > 31 || month < 1 || month > 12 || year < today.getFullYear())
            return false;
        else {
            const date = new Date(year, month - 1, day);
            if (year === today.getFullYear() && date.getMonth() < today.getMonth())
                return false;
            if (year === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDay() < today.getDay())
                return false;
            return true;
        }
    }
}
exports.GetInput = GetInput;
