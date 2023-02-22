const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // pop remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // push adiciona um novo elemento no array.
console.log(pilotos)

pilotos.shift() // Shift remove o primeiro elemento da lista.
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posição.
console.log(pilotos)

// splice pode adicionar elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remove
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)  // novo array a partir da posição direcionada.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)