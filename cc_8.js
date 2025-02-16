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
