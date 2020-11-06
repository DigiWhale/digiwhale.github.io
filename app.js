// const x = require("snapsvg")
window.onload = play();
document.getElementById('logo').addEventListener('wheel', () => { play() })


function play() {
var blue = '#2980b9';
var l = Snap("#logo");
// console.log(l)
// var p = l.select('#line');
l.clear();
// l.append(p);

// p.attr({
// fill: blue,
// stroke: '#0066CC',
// });

setTimeout( function() {
// modify this one line below, and see the result !
var logoTitle = 'Andrew Humphrey';
var logoRandom = '';
var logoTitleContainer = l.text(0, '50%', '');
console.log(l.text)
var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
logoTitleContainer.attr({
fontSize: 280,
fontFamily: 'Dosis',
fontWeight: '600'
});

function generateRandomTitle(i, logoRandom) {
setTimeout( function() {
logoTitleContainer.attr({ text: logoRandom });
}, i*50 );
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