// Select color input
let color = document.getElementById("colorPicker");
// Select size input
let makeGridSize = document.getElementById("sizePicker");
let table = document.getElementById("pixelCanvas");

//Begining of submit function to make event for creation of grid size for height and width

makeGridSize.addEventListener("submit", function (e) {
  e.preventDefault();
  let table = document.getElementById("pixelCanvas");
  table.innerHTML = "";
  //local variable used to obtain the height(columns) of grid.
  let height = document.getElementById("inputHeight").value;
  //local variable used to obtain the length(rows) of grid.
  let width = document.getElementById("inputWidth").value;
  makeGrid(height, width);
  // When size is submitted by the user, call makeGrid()
});
//End of submit function

// Function used to iterate over the height and table variable to create cells and table for grid.
function makeGrid(height, width) {
  for (let i = 0; i < height; i++) {
    let column = table.insertRow(i);
    for (let j = 0; j < width; j++) {
      let tdCell = column.insertCell(j);
      //Begining of function to create an event for user to add and remove color from table cells.
      tdCell.addEventListener("click", function (e) {
        e.preventDefault();
        if (tdCell.style.backgroundColor) {
          tdCell.style.backgroundColor = "";
        } else {
          tdCell.style.backgroundColor = color.value;
        }
      });
    }
  }
}
//End of entire click event function.
