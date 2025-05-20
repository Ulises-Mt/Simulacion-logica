function simularAND() {
  const a = parseInt(document.getElementById("bit1").value);
  const b = parseInt(document.getElementById("bit2").value);
  const resultado = a && b;
  document.getElementById("resultado-classic").textContent = `Resultado: ${a} AND ${b} = ${resultado}`;
}

function simularHadamard() {
  const resultado = "El qubit está ahora en superposición: |0⟩ + |1⟩ / √2";
  document.getElementById("resultado-quantum").textContent = resultado;
}
