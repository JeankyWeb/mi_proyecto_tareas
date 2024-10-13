function NumeroGrande(numeros) {
    // Convertir los números a cadenas
    const strNumeros = numeros.map(num => num.toString());

    // Función de comparación para ordenar
    const comparar = (a, b) => {
        // Comparar las concatenaciones
        return (b + a).localeCompare(a + b);
    };

    // Ordenar los números usando la función de comparación
    strNumeros.sort(comparar);

    // Unir los números en una sola cadena
    const numeroMayor = strNumeros.join('');

    // Manejar el caso en que todos los números son ceros
    return numeroMayor[0] === '0' ? '0' : numeroMayor;
}

// Escuchar eventos en el input
document.getElementById('inputNumeros').addEventListener('input', () => {
    const input = document.getElementById('inputNumeros').value;
    const numeros = input.split(',').map(num => Number(num.trim())).filter(num => !isNaN(num));
    const output = NumeroGrande(numeros);
    document.getElementById('resultado').innerHTML = `El número más grande es:<br>${output}`;
});
