document.getElementById("defaultOpen").click();

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

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
  resultElement.textContent = "Расстояние от центра диаметра до вершины паза: " + distanceToCenter.toFixed(3);
}

function calculateGapWidth() {
  const gapWidthInput = document.getElementById("gapWidth");
  const indexInputtwo = document.getElementById("indextwo");
  const resultElement = document.getElementById("gapResult");

  const gapWidth = parseFloat(gapWidthInput.value);
  const indextwo = parseFloat(indexInputtwo.value);

  if (isNaN(gapWidth) || gapWidth < 0 || isNaN(indextwo) || indextwo < 0) {
      resultElement.textContent = "Пожалуйста, введите корректные данные.";
      return;
  }

  const gapWidthCalculated = calculateGapWidthValue(gapWidth, indextwo);
  resultElement.textContent = "Номинальная ширина паза " + gapWidth + " и допуск " + indextwo + " середина паза равна " + gapWidthCalculated.toFixed(4);
}

function calculateDistanceToCenter(diameter, distanceToTop, index) {
  
  const slot = distanceToTop - diameter;
  const radius = diameter / 2;
  const coefficient = index / 2;  

  return slot + radius + coefficient;
}

function calculateGapWidthValue(indextwo, gapWidth) {
    const mediumWidth = gapWidth / 4;
    const coefficient1 = indextwo / 2;  

  return coefficient1 + mediumWidth;
}