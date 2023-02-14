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

// Add point from user input
function addPoint() {
    let choosenX = document.getElementById("cx").value;
    let choosenY = document.getElementById("cy").value;

    // scale the point corresponded to our frame size
    scaledX = choosenX * 50;
    scaledY = 500 - (choosenY * 50);

    // get the frame that new point will add on
    let graph = document.getElementById('frame')

    // create a new circle element in the SVG namespace
    let newPoint = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    // set the attributes of the new added point
    newPoint.setAttribute("cx", scaledX);
    newPoint.setAttribute("cy", scaledY); 
    newPoint.setAttribute("r", 10); 

    // display the new point on the graph
    graph.appendChild(newPoint);

    // add the clicked function to the added point
    let newCoord = "(" + choosenX + ", " + choosenY + ")"
    let newCoord = "(" + choosenX + ", " + choosenY + ")";
    newPoint.addEventListener('click', function(){pointBorder(newPoint)});
    newPoint.addEventListener('click', function(){pointCoord(newPoint)});;
}

document.getElementById("button").addEventListener("click", addPoint);

pointClicked()