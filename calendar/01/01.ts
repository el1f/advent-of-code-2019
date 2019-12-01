const DATA = require('./01_data.json');

const getFuel = (mass: number): number => Math.floor(mass / 3) - 2;

// Test fuel calculation
console.log(getFuel(12));
console.log(getFuel(14));
console.log(getFuel(1969));
console.log(getFuel(100756));
console.log(getFuel(2));

// Calculate total fuel consumption of modules

const total = DATA.masses.reduce((subtotal: number, nextMass: number) => subtotal + getFuel(nextMass), 0);
console.log(`TOTAL: ${total}`);

// Now let's calculate the mass of the fuel

const getFuelRecursively = (mass: number): number => {
    const requiredFuel = getFuel(mass);
    if (requiredFuel > 0) return requiredFuel + getFuelRecursively(requiredFuel);
    return 0;
};

console.log(`TESTING: ${100756 + getFuelRecursively(100756)} FUEL: ${getFuelRecursively(100756)}`);

console.log(
    `TOTAL WITH FUEL'S FUEL IF SHIP WAS A SINGLE MODULE: ${total +
        getFuelRecursively(total)} FUEL: ${getFuelRecursively(total)}`,
);

// Now let's do it for each separate module

const finalTotal = DATA.masses.reduce(
    (subtotal: number, nextMass: number) => subtotal + getFuel(nextMass) + getFuelRecursively(getFuel(nextMass)),
    0,
);

console.log(`TOTAL WITH FUEL'S FUEL: ${finalTotal} FUEL: ${finalTotal - total}`);

// Not exactly the most optimized way to do it but whatever :P
