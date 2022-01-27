import { GetInput } from "./GetInput";

export class Event 
{
    private _name : string;
    private _place : string;
    private _date : Date;
    constructor()
    {
        console.log("event is creating: ");
        let validInput : GetInput = new GetInput();
        this._name = validInput.getString("enter name: ");
        this._place = validInput.getString("enter place: ");
        this._date = validInput.getFullDate("enter date: ");
    }
    toString () : string {
    return `name: ${this._name}, place: ${this._place}, date: ${this._date.toString().substring(0,this._date.toString().length-28)} `;
    }
    isToday () : boolean {
        return(new Date().toDateString() == this._date.toDateString());
    }
    isLessThanToday () : boolean {
        return(new Date() > this._date );

    }
}


