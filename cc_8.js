//Task 1: Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate)
    console.log(`Net Salary: $${netSalary.toFixed(2)}`);
}// created function calculateSalary(baseSalary, bonus, taxRate) that computes the net salary 
// that uses the formula: Net Salary = (Base Salary + Bonus) - (Base Salary * Tax Rate)
//and logs the result to the console rounded to two decimal places

calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"
// testing output