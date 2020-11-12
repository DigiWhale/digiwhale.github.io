

function x() {
  document.getElementById('terminal').style.visibility='visible'
};
function build_svg() {
  var tl = new TimelineMax();
  var bgd = $('#background rect');
  var table = $('#table_legs, #table');
  var lampLeg = $('#lamp > .lamp-leg');
  var lampbt = $('#lamp-bottom');
  var lampLight = $('#lamp > .light');
  var lampLine = $('#lamp-line');
  var lampLineB = $('#lamp-line-b');
  var lampLineT = $('#lamp-line-t');
  var lampCircle = $('#lamp-circle');
  var lampHead = $('#lamp-head');
  var lampHeader = $('#lamp-header');
  var lampBody = $('#lamp-body');
  var computer = $('#computer > *');
  var keyboard = $('#keyboard > *');
  var asset = $('#computer_mouse > * , #coffee_mug > *');

  tl.from(bgd, 0.02, {opacity:0, scale:0, transformOrigin: 'center center'})
  .staggerFrom(table, 0.02, {y:"-=200", opacity: 0, ease: Elastic.easeOut}, 0.01)
  .from(lampLeg, 0.02, {opacity:0, x: "-200", ease: Elastic.easeOut})
  .from(lampbt, 0.02, {opacity:0, scale:0, transformOrigin: 'center center'})
  .from(lampLineB, 0.3,{opacity:0, transformOrigin: '100% 100%', rotation: '-180deg'})
  .from(lampCircle,0.1,{opacity:0, x: '-=100', y: '-=100'})
    .from(lampLineT, 0.3,{opacity:0, transformOrigin: '0% 100%', rotation: '-180deg'})
  .from(lampHead, 0.02, {opacity:0, scale:0, ease: Elastic.easeOut})
  .from(lampHeader, 0.05, {transformOrigin: '60% 60%', rotation: '60deg'})
  .from(lampBody, 0.5, {transformOrigin: '70% 70%', rotation: '-25deg'})
  .staggerFrom(computer, 01, {opacity: 0, scale: 0, transformOrigin: 'center center', ease: Back .easeOut}, 0.02)
  .staggerFrom(keyboard, 0.05, {opacity: 0, y: '-=100', ease: Linear.easeInOut }, 0.05)
  .staggerFrom(asset, 0.05, {opacity: 0}, 0.05)
  .to(lampLight, 0.02, {opacity:0.8, ease: Elastic.easeOut, delay:0.1}, "a")
    .to(lampLight, 0.01, {opacity:0}, "b")
    .to(lampLight, 0.01, {opacity:0.2}, "c")
  .to(bgd, 0.02, {opacity: 0.1, delay:0.1}, "a-=0.05")
  .to(bgd, 0.01, {opacity: 1}, "b-=0.05")
  .to(bgd, 0.01, {opacity: 0.5}, "c-=0.05")
  // .to(bgd, 0.02, {opacity: 1, fill: '#FDD10D'})
  .fromTo(lampLine, 0.02, {opacity: 0},{opacity: 0.2, delay:0.1}, "a-=0.05")
  .to(lampLine, 0.01, {opacity: 1}, "b-=0.05")
  .to(lampLine, 0.01, {opacity: 0.5}, "c-=0.05");

  // document.getElementById('console_text_1').textContent="Andrew_Humphrey@mac:~ $ sudo python hire_me.py"

  // document.getElementById('console_text_3').textContent="Andrew_Humphrey@mac:~ $ node robotics"
  // document.getElementById('console_text_4').textContent="Andrew_Humphrey@mac:~ $ ls -a grep|usb"
  // document.getElementById('console_text_5').textContent="Andrew_Humphrey@mac:~ $ cat resume.txt"
}
build_svg()



// Terminal javascript
var term;
$('#terminal').terminal({
  hack: function() {
      runMatrix();
  },
  help: function() {
    this.echo("[[;green;black]- hack\n- cat\n- clear]");
  },
  cat: function() {
    this.echo($('<img src="https://placekitten.com/408/287" width=50px>'));
}
}, {
  greetings: "[[;blue;black]Welcome to my world. Type help for list of commands.]"
}
);

// Animate.cs
document.documentElement.style.setProperty('--animate-duration', '10s');
document.documentElement.style.setProperty('--animate-duration', '.5s');

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNavBar()};
// Get the navbar
var navbar = document.getElementById("navbar");
// Get the offset position of the navbar
var sticky = 30;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var delay = 3000;
setTimeout(
    function()
    {
      x()
    },
    delay
);

function download() {
  var iframe = document.getElementById('ahresume');
  iframe.src = "./Andrew_Humphrey_Resume.pdf";
}
download()

// Mapping icons to their functions
document.getElementById("third_icon").addEventListener('click',function ()
{
 show_resume();
}  ); 

document.getElementById("fourth_icon").addEventListener('click',function ()
{
 show_videos();
}  ); 

function show_resume() {
  var contentRow = document.getElementById("content_row");
  var x = document.getElementById("content_box");
  var icon = document.getElementById("third_icon")
  if (x.style.visibility == "hidden") {
    console.log("here")
    icon.style.backgroundColor = "red";
    icon.style.opacity = "50%";
    x.style.visibility = "visible";
    contentRow.style.height = "1070px";
  } else {
    console.log("hi")
    icon.style.backgroundColor = "transparent";
    icon.style.opacity = "100%";
    x.style.visibility = "hidden";
    contentRow.style.height = "0px";
  }
}

function show_videos() {
  var youtubeVideos = document.getElementById("youtube_videos");
  var icon = document.getElementById("fourth_icon")
  if (youtubeVideos.style.visibility == "hidden") {
    icon.style.backgroundColor = "red";
    icon.style.opacity = "50%";
    youtubeVideos.style.visibility = "visible";
    youtubeVideos.style.height = "1070px";
  } else {
    icon.style.backgroundColor = "transparent";
    icon.style.opacity = "100%";
    youtubeVideos.style.visibility = "hidden";
    youtubeVideos.style.height = "0px";
  }
}

// Get the canvas node and the drawing context
const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

// set the width and height of the canvas
const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;

// draw a black rectangle of width and height same as that of the canvas
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

function matrix () {
  // Draw a semitransparent black rectangle on top of previous drawing
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);

  // Set color to green and font to 15pt monospace in the drawing context
  ctx.fillStyle = '#0f0';
  ctx.font = '15pt monospace';

  // for each column put a random character at the end
  ypos.forEach((y, ind) => {
    // generate a random character
    const text = String.fromCharCode(Math.random() * 128);

    // x coordinate of the column, y coordinate is already given
    const x = ind * 20;
    // render the character at (x, y)
    ctx.fillText(text, x, y);

    // randomly reset the end of the column if it's at least 100px high
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    // otherwise just move the y coordinate for the column 20px down,
    else ypos[ind] = y + 20;
  });
}
function runMatrix(){
  // render the animation at 20 FPS.
  setInterval(matrix, 50);
}
