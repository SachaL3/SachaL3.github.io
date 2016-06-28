// popup-box
function toggle_visibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'block';
}

//spinning jupiter
var looper;
var degrees = 0;
function rotateAnimation(el,speed){
  var planet = document.getElementById(el);
  if(navigator.userAgent.match("Chrome")){
    planet.style.WebkitTransform = "rotate("+degrees+"deg)";
  }else if(navigator.userAgent.match("Firefox")){
    planet.style.MozTransform = "rotate("+degrees+"deg)";
  }else if(navigator.userAgent.match("MSIE")){
    planet.style.msTransform = "rotate("+degrees+"deg)";
  }else if(navigator.userAgent.match("Opera")){
    planet.style.OTransform = "rotate("+degrees+"deg)";
  }else{
    planet.style.transform = "rotate("+degrees+"deg)";
  }
  looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')', speed);
  //clockwise, cw
  degrees++;
  if(degrees > 359){
    degrees = 1;
    //counter-clockwise, ccw
  //      degrees--;
  // if(degrees < 359){
  //   degrees = -1;             
  }
  document.getElementById("status").innerHTML = "rotate("+degrees+"deg)"; //for showing the rotating degrees
}

//spinning moon
var turn;
var degreeS = 0;
function rotateMoon(tl,speeD){
  var cog1 = document.getElementById(tl);
  if(navigator.userAgent.match("Chrome")){
    cog1.style.WebkitTransform = "rotate("+degreeS+"deg)";
  }else if(navigator.userAgent.match("Firefox")){
    cog1.style.MozTransform = "rotate("+degreeS+"deg)";
  }else{
    cog1.style.transform = "rotate("+degreeS+"deg)";
  }
  turn = setTimeout('rotateMoon(\''+tl+'\','+speeD+')', speeD);
  degreeS--;
  if(degreeS < -359){
    degreeS = -1;            
  };
};