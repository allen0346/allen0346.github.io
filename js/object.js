// ----- sharkFin movining -----
var toLeftMove = document.getElementById("toLeftMove");
var toRightMove = document.getElementById("toRightMove");
var battleShip = document.getElementById("battleShip");
var sharkTween = new TimelineMax({repeat:-1});
sharkTween.add(TweenLite.to(toLeftMove, 10, {right:"100%"}));
sharkTween.add(TweenLite.to(toRightMove, 10, {left:"100%"}));



// ----- cloud Hovering and Clicking-------
// var hoverCloud =  document.getElementsByClassName("hoverCloud");
// console.log(hoverCloud);

$( ".hoverCloud" )
  .mouseover(function() {
    var hcTween = new TimelineMax({repeat:1});
    hcTween.add(TweenLite.to(this,0.5,{yPercent:"-25%"}));
    hcTween.add(TweenLite.to(this,0.5,{yPercent:0}));
  })
  .mouseout(function() {
    content = this.children;
    TweenLite.to(content,0.5,{opacity:0});
  });

$( ".hoverCloud" ).click(function() {
  content = this.children;
  TweenLite.to(content,0.5,{opacity:1});
});



// ----- instruction text ------
var ins = document.getElementById("instruction");
var insTween = new TimelineMax({repeat:-1});
insTween.add(TweenMax.to(ins,1.5,{scale:0.6,repeat:1,yoyo:true}));
// insTween.add(TweenLite.to(ins,2,{scale:1.5}));
// insTween.add(TweenLite.to(ins,2,{font-size:18}));

// ----- instruction text ------
var sep = document.getElementById("seperate");
var sepTween = new TimelineMax({repeat:-1});
sepTween.add(TweenMax.to(sep,1.5,{scale:0.6,repeat:1,yoyo:true}));



// ----- sun glowing -----
var mySun = document.getElementById("sun");
var sunTween = new TimelineMax({repeat:-1,repeatDelay:1});
sunTween.add(TweenMax.to(mySun, 2, {boxShadow:"0px 0px 160px #CFCF00"}) );
sunTween.add(TweenMax.to(mySun, 1, {boxShadow:"0px 0px 20px #CFCF00"}) );



// ----- Twinkling Star & Create Star -----
var starTween = new TimelineMax({repeat:-1});
// ----- create star -----
function createStar(i){
  var tmpStar = document.createElement('figure')
  tmpStar.className = "star";
  tmpStar.style.top =100*Math.random()+'%';
  tmpStar.style.left = 100*Math.random()+'%';
  document.getElementById('sky').appendChild(tmpStar);
  starTween.add(TweenMax.to(tmpStar,1,{opacity:1,delay:0,repeat:1,yoyo:true}),i * 0.17);
}
function myRandom(){
  return 100*Math.random();
}
var i = 0;
while(i<110){

  createStar(i);
  i+=1;
}

// ----- house movining -----
var house = document.getElementById("houseGraphic");
// var houseTween = new TimelineMax({repeat:-1});
// houseTween.add(house,10,{right:1000})
// var photo = document.getElementById("photo");
var houseTween = TweenMax.to(house, 15, {left:"80%",bottom:200});
houseTween.repeat(-1);

// ----- star twinkling -----

// var starTween = new TimelineMax({repeat:-1});
// starTween.add(TweenMax.to(starTest,1,{opacity:1,delay:0,repeat:1,yoyo:true}));
// starTween.add(TweenMax.to(starTest,1,{opacity:0,delay:1}));


// ----- Sky dayNight with star visibility -----
var starTest = document.getElementsByClassName("star");
var sky = document.getElementById("sky");
var skyTween = new TimelineMax({repeat:-1});
var moon = document.getElementById("moon");

skyTween.addLabel("skyChange")
skyTween.to(sky,4,{backgroundColor:"#002E46",delay:4}, "skyChange")
.to(moon,4,{xPercent:"400%"}, "skyChange")
.to(mySun,4,{xPercent:"400%"}, "skyChange+=4")
.to(moon,0.1,{opacity:1}, "skyChange+=4")
.to(moon,4,{xPercent:0}, "skyChange+=4")
.to(starTest,3,{backgroundColor:"white"}, "skyChange+=4")
.to(sky,4,{backgroundColor:"#5CAED9",delay:4}, "skyChange+=8")
.to(mySun,4,{xPercent:0}, "skyChange+=12")
.to(moon,4,{xPercent:"400%"}, "skyChange+=12")
.to(starTest,2,{backgroundColor:"#5CAED9"} ,"skyChange+=13");


// ----- floating cloud moving -----
var fc1 = document.getElementById("fc1");
var fc1Tween = new TimelineMax({repeat:-1});
fc1Tween.add(TweenLite.to(fc1,2,{right:50}));
fc1Tween.add(TweenLite.to(fc1,2,{right:-90}));

var fc2 = document.getElementById("fc2")
var fc2Tween = new TimelineMax({repeat:-1});
fc2Tween.add(TweenLite.to(fc2,2,{right:80}));
fc2Tween.add(TweenLite.to(fc2,2,{right:40}));

var fc3 = document.getElementById("fc3");
var fc3Tween = new TimelineMax({repeat:-1});
fc3Tween.add(TweenLite.to(fc3,2,{right:190}));
fc3Tween.add(TweenLite.to(fc3,2,{right:150}));

// ----- Bottom floating cloud moving -----
var bfc = document.getElementsByClassName("boFlIl");
var bfcTween = new TimelineMax({repeat:-1});
bfcTween.add(TweenLite.to(bfc,2,{xPercent:"50%"}));
bfcTween.add(TweenLite.to(bfc,2,{xPercent:0}));
