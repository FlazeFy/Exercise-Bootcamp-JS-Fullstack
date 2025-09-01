// Write a code to find area of rectangle.
// Example : length = 5, width = 3
// Output : 15
// Formula 
// Area = length * width
var len1 = 5;
var width1 = 3;
var area = len1 * width1;
console.log(area);
console.log("\n");
// Write a code to find perimeter of rectangle.
// Example : length = 5, width = 3
// Output : 16
// Formula
// Perimeter = 2 * (length + width)
var len2 = 5;
var width2 = 3;
var perimeter = 2 * (len2 + width2);
console.log(perimeter);
console.log("\n");
// Write a code to find diameter, circumference and area of a circle.
// Example : radius = 5
// Output : diameter = 10, circumference = 31.4159, area = 78.539
// Formula 
// Diameter = 2 * radius
// Circumference = 2 * pi * radius
// Area = pi * radius^2
var radius = 5;
var diameter = radius * 2;
var circumference = 2 * Math.PI * radius;
var area3 = Math.PI * radius * radius;
console.log(diameter);
console.log(circumference.toFixed(4));
console.log(area3.toFixed(4));
console.log("\n");
// Write a code to find angles of triangle if two angles are given.
// Example : a = 80, b = 65
// Output : 35
// Formula 
// Third Angle = 180 - First Angle - Second Angle
var a1 = 80;
var a2 = 65;
var a3 = 180 - a1 - a2;
console.log(a3);
console.log("\n");
// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// Example : 400 days → 1 year, 1 month, 5 days
// Example : 366 days → 1 year, 0 month, 1 day
// Input : Declare the total days
var days1 = 400;
var days2 = 366;
// Process : Find Years
var year1 = Math.floor(days1 / 365);
var year2 = Math.floor(days2 / 365);
// Process : Count the remaining value from modulo with 1 year (365 days)
var remainYear1 = days1 % 365;
var remainYear2 = days2 % 365;
// Process : Find Month
var month1 = Math.floor(remainYear1 / 365);
var month2 = Math.floor(remainYear2 / 365);
// Process : Count the remaining value from module with 1 month (30 days)
var remainMonth1 = remainYear1 % 30;
var remainMonth2 = remainYear2 % 30;
// Process : The remaining value from month modulo is the days
var dayRes1 = remainMonth1;
var dayRes2 = remainMonth2;
// Output : Combine the years, months, and days
console.log("".concat(days1, " days \u2192 ").concat(year1, " year, ").concat(month1, " month, ").concat(dayRes1, " day"));
console.log("".concat(days2, " days \u2192 ").concat(year2, " year, ").concat(month2, " month, ").concat(dayRes2, " day"));
console.log("\n");
// Write a code to get difference between dates in days.
// Example : date1 = 2022-01-20, date2 = 2022-01-22
// Output : 2
// Input : Declare the date
var date1 = new Date("2022-01-20");
var date2 = new Date("2022-01-22");
// Process : Find the difference in ms
var ms = Math.abs(date2.getTime() - date1.getTime());
// Process : Convert ms to days
var days = ms / (1000 * 60 * 60 * 24);
// Output
console.log(days);
