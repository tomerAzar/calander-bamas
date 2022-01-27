const prompt = require('prompt-sync')({sigint: true});

export class GetInput 
{
    getYesNo (msg : string): boolean {
        let input : string =  prompt(msg);
        if (input !== "yes" && input !== "no")
            return this.getYesNo(msg);
        else
        {
            if(input === "yes") return true;
            return false;
        }
    }

    getString (msg : string) : string {
        let input : string =  prompt(`${msg}  `);
        if (input.trim().length === 0) return this.getString(msg);
        return input;
    }

    getFullDate (msg : string) : Date{
        console.log(msg);
        const date : Date = this.getValidDate("enter future date dd/mm/yyyy: ");
        const fullDate : Date = this.getTime("enter time: hh:mm:ss: ", date);
        return fullDate;
    }

    private getTime (msg : string, date : Date) : Date
    {
        const today = new Date();
        let input : string =  prompt(`${msg}  `);
        const hours : number = Number(input.substring(0,2));
        const minuts : number = Number(input.substring(3,5));
        const seconds : number = Number(input.substring(6,8));

        if (!this.isTimeFormat(input, hours,minuts,seconds) || !this.isFutureTime(date, today, hours, minuts,seconds) )
            return this.getTime(msg,date);
        else
        {
            date.setHours(hours);
            date.setMinutes(minuts);
            date.setSeconds(seconds);
            return date;
        }        
    }

    private isTimeFormat (input: string, hours : number, minuts : number, seconds:number) : boolean{
        return  (input.length ===8 && input[2] === ':' && input[5]=== ':' && !isNaN(hours) && !isNaN(minuts) && !isNaN(seconds) && hours>=0 && hours <= 23 && minuts>=0 && minuts<=59 && seconds>=0 && seconds<=59)
    }

    private isFutureTime (date : Date, today : Date, hours:number , minuts:number,seconds:number) : boolean
    {
        if(date.toDateString() === today.toDateString())
        {
            if(hours< today.getHours()) return false;
            if(hours === today.getHours() && minuts < today.getMinutes()) return false;
            if(hours === today.getHours() && minuts === today.getMinutes() && seconds < today.getSeconds()) return false;
        }
        return true;
    }
    
    private getValidDate (msg : string) : Date
    {
        let input : string =  prompt(`${msg}  `);
        const day : number = Number(input.substring(0,2));
        const month : number = Number(input.substring(3,5));
        const year : number = Number(input.substring(6,10));

        if(input.length !==10 || input[2] !=='/' || input[5] !=='/'|| isNaN(day) || isNaN(month) || isNaN(year) || !this.isFutureDate(day,month,year))
            return this.getValidDate(msg);
        else 
            return new Date(year,month-1,day );
    }

    private isFutureDate (day:number , month:number, year:number) : boolean
    {
        const today = new Date();
        if (day<1 || day>31 || month<1 || month>12 || year<today.getFullYear()) return false;
        else
        {
            const date : Date = new Date(year,month-1,day);
            if(year === today.getFullYear() && date.getMonth() < today.getMonth()) return false;
            if(year === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDay() < today.getDay()) return false;
            return true;
        }
    }
    
}
