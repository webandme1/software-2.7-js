const personName = "Brandon";

export const pet = {
    name: "Cheddar",
    species: "cat",
    breed: "Bengal / Persian",
    color: "orange"
};

export const greet = (name) => {
    console.log(`Hello from name.js, ${name}!`);
}

// The default export is the export that is seen by the importing file without the need for destructuring.
export default personName;