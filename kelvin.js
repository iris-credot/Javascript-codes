// declaration and initialization of a variable kelvin.
const kelvin = 0;
// converting kelvin to celsius
const celsius =kelvin - 273;
// converting celsius to fahrenheit and round the number
let fahrenheit = Math.round(celsius * (9/5) + 32);
// rounding fahrenheit downwords
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = celsius * (33 / 100);
// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);