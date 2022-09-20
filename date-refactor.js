//Input a date and return the date in different formats and increment and decrement the date.
//The formats are as follows: DD/MM/YYYY, Month DD, YYYY, DD Month YYYY
//The increment and decrement methods will increment and decrement the date by 1 day. */

// Language: javascript

function Date(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.monthName = this.names[this.month - 1];
}

//Short format
Date.prototype.short = function() {
        return `${this.day}/${this.month}/${this.year}`
    }
    //Medium format
Date.prototype.medium = function() {
        return `${this.monthName} ${this.day}, ${this.year}`
    }
    //Long format
Date.prototype.long = function() {
    return `${this.day} ${this.monthName} ${this.year}`
}





console.log(new Date(1, 1, 2019).short());
console.log(new Date(1, 1, 2019).medium());
console.log(new Date(1, 1, 2019).long());