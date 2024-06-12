// Create Types
type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
};

let employee: Employee = {
  id: 1, 
  name: 'Darius',
  retire: (date: Date) => {
    console.log(date)
  }
}

// Create Enums
const enum Size {Small = 1, Medium, Large}; // const
let mySize: Size = Size.Medium;
console.log(mySize)

// Union Types
function kgToLbs(weight: number | string): number {
  //Narrowing
  if (typeof weight === 'number') {
    return weight * 2.2;
  }
  else {
    return parseInt(weight) * 2.2
  }
}
kgToLbs(10)
kgToLbs('10kg')

// Intersection types
type Draggable = {
  drag: () => void
};

type Resizable = {
  resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}

// Literal Types
type Quantity = 50 | 100
let quantity: Quantity = 50;

// Nullable Types
function greet(name: string | null) {
  if (name) {
    console.log(name.toUpperCase());
  }
  else {
    console.log("Hola!");
  }
}

greet(null)

type Customer = {
  birthday: Date
}

// Optional property access operator (?)
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional Call
let log: any = null;
log?.('a');