// Función de declaración para suma
function sumaArray(a = 0, b = 0) {
  const result = a + b;
  console.log([result]);
}

// Función de expresión para resta
const restaArray = function(a = 0, b = 0) {
  const result = a - b;
  console.log([result]);
};

// Función de flecha para multiplicación
const multiplicacionArray = (a = 0, b = 0) => {
  const result = a * b;
  console.log([result]);
};

// Función de flecha para división
const divisionArray = (a = 0, b = 1) => {
  const result = a / b;
  console.log([result]);
};

sumaArray(); // [0]
sumaArray(2); // [2]
sumaArray(2, 3); // [5]

restaArray(); // [0]
restaArray(5); // [5]
restaArray(10, 3); // [7]

multiplicacionArray(); // [0]
multiplicacionArray(1,2); // [2]
multiplicacionArray(3, 4); // [12]

divisionArray(); // [0]
divisionArray(10,1); // [10]
divisionArray(12, 4); // [3]
