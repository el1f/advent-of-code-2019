const DATA = require('./01_data.json');

const getFuel = (mass: number): number => Math.floor(mass / 3) - 2;

// Test fuel calculation
console.log(getFuel(12));
console.log(getFuel(14));
console.log(getFuel(1969));
console.log(getFuel(100756));

// Calculate total fuel consumption of modules

const total = DATA.masses.reduce((subtotal: number, nextMass: number) => subtotal + getFuel(nextMass), 0);
console.log(`TOTAL: ${total}`);
