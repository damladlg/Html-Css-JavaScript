function dice_roll() {
  var dice1, dice2;
  dice1 = Math.floor(Math.random() * 6 + 1);
  dice2 = Math.floor(Math.random() * 6 + 1);

  document.getElementById("part_dice1").innerHTML =
    "<img src=" + "images/" + dice1 + ".png>";
  document.getElementById("part_dice2").innerHTML =
    "<img src=" + "images/" + dice2 + ".png>";
}
