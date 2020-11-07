// const x = require("snapsvg")
window.onload = play("#logo");
document.getElementById('svg').addEventListener('click', () => { display_string = "Hands off the terminal buddy!" ;play("#logo") })
document.getElementById('logo').addEventListener('click', () => { display_string = " ".repeat(display_string.length) ; play("#logo") })
document.getElementById('first_icon').addEventListener('mouseenter', () => { display_string = " ~$ git checkout -b My GitHub Page" ; play("#button_description") })
document.getElementById('second_icon').addEventListener('mouseenter', () => { display_string = " ~$ git checkout -b My LinkedIn Page" ; play("#button_description") })
document.getElementById('third_icon').addEventListener('mouseenter', () => { display_string = " ~$ git checkout -b My Resume" ; play("#button_description") })
document.getElementById('fourth_icon').addEventListener('mouseenter', () => { display_string = " ~$ git checkout -b My Youtube Page" ; play("#button_description") })
document.getElementById('fifth_icon').addEventListener('mouseenter', () => { display_string = " ~$ git checkout -b My Projects" ; play("#button_description") })

display_string = 'Welcome to my portfolio, feel free to take a look around. (Click to dismiss)'


function play(element_id) {
var blue = '#2980b9';
var l = Snap(element_id);
l.clear();
setTimeout( function() {
var logoTitle = display_string;
var logoRandom = '';
var logoTitleContainer = l.text(0, '50%', '');
var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
logoTitleContainer.attr({
fontSize: 30,
fontFamily: 'Dosis',
fontWeight: '600'
});

function generateRandomTitle(i, logoRandom) {
setTimeout( function() {
logoTitleContainer.attr({ text: logoRandom });
}, i*20 );
}

for( var i=0; i < logoTitle.length+1; i++ ) {
logoRandom = logoTitle.substr(0, i);
for( var j=i; j < logoTitle.length; j++ ) { 
logoRandom += possible.charAt(Math.floor(Math.random() * possible.length)); 
}
generateRandomTitle(i, logoRandom);
logoRandom = '';
}

}, 500 );

}

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
document.getElementById('console_text_1').textContent="Andrew_Humphrey@mac:~ $ sudo python hire_me.py"
document.getElementById('console_text_2').textContent="Andrew_Humphrey@mac:~ $ npm install robotics"
document.getElementById('console_text_3').textContent="Andrew_Humphrey@mac:~ $ node robotics"
document.getElementById('console_text_4').textContent="Andrew_Humphrey@mac:~ $ ls -a grep|usb"
document.getElementById('console_text_5').textContent="Andrew_Humphrey@mac:~ $ cat resume.txt"

$('.inner').terminal({
  hello: function(what) {
      this.echo('Hello, ' + what +
                '. Wellcome to this terminal.');
  }
}, {
  greetings: 'My First Terminal'
});