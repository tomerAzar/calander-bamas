import { Event } from "./Event";
import { GetInput } from "./GetInput";

export class Calander 
{
    private _events : Event[] =[];
    constructor ()
    {
        this.initionalizeEvents();
    }
    initionalizeEvents () {
        let validInput : GetInput = new GetInput();
        let addingEvent : Boolean = validInput.getYesNo("do you want to enter an event : yes/no : ")
        while(addingEvent)
        {
            this._events.push(new Event());
            addingEvent = validInput.getYesNo("do you want to enter another event : yes/no : ")
        }
    }
    addEvent (){
        this._events.push(new Event());
    }
    printAllEvents ()
    {
        if(this._events.length > 0)
        {
            console.log("\nall events: ")
            this._events.forEach(event => {
                console.log(event.toString());
            });
        }
        else
            console.log("\nno events");
    }
    printAllEventsToday ()
    {
        console.log("\nall events today: ")
        let sumOfEventsToday : number =0;
        this._events.forEach(event => {
            if(event.isToday())
            {
                console.log(event.toString());
                sumOfEventsToday ++;
            }
        });
        if (sumOfEventsToday === 0)
        process.stdout.write("no events today")
    }
    clearPreEvents ()
    {
        this._events.forEach((event,index )=> {
            if(event.isLessThanToday())
            this._events.splice(index,1);      
        });
    }

}
