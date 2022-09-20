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

//Increment the date by 1 day and return the new date
function increment(Date) {
    if (Date.day >= 31) {
        if (Date.month == 12) {
            Date.month = 1;
            Date.monthName = "January"
            Date.year++;
        } else {
            Date.month++;
            Date.monthName = Date.names[Date.month - 1]
        };
        return (`${Date.day = 1}/${Date.month}/${Date.year}`);
    } else {
        return (`${Date.day + 1}/${Date.month}/${Date.year}`);
    }
}


//Decrement the date by 1 day
Date.prototype.decrement = function() {
    if (this.day <= 1) {
        if (this.month == 1) {
            this.month = 12;
            this.monthName = "December";
            this.year--;
        } else {
            this.month--;
            this.monthName = this.names[this.month - 1]
        }
        return (`${this.day = 31}/${this.month}/${this.year}`);
    } else {
        return (`${this.day - 1}/${this.month}/${this.year}`);
    }
}




console.log(new Date(1, 1, 2019).short());
console.log(new Date(1, 1, 2019).medium());
console.log(new Date(1, 1, 2019).long());

console.log(increment(new Date(1, 1, 2019)));
console.log(new Date(1, 1, 2019).decrement());