function calculateDistance() {
  const diameterInput = document.getElementById("diameter");
  const distanceToTopInput = document.getElementById("distanceToTop");
  const indexInput = document.getElementById("index");
  const resultElement = document.getElementById("result");

  const diameter = parseFloat(diameterInput.value);
  const distanceToTop = parseFloat(distanceToTopInput.value);
  const index = parseFloat(indexInput.value);

  if (isNaN(diameter) || diameter <= 0 || isNaN(distanceToTop) || distanceToTop < 0 || isNaN(index) || index < 0) {
    resultElement.textContent = "Пожалуйста, введите корректные данные.";
    return;
  }
  
  const distanceToCenter = calculateDistanceToCenter(diameter, distanceToTop, index);
  resultElement.textContent = "Расстояние от центра диаметра до вершины паза: " + distanceToCenter.toFixed(2);
}

function calculateDistanceToCenter(diameter, distanceToTop, index) {
  
  const slot = distanceToTop - diameter;
  const radius = diameter / 2;
  const coefficient = index / 2;  

  return slot + radius + coefficient;
}
