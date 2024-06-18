document.getElementById('calcular').addEventListener('click', function() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');
    const resultadoTexto = document.getElementById('resultadoTexto');
    const erroDiv = document.getElementById('erro');

    erroDiv.textContent = '';  
    resultadoDiv.style.display = 'none';  
    resultadoTexto.textContent = '';  
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        erroDiv.textContent = 'Por favor, insira valores válidos para peso e altura.';
        return;
    }

    const alturaM = altura / 100; 
    const imc = peso / (alturaM * alturaM);

    let categoria;
    if (imc < 18.5) {
        categoria = 'Baixo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidade';
    }

    resultadoTexto.textContent = `Seu IMC é ${imc.toFixed(2)} (${categoria}).`;
    resultadoDiv.style.display = 'block';  
});
