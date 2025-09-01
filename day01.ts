// Write a code to find area of rectangle.
// Example : length = 5, width = 3
// Output : 15

// Formula 
// Area = length * width
const len1: number = 5
const width1: number = 3
const area: number = len1 * width1
console.log(area)
console.log("\n")

// Write a code to find perimeter of rectangle.
// Example : length = 5, width = 3
// Output : 16

// Formula
// Perimeter = 2 * (length + width)
const len2: number = 5
const width2: number = 3
const perimeter: number = 2 * (len2 + width2)
console.log(perimeter)
console.log("\n")

// Write a code to find diameter, circumference and area of a circle.
// Example : radius = 5
// Output : diameter = 10, circumference = 31.4159, area = 78.539

// Formula 
// Diameter = 2 * radius
// Circumference = 2 * pi * radius
// Area = pi * radius^2
const radius: number = 5 
const diameter: number = radius * 2
const circumference: number = 2 * Math.PI * radius
const area3: number = Math.PI * radius * radius
console.log(diameter)
console.log(circumference.toFixed(4))
console.log(area3.toFixed(4))
console.log("\n")

// Write a code to find angles of triangle if two angles are given.
// Example : a = 80, b = 65
// Output : 35

// Formula 
// Third Angle = 180 - First Angle - Second Angle
const a1: number = 80
const a2: number = 65
const a3: number = 180 - a1 - a2
console.log(a3)
console.log("\n")

// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// Example : 400 days → 1 year, 1 month, 5 days
// Example : 366 days → 1 year, 0 month, 1 day

// Input : Declare the total days
const days1: number = 400
const days2: number = 366

// Process : Find Years
const year1: number = Math.floor(days1 / 365)
const year2: number = Math.floor(days2 / 365)

// Process : Count the remaining value from modulo with 1 year (365 days)
const remainYear1: number = days1 % 365
const remainYear2: number = days2 % 365

// Process : Find Month
const month1: number = Math.floor(remainYear1 / 365)
const month2: number = Math.floor(remainYear2 / 365)

// Process : Count the remaining value from module with 1 month (30 days)
const remainMonth1: number = remainYear1 % 30
const remainMonth2: number = remainYear2 % 30

// Process : The remaining value from month modulo is the days
const dayRes1: number = remainMonth1
const dayRes2: number = remainMonth2

// Output : Combine the years, months, and days
console.log(`${days1} days → ${year1} year, ${month1} month, ${dayRes1} day`)
console.log(`${days2} days → ${year2} year, ${month2} month, ${dayRes2} day`)
console.log("\n")

// Write a code to get difference between dates in days.
// Example : date1 = 2022-01-20, date2 = 2022-01-22
// Output : 2

// Input : Declare the date
const date1: Date = new Date("2022-01-20")
const date2: Date = new Date("2022-01-22")

// Process : Find the difference in ms
const ms: number = Math.abs(date2.getTime() - date1.getTime())

// Process : Convert ms to days
const days: number = ms / (1000 * 60 * 60 * 24)

// Output
console.log(days)
