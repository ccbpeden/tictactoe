var clickedSpace;
var currentUser = 'x';
var success = false;

function Freshboard(row1, row2, row3) {
  this.row1 = row1;
  this.row2 = row2;
  this.row3 = row3;
};

var cleanBoard = new Freshboard([false,false,false],[false,false,false],[false,false,false]);

Freshboard.prototype.getRow = function(number){
  if (number === 1) {
    return this.row1;
  } else if (number === 2) {
    return this.row2;
  } else {
    return this.row3;
  }
}

Freshboard.prototype.Play = function(input){
  var rowName = input.slice(0,1);
  rowName = "row" + rowName;
  var colName = parseInt(input.slice(1));
  if(this[rowName][colName] === false){
    console.log("falsy!");
    this[rowName][colName] = currentUser;
    success = true;
  } else {
    alert("Sorry, that position has been filled.");
  };
};

Freshboard.prototype.victoryCondition = function(){
 if((this.row1[0] === currentUser)&&(this.row1[1] === currentUser)&&(this.row1[2] === currentUser)){
   alert("huzzah!");
 }else if ((this.row2[0] === currentUser)&&(this.row2[1] === currentUser)&&(this.row2[2] === currentUser)){
   alert("huzzah!");
 }else if ((this.row3[0] === currentUser)&&(this.row3[1] === currentUser)&&(this.row3[2] === currentUser)){
   alert("huzzah!");
 }else if ((this.row1[0] === currentUser)&&(this.row2[0] === currentUser)&&(this.row3[0] === currentUser)){
   alert("huzzah!");
 }else if ((this.row1[1] === currentUser)&&(this.row2[1] === currentUser)&&(this.row3[1] === currentUser)){
   alert("huzzah!");
 }else if ((this.row1[2] === currentUser)&&(this.row2[2] === currentUser)&&(this.row3[2] === currentUser)){
   alert("huzzah!");
 }else if ((this.row1[0] === currentUser)&&(this.row2[1] === currentUser)&&(this.row3[2] === currentUser)){
   alert("huzzah!");
 }else if ((this.row1[2] === currentUser)&&(this.row2[1] === currentUser)&&(this.row3[0] === currentUser)){
   alert("huzzah!");
 }else if ((this.row1[0] != false)&&(this.row1[1] != false)&&(this.row1[2] != false)&&(this.row2[0] != false)&&(this.row2[1] != false)&&(this.row2[2] != false)&&(this.row3[0] != false)&&(this.row3[1] != false)&&(this.row3[2] != false)){
   alert("draw!");
 };
};

Freshboard.prototype.turnChanger = function (){
  if(success === true){
    if(currentUser === "x"){
      currentUser = "o";
      $('#player').text(currentUser);
    } else {
      currentUser = "x";
      $('#player').text(currentUser);
    }
  }
}

$(document).ready(function() {
  $('#player').text(currentUser);
  $(".tic").click(function() {
    clickedSpace = $(this).val();
    cleanBoard.Play(clickedSpace);
    if (success === true){
      $(this).text(currentUser);
      cleanBoard.victoryCondition();
      cleanBoard.turnChanger();
    };
  });
});
