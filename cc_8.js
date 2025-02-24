//Task 1: Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate)
    console.log(`Net Salary: $${netSalary.toFixed(2)}`);
};// created function calculateSalary(baseSalary, bonus, taxRate) that computes the net salary 
// that uses the formula: Net Salary = (Base Salary + Bonus) - (Base Salary * Tax Rate)
//and logs the result to the console rounded to two decimal places

calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"
// testing output

//Task 2: Function Expression
function calculateDiscount(price, discountRate) {
    let finalPrice = price - (price * discountRate)
    return `Final Price: $${finalPrice.toFixed(2)}`;
};
// created function expression calculateDiscount(price, discountRate) to determine the final price
//using the formula: Final Price = Price - (Price * Discount Rate)

console.log(calculateDiscount(100, 0.2)); 
console.log(calculateDiscount(250, 0.15)); 
// logged results to the console

//Task 3: Arrow Function
const calculateServiceFee = (amount, serviceType) => {
    let fee = 0;
    if (serviceType === 'Premium') {
        fee = amount * 0.15;
    }
    else if (serviceType === 'Standard') {
        fee = amount * 0.1;
    }
    else if (serviceType === 'Basic'){
        fee = amount *0.05;
    }
    else {
        return `Invalid`;
    }
    return `Service Fee: $${fee.toFixed(2)}`;
};

//created arrow function calculateServiceFee(amount, serviceType) that applies a fee:
// "Premium" → 15% of the amount.
// "Standard" → 10% of the amount.
// "Basic" → 5% of the amount.

console.log(calculateServiceFee(200, "Premium")); 
console.log(calculateServiceFee(500, "Standard")); 
//logged results to the console

//Task 4: Parameters and Arguments
function calculateRentalCost (days, carType, insurance = false) {
    let cost = 0;
    if (carType === 'Economy' && insurance === true) {
        cost = (days *40) + 20;
    }
    else if (carType === 'Economy' && insurance === false) {
        cost = days *40;
    }
    else if (carType === 'Standard' && insurance === true) {
        cost = (days*60) + 20;
    }
    else if (carType === 'Standard' && insurance === false) {
        cost = days*60;
    }
    else if (carType === 'Luxury' && insurance === true) {
        cost = (days*100) + 20;
    }
    else if (carType === 'Luxury' && insurance === false) {
        cost = days*100;
    }
    return `Total Renatal Cost: $${cost}`;
};
//created function calculateRentalCost that calculates rental costs based on the number of days, car type, and insurance
//the function calculates rental costs basd on the following:
// "Economy" = $40/day
// "Standard" = $60/day
// "Luxury" = $100/day
// Insurance costs an extra $20 per day.

console.log(calculateRentalCost(3, "Economy", true)); 
console.log(calculateRentalCost(5, "Luxury", false)); 
// logged results to the console

//Task 5: Returning Values
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    return `Total Payment: $${totalPayment.toFixed(2)}`;
}; 
// created function calculateLoanPayment that returns total loan payment based on the following formula:
//Total Payment = Principal + (Principal * Rate * Time)

console.log(calculateLoanPayment(1000, 0.05, 2)); 
console.log(calculateLoanPayment(5000, 0.07, 3)); 
// logged results to the console

//Task 6: Higher-Order Functions
let transactions = [200, 1500, 3200, 800, 2500]; // created array transactions with five values

function filterLargeTransactions(transactions,filterFunction) {
    let largeTransactions = transactions.filter(filterFunction);
    return largeTransactions;
};
//created higher-order function filterLargeTransactions(transactions, filterFunction)to find transactions above $1000.

console.log(filterLargeTransactions(transactions, amount => amount > 1000)); // logged results to the console

//Task 7: Closures
let cart = createCartTracker();
function createCartTracker() {
    let cart = 0;
    return function addItems(items_num) {
        cart += items_num;
        return `Total Cart Value: $${cart}`;
    }
};
//created function createCartTracker() that returns addItems function 
// to add items and maintain a running total.

console.log(cart(20)); 
console.log(cart(35)); 
// logged results to the console

//Task 8: Recursion in JavaScript
function calculateSavings(years_num,amount) {
    let savings = amount;
    if (years_num <10) {
        savings = amount + (amount *0.05)
        years_num++;
        calculateSavings(years_num,savings);
    }
    else if (years_num === 10) {
        console.log(`Projected Savings: $${savings.toFixed(2)}`)
    };
};
//created recursive function calculateSavings that projects savings growth.
//Each year increases savings by 5% until reaching year 10.

calculateSavings(8, 1000); 
calculateSavings(5, 5000); 
// logged results to the console
