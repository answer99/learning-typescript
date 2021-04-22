const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// define tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];

// or use Type alias
type Drink = [string, boolean, number];

const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];