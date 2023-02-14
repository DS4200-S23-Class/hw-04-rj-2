function pointBorder(point) {
  // create border for individual point
  point.classList.toggle('selected');
}

function pointCoord(point) {
  let cx = point.getAttribute('cx') / 50
  let cy = (500 - point.getAttribute('cy')) / 50
  let newText = 'The coordinate of the clicked point is: (' + cx + ',' + cy + ')';
  document.getElementById('selected-point').innerHTML = newText;
}

function pointClicked() {
  // create border 
  let points = document.getElementsByTagName('circle');
  for (let i = 0; i < points.length; i++){
    points[i].addEventListener('click', function(){pointBorder(points[i])});
    points[i].addEventListener('click', function(){pointCoord(points[i])});

  }
}

pointClicked()