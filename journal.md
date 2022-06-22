# Top-down Design

//NOTE We are going to ignore the fact not all months have 31 days but this could be done with some switch cases.

Firstly we want to create a simple class skeleton for the date. This will give us a basic template to build off of to add methods to fulfil the other requirements.

The skeleton code for the date class will look like this.

```JavaScript
  class Date {
    constructor(day, month, year){
    this.day = day;
    this.month = month;
    this.year = year;
    this.names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];;
    this.monthName = this.names[month-1];
    }
```

The monthName takes the array of months under this.names and compares it with the input month - 1 (because arrays always start at 0). This gives us the month name to use in some of the formats necesarry.

```JavaScript
  const date = new Date(31, 12, 2022)
```

Note- This Code needs to be out of the Class to work.

Then we work on a method that outputs different formats. In the requirements we are asked for DD/MM/YYYY, Month DD, YYYY and DD Month YYYY. This will look like this and use a few methods for each date type, I named them short, medium and long.

```JavaScript
    short() {
        return `${this.day}/${this.month}/${this.year}`
    }

    medium() {
        return `${this.monthName} ${this.day}, ${this.year}`
    }

    long() {
        return `${this.day} ${this.monthName} ${this.year}`
    }
```



We can now add a console.log to test our code. This is as follows, we will test the short date to begin with.

```JavaScript
  console.log(date.short()) 
```

Because we set the date earlier it should output this.

```JavaScript
  const date = new Date(31, 12, 2022)
  console.log(date.short()) //Output -> 31/12/2022
```

Now we can begin working on the increment and decrement methods.
We need them to not only add or subtract from the date but also check if the month and or year needs adding or subtracting. The code uses if statements to check this and both methods are nearly identical apart from the increment using ++ and decrement using --. But they function basically the same.

```JavaScript
     increment() {
        if(this.day >= 31) {
            if (this.month == 12) {
                this.month = 1;
                this.year++;
            } else {
                this.month++;
                this.monthName = this.names[this.month-1];
            }
          return  (this.day = 1);
        } else { 
            return (this.day+1);
        }
    }
   

    decrement() {
        if(this.day <= 1) {
            if (this.month == 1) {
                this.month = 12;
                this.year--;
            } else {
                this.month--;
                this.monthName = this.names[this.month-1];
            }
            return (this.day = 31);
        } else {
            return (this.day-1);
        }

    }
```

I will use the incremnt as an example to explain these, keep in mind they work the same way as stated before.

Now when either of these methods are called upon they will look at the date and decide firstly is this day greater than 31? If it is it will then check the month, is it the 12 month? Then it will give us the next month of the following year. Otherwise it will give us the first day of the next month. If it fulfills neither of these requirements it will simply add one day to the date.

When we call upon this in the console it will look like this added to our other console.log and const lines of code. We need to put it before the final output so we can be sure it will run. In this case we will want to incremnt the date.

```JavaScript
  const date = new Date(31, 12, 2022)
  console.log(date.increment()) //Output -> 1
  console.log(date.short()) //Output -> 1/1/2023
```

This now gives us an output of the 1/1/2023 when we set the Date class as 31, 12, 2022 as it incremnted it by one and the increment method worked its magic.

Once we add in the other formats to the console log it will look like this.
keep in mind date is still set to 31/12/2023, and is being incremented.

```JavaScript
  console.log(date.short()) //Output -> 1/1/2023
  console.log(date.medium()) //Output -> January 1, 2023
  console.log(date.long())  //Output -> 1 January 2023
  ```

And just like that boom done. 

This is what the final code looks like all pretty...

```JavaScript
 class Date {
    constructor(day, month, year){
    this.day = day;
    this.month = month;
    this.year = year;
    this.names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];;
    this.monthName = this.names[month-1];
    }

    short() {
        return `${this.day}/${this.month}/${this.year}`
    }
    medium() {
        return `${this.monthName} ${this.day}, ${this.year}`
    }
    long() {
        return `${this.day} ${this.monthName} ${this.year}`
    }
    
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
}
const date = new Date(31, 12, 2022)

// console.log(date.decrement())
console.log(date.increment()) //Output -> 1

console.log(date.short()) //Output -> 1/1/2023
console.log(date.medium()) //Output -> January 1, 2023
console.log(date.long()) //Output -> 1 January 2023
```
