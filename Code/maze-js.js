window.onload = function()
{
  var Start = document.getElementById('S');
  var End = document.getElementById('E');
  var Boxes = document.getElementsByClassName('boxes');
  var Cheat_Box = document.getElementById('Cheat');
  gameStart = false;
  Is_Cheat = false;

  for(var i = 0; i < 9; i++)
  {
      Boxes[i].addEventListener('mouseover', MeetBoxes);
  }
  Cheat_Box.addEventListener('mouseover', Cheat);
  Start.addEventListener('mouseover', StartGame);
  End.addEventListener('mouseover', EndGame);
}

function StartGame()
{
  gameStart = true;
  Is_Cheat = false;
  if(document.getElementById('aside-word'))
    document.getElementById('aside-word').setAttribute('id', 'aside-word-disappear');
  var boxes = document.getElementsByClassName('boxes');
  for(var i = 0; i < 9; i++)
  {
    boxes[i].setAttribute('style', 'background-color:rgb(238,238,238)');
  }
}

function EndGame()
{
  if(gameStart == true){
    if(Is_Cheat == true){
      var text = document.getElementById('aside-word-disappear');
      text.innerText = "Don't cheat, you should start form the 'S'"
      + " and move to the 'E' inside the maze!";
      text.id = 'aside-word';
      return;
    }
    var text = document.getElementById('aside-word-disappear');
    text.innerText = "You Win";
    text.id = 'aside-word';
    gameStart = false;
  }
}

function MeetBoxes(event)
{
  if(gameStart == false) return;
  gameStart = false;
  event.target.setAttribute('style', 'background-color:red');
  var text = document.getElementById('aside-word-disappear');
  text.innerText = "You Lose";
  text.id = 'aside-word';
}

function Cheat()
{
  if(gameStart == false) return;
  Is_Cheat = true;
}
