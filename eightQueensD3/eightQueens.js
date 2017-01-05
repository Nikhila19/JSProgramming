
 /* Based on: 
    http://code.activestate.com/recipes/578497-eight-queen-problem-javascript/
    By Thomas Lehmann

    AND 

    The Code Clinic - JS solution
  */
function Board(size) {
  this.numColumns = size;
  this.numRows = size;
  this.columns = new Array(this.numColumns);
  this.lastRow = size -1;
  this.lastColumn = size -1;

  var numberOfDiagonals = 2*size - 1;
  this.diagonalUp = new Array(numberOfDiagonals);
  this.diagonalDown = new Array(numberOfDiagonals);

  // initializing the arrays
  for (var i=0; i < this.numRows; ++i) {
    this.columns[i] = -1
  }
  for (var i=0; i < numberOfDiagonals; ++i) {
    this.diagonalUp[i] = -1 // '/' diagonal
    this.diagonalDown[i] = -1// '\' diagonal
  }

  this.canPlace = function(row, col) {
    diagUpIndex = row +col;
    diagDownIndex = this.numColumns - 1 - row + col;
    // console.log("canPlace: "+this.columns);
    // console.log("canPlace: "+ this.diagonalUp[diagUpIndex]);
    // console.log("canPlace: "+ this.diagonalDown[diagDownIndex]);
    if (!this.columns.includes(row) && this.diagonalUp[diagUpIndex] < 0 && this.diagonalDown[diagDownIndex] < 0) {
      return true;
    } 
    return false;
  }

  this.placeQueen = function(row, col) {
    diagUpIndex = row +col;
    diagDownIndex = this.numColumns - 1 - row + col;
    this.columns[col] = row;
    this.diagonalUp[diagUpIndex] = 1;
    this.diagonalDown[diagDownIndex] = 1;
    alert("placeQueen: row="+row+"; col= "+col);

    d3.selectAll("g")
     .append("circle")
      .classed("queen-"+row+"-"+col, true)
      .attr("cy", function() {
        return 18 + (row*40);
      })
      .attr("cx", function(){
        return 20 + (col*40); 
      })
      .style("fill","green")
      .attr("r", 10);

    // d3.selectAll("g")
    // .append("text")
    // .classed("queen-"+row+"-"+col, true)
    // .style("font-size", "40")
    // .attr("text-anchor", "middle")
    // .data([row])
    //   .attr("dy", function(d) {
    //     console.log("d= "+d);
    //     return 35 + (d*40);
    //   })
    // .data([col])
    //   .attr("dx", function(d){
    //     console.log("d= "+d);
    //     return 20 + (d*40); 
    //   })
    // .text('\u1200');
  }

  this.removeQueen = function(col) {
    var row = this.columns[col];
    alert("removeQueen: row="+row+"; col="+col);
    diagUpIndex = row +col;
    diagDownIndex = this.numColumns - 1 - row + col;

    this.columns[col] = -1;
    this.diagonalUp[diagUpIndex] = -1;
    this.diagonalDown[diagDownIndex] = -1;

    d3.selectAll(".queen-"+row+"-"+col).remove();

  }

  this.positionTheQueen = function() {
    // for (var col=0; col < this.numColumns; col++) {
    var col = 0;
    var logging = true;
    var row = 0;
    while (col >= 0 && col < this.numColumns) {
      logging && console.log("COLUMN>>>>> "+col+"; columns = "+this.columns);
      if (this.columns[col] >= 0) {
        row = this.columns[col];
        // $('.step').text("removeQueen: row="+row+"; col="+col);
          this.removeQueen(col);
        row += 1;
      } else {
        row = 0;
      }

      for (; row < this.numRows; row++) {
        logging && alert("Trying to place the queen in col= "+col+" and row "+ row+" : "+this.canPlace(row,col));
        if (this.canPlace(row,col)) {
          this.placeQueen(row,col);
          if (col == this.lastColumn) {
            console.log("Found solution: "+this.columns);
            return;
          } else {
            break;
          }
        } 
      }
      if (this.columns[col] < 0) {
        logging && alert("Reached last row of col "+col+"; <<<<<<<< BACKTRACK <<<<<<<<<");
       // return; 
        col -= 1;
        if (col < 0) { return; }
      }
      else {
        col += 1;
      }
    } //while
  }
}
