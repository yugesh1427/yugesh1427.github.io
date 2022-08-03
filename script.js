const elts = {
  text1: document.getElementById("text2"),
  text2: document.getElementById("text3")
};

const texts = [
  "Happy",
  "Birthday",
  "Baby",
  "Queen",
  "👑",
  "Happy",
  "Birthday",
  "Cute",
  "Devil",
  "❤️",
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
      if (shouldIncrementIndex) {
          textIndex++;
      }

      doMorph();
  } else {
      doCooldown();
  }
}

animate();



/* date*/                        
window.onload= run();
function run() {
with (document.agecalc) {
dd = day.Value="20";
mm = month.value="8";
yy = year.value="1999";
if (yy.length != 4 || isNaN(yy)) {
document.agecalc.timealive.value = "Please enter a 4-digit year.";
document.agecalc.year.select();
document.agecalc.year.focus();
return;
   }
}
days = new Date();
gdate = days.getDate();
gmonth = days.getMonth();
gyear = days.getFullYear();
if (gyear < 2000) gyear += 1900;
age = gyear - yy;
if ((mm == (gmonth + 1)) && (dd <= parseInt(gdate))) 
	{
	age = age; 
	} 
else 
	{
	if (mm <= (gmonth)) 
		{
		age = age;
		} 
	else 
		{
		age = age - 1; 
   		}
	}
if (age == 0) age = age;
document.agecalc.timealive.value = "               Happy "
 + age+ " years old . . .\n\n";

if (mm <= (gmonth + 1)) age = age - 1;
if ((mm == (gmonth + 1)) && (dd > parseInt(gdate))) age = age + 1;
var m;
var n; 
//////////////DOCUMENTED CORRECTIONS AND COMMENTS -i//////////// 
var p;                                                                                                    ////////ADDED VAR p //////////
if (mm == 12) n = 31 - dd;                                                               ///////////n is days to end year///
if (mm == 11) n = 61 - dd;                                                               //////////mm is birthday month///////////////////
if (mm == 10) n = 92 - dd;
if (mm == 9) n = 122 - dd;
if (mm == 8) n = 153 - dd;
if (mm == 7) n = 184 - dd;
if (mm == 6) n = 214 - dd;
if (mm == 5) n = 245 - dd;
if (mm == 4) n = 275 - dd;
if (mm == 3) n = 306 - dd;
if (mm == 2) { n = 334 - dd; if (leapyear(yy)) n++; }
if (mm == 1) { n = 365 - dd; if (leapyear(yy)) n++; }                                   //////m is birthday days from new year/////////////////

if (gmonth == 0) m = 0;																				//////////Added this: m=0/////////////////////////////////////		  
if (gmonth == 1) m = 31;                                                             
if (gmonth == 2) {m = 59; if (leapyear(gyear)) m++;}              
if (gmonth == 3)  { m = 90;  if (leapyear(gyear)) m++; }          
if (gmonth == 4)  { m = 120; if (leapyear(gyear)) m++; }         
if (gmonth == 5)  { m = 151; if (leapyear(gyear)) m++; }         
if (gmonth == 6)  { m = 181; if (leapyear(gyear)) m++; }         
if (gmonth == 7)  { m = 212; if (leapyear(gyear)) m++; }         
if (gmonth == 8)  { m = 243; if (leapyear(gyear)) m++; }         
if (gmonth == 9)  { m = 273; if (leapyear(gyear)) m++; }         
if (gmonth == 10) { m = 304; if (leapyear(gyear)) m++; }        
if (gmonth == 11) { m = 334; if (leapyear(gyear)) m++; }        
if (gmonth == 12) { m = 365; if (leapyear(gyear)) m++; }                      /////////////////////////This line is not useful//////////////////////

months = age * 12;
months += 13 - parseInt(mm);                                                                 
months += gmonth; 
totdays = (parseInt(age) * 365);
totdays += age / 4;
totdays = parseInt(totdays) + gdate + m + n;                                           //////////////////////correction for leap years!//////////////

if (gmonth == 0) {p=gdate;}                                                                        ////////////////////Added this//////////////////////////////
if (gmonth == 1) {p = 31 + gdate; if (leapyear(gyear)) m = m+1;}              ////////////////////February///////////////////////////////

if (gmonth == 2) {p = 59 + gdate; if (leapyear(gyear)) m = m+1; p++;}      //////////////////added p++////////////////////////////////
if (gmonth == 3)  { p = 90 + gdate;  if (leapyear(gyear)) p++; }       
if (gmonth == 4)  { p = 120 + gdate; if (leapyear(gyear)) p++; }      
if (gmonth == 5)  { p = 151 + gdate; if (leapyear(gyear)) p++; }      
if (gmonth == 6)  { p = 181 + gdate; if (leapyear(gyear)) p++; }      
if (gmonth == 7)  { p = 212 + gdate; if (leapyear(gyear)) p++; }      
if (gmonth == 8)  { p = 243 + gdate; if (leapyear(gyear)) p++; }      
if (gmonth == 9)  { p = 273 + gdate; if (leapyear(gyear)) p++; }      
if (gmonth == 10) { p = 304 + gdate; if (leapyear(gyear)) p++; }     
if (gmonth == 11) { p = 334 + gdate; if (leapyear(gyear)) p++; }     
if (gmonth == 12) { p = 365 + gdate; if (leapyear(gyear)) p++; }             //////////////////this line is not useful gmonth is never 12//////
weeks = (age * 365) + n + p; 
/////////////age*365 + days to end year(birth year) + p (days from new year to today)////////

weeks = weeks / 7;
etcdays = parseFloat(weeks) - parseInt(weeks);
etcdays = Math.round(etcdays * 7);
weeks = parseInt(weeks);
etcdays += parseInt(age / 4);           
if (etcdays > 7) weeks += parseInt(etcdays / 7);      
document.agecalc.timealive.value += "               or " + months + " months old\n";
document.agecalc.timealive.value += "               or " + weeks + " weeks old\n";
document.agecalc.timealive.value += "               or " + totdays + " days old\n";
var time = new Date();
ghour = time.getHours();
gmin = time.getMinutes();
gsec = time.getSeconds(); 
hour = ((age * 365) + n + p) * 24;
hour += (parseInt(age / 4) * 24);                                                        /////////////////////////correction for leap years: //////////////////
document.agecalc.timealive.value += "               or " + hour + " hours old\n";
var min = (hour * 60) + gmin;
document.agecalc.timealive.value += "               or " + min + " minutes old\n";
sec = (min * 60) + gsec;
document.agecalc.timealive.value += "               or " + sec + " seconds old";
mm = mm - 1;                                                                                                /////////////////////mm was the birthday month//////////////////
var r;
if (mm == 0) r = 0;                                                                                         ////////////////////// r is days from new year to birthday//////////
if (mm == 1) r = 31;
if (mm == 2) { r = 59; if (leapyear(gyear)) m++; }
if (mm == 3)  { r = 90;  if (leapyear(gyear)) r++; }
if (mm == 4)  { r = 120; if (leapyear(gyear)) r++; }
if (mm == 5)  { r = 151; if (leapyear(gyear)) r++; }
if (mm == 6)  { r = 181; if (leapyear(gyear)) r++; }
if (mm == 7)  { r = 212; if (leapyear(gyear)) r++; }
if (mm == 8)  { r = 243; if (leapyear(gyear)) r++; }
if (mm == 9)  { r = 273; if (leapyear(gyear)) r++; }
if (mm == 10) { r = 304; if (leapyear(gyear)) r++; }
if (mm == 11) { r = 334; if (leapyear(gyear)) r++; }
mm = mm + 1;
r = parseInt(r) + parseInt(dd);                                                                     ////////////////////////dd was birthday day of month/////////// 

if ((mm >= (gmonth + 1)) && (dd > gdate)) 
	{
	bday = r - m - gdate; 
	}
else 
	{
	if ((leapyear(gyear)) && ((mm > 2) && (dd < 29))) 
		{
		a = 366;
		}
	 else 
	 	{
		a = 365;
		}
	bday = a + (r - m - gdate);                                            
	/////////a is size days of year///////////////////// 
	}
nhour = 24 - parseInt(ghour);
nmin = 60 - parseInt(gmin);
nsec = 60 - parseInt(gsec);
while (bday > 366) bday -= 365;
if (((bday == 366) && (leapyear(gyear)) || ((bday == 365) && (!leapyear(gyear))))) {
document.agecalc.timealive.value += "\n\nAnd, today is your birthday!";
} else {
document.agecalc.timealive.value += "\n\n              And, next Special day is in:\n           "
+ bday + " days " + nhour + " hrs " + nmin + " mins " + nsec + " secs \n\n                       Im waiting for it.";
setTimeout("run()", 1000);
   }
}
function leapyear(a) {
if (((a%4 == 0) && (a%100 != 0)) || (a%400 == 0))
return true;
else
return false;
}
var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop:false,
    autoplay: 50000,
    paginationClickable: true
  })
  $('.swiper-container').on('mouseenter', function(e){
    console.log('stop autoplay');
    mySwiper.stopAutoplay();
  })
  $('.swiper-container').on('mouseleave', function(e){
    console.log('start autoplay');
    mySwiper.startAutoplay();
  })
  //secret box//

  function myFunction() {
  var text1 = document.getElementById("text1").value;
        
  var x = document.getElementById("myDIV");
  var a = document.getElementById("aa");
  var b = document.getElementById("bb");
  var c = document.getElementById("cc");
  var d = document.getElementById("dd");
  var e = document.getElementById("ee");
  var f = document.getElementById("ff");
  var g = document.getElementById("gg");
  var h = document.getElementById("hh");
  var i = document.getElementById("ii");
  var j = document.getElementById("jj");
  var k = document.getElementById("kk");
  var y = document.getElementById("y");
  if (text1 == "Youme" || text1 == "Yume" || text1 == "YOUME" || text1 == "YUME" || text1 == "youme" || text1 == "yume") {
    x.style.display = "block";
    y.style.display = "none";
  a.style.animationPlayState ="running";
  b.style.animationPlayState ="running";
  c.style.animationPlayState ="running";
  d.style.animationPlayState ="running";
  e.style.animationPlayState ="running";
  f.style.animationPlayState ="running";
  g.style.animationPlayState ="running";
  h.style.animationPlayState ="running";
  i.style.animationPlayState ="running";
  j.style.animationPlayState ="running";
  k.style.animationPlayState ="running";

  } else {
    alert("Wrong Keyword☹️");
  }
  document.getElementById('text1').value = "";

}
