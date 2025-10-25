// Convertir de kilómetros a millas, sabiendo que: (1 kilómetro es igual a 0.62 millas )
// Ejemplo: 10 kilómetros = 6.21371 millas

const KM_TO_MILE_FACTOR: number = 0.621371;

function convertKMtoMI(km: number): string {
  if (km <= 0) {
    return 'Tienes que poner un número positivo';
  }

  const miles = km * KM_TO_MILE_FACTOR;
  return `${km} kilómetros es igual a ${miles.toFixed(2)} millas`;
}

// ✅ Esperamos a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('conversionForm') as HTMLFormElement;

  form.addEventListener('submit', function (e) {
    // ✅ Prevenimos el comportamiento por defecto del formulario
    e.preventDefault();

    const kmInput = document.getElementById('kmInput') as HTMLInputElement;
    const resultOutput = document.getElementById(
      'resultOutput'
    ) as HTMLDivElement;

    const km: number = parseFloat(kmInput.value);

    resultOutput.textContent = convertKMtoMI(km);
  });
});
// convertKMtoMI(10);
