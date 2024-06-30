
var braino = document.getElementById("braino"); 
var shockz = document.getElementById("shocks"); 
var darosa = document.getElementById("darosa"); 
var crew = document.getElementById("crew");
  var w = document.getElementById("div-gif1");
  var x = document.getElementById("div-gif2");
  var y = document.getElementById("div-gif3");
  var z = document.getElementById("div-gif4");

 
function playPause1() { 

    if (crew.paused) 
      crew.play();
    else
      crew.pause()

      braino.pause();
      shockz.pause();
      darosa.pause();}
 

  function playPause2() { 
    if (shockz.paused) 
      shockz.play();
    else 
      shockz.pause();

      braino.pause();
      darosa.pause();
      crew.pause();} 

function playPause3() { 
    if (braino.paused) 
      braino.play(); 
    else 
      braino.pause();

      shockz.pause();
      darosa.pause();
      crew.pause();} 
      

function playPause4() { 
    if (darosa.paused) 
      darosa.play();
    else
      darosa.pause()

      braino.pause();
      shockz.pause();
      crew.pause();} 


function playGif1() {


  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "none";
  if (crew.paused)
  w.style.display = "none";
  else
  w.style.display = "block";}

function playGif2() {

  w.style.display = "none";
  y.style.display = "none";
  z.style.display = "none";
  if (shocks.paused)
  x.style.display = "none";
  else
  x.style.display = "block";}


function playGif3() {

  w.style.display = "none";
  x.style.display = "none";
  z.style.display = "none";
  if (braino.paused)
  y.style.display = "none";
  else
  y.style.display = "block";}


function playGif4() {

  w.style.display = "none";
  x.style.display = "none";
  y.style.display = "none";
  if (darosa.paused)
  z.style.display = "none";
  else
  z.style.display = "block";}



