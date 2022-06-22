class Date {
    constructor(day, month, year){
    this.day = day;
    this.month = month;
    this.year = year;
    this.names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];;
    this.monthName = this.names[month-1];
    }
    /*The Date class gives us the basic skeleton to start with. In the constuctor 
    it shows what we need to input to get the console to show us date formats. 
    In the class we define the day month year for when we input it later as well ad the names of the month 
    and how they relate to the month parameter*/
   


    short() {
        return `${this.day}/${this.month}/${this.year}`
    }

    medium() {
        return `${this.monthName} ${this.day}, ${this.year}`
    }

    long() {
        return `${this.day} ${this.monthName} ${this.year}`
    }
   
    /*These methods use a return function the return the dates given 
    in the class into different formats. */
    
    increment() {
        if(this.day >= 31) {
            if (this.month == 12) {
                this.month = 1;
                this.monthName = "January"
                this.year++;
            } else {
                this.month++; 
                this.monthName = this.names[this.month-1] 
                };
          return  (this.day = 1);
        } else { 
            return (this.day+1);
        }
    }
   
    /* The increment method reads the date given and if is it greater than 31 
    it will increment it to the first of the next month. It then checks the month
    because if it is the 12 month, it will also need to incremnt it to the 1 month
    of the next year and also increment the year. */
    
    
    decrement() {
        if(this.day <= 1) {
            if (this.month == 1) {
                this.month = 12;
                this.monthName = "December";
                this.year--;
            } else {
                this.month--;
                this.monthName = this.names[this.month-1]
            }
            return (this.day = 31);
        } else {
            return (this.day--);
        }

    }
    
    /* The decrement method is the same as the increment except this time it checks 
    if the date is the first and decrements it to the 31 of the previous month.
    Again it also checks the year and month and decrements it back to the 12 of the 
    previous year */
}
const date = new Date(31, 12, 2022)

/* This is where we set the date we want to view using DD, MM, YYYY 
which is set out in the Date class at the top*/

// console.log(date.decrement())
console.log(date.increment()) 

/* This is where we choose to use the decrement or increment method. 
Using date.increment() or date.decremnt(). or simply comment it out using // */


console.log(date.short())
console.log(date.medium())
console.log(date.long())
