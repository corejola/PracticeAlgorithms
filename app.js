const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach - for loop alternative

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }
//can use an input, index, or the object (companies)
// companies.forEach(function (company) {
//   console.log(company);
// });

// filter
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//     //pushing ages that meet the if condition into the canDrink array
//   }
// }

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// })

const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink)


// filter Retail Companies:
// const retailerComapnies = companies.filter(function (shit) {
//   if (shit.category === "Finance")
//     return true;
// })

const retailerCompanies = companies.filter(shit => shit.category === "Auto")

// console.log(retailerCompanies);

const eightiesCompanies = companies.filter(year => (year.start >= 1980 && year.start < 1990));
// console.log(eightiesCompanies)

// companies that lasted 10 years or more
const tenYears = companies.filter(retailer => (retailer.end - retailer.start >= 10));
// console.log(tenYears);

// map
//create array of company names
const companyNames = companies.map(function (company) {
  return company.name;
});

// `${templateString}`
// const testMap = companies.map(function (company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap);

const powAges = ages
  .map(age => Math.pow(age, 2))
  .map(age => age * 2);

// console.log(powAges)


// sort companies by start year (takes to values to compare, return 1 or -1
// // const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1
//   } else {
//     return -1
//   }
// });

// ? = ternary operator for the condition.
// : = else condition 
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
// console.log(sortedCompanies)

const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges)

// reduce
// for comparison For Loop

let ageTotal = 0;
for (var i = 0; i < ages.length; i++) {
  ageTotal += ages[i];
};
// console.log(ageTotal);
//sum of the ages
const ageSum = ages.reduce(function (total, age) {
  return total + age;
}, 0);

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

// total years for all companies
// const totalYears = companies.reduce(function (total, company) {
//   return total + (company.end - company.start);
// }, 0);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

console.log(totalYears)

//combined methods
