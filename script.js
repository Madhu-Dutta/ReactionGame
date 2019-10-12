var shape = document.getElementById("shapebox");
var start = new Date().getTime();
var timer = document.getElementById("time");
var randTime = Math.random() * 3000 ;   
var hone = "-";
var htwo = "-";  
var hthree ="-"; 
var lone = "-";
var ltwo = "-";  
var lthree ="-";     
var btn = document.querySelector("input"); 
var high = document.getElementById("highest");   
var low = document.getElementById("lowest");       
var resetbtn = document.getElementById("reset");    
var p1button = document.getElementById("p1Btn");

btn.addEventListener('click', updateBtn);  
function updateBtn() {
  if (btn.value === 'START') {
    btn.value = 'STOP';    
function makeShapeAppear(){
 //shapes with random properties appearing in random positions.
        var top = Math.random() * 200;
        var left = Math.random() * 700;
        var height = Math.random() * 170;
        var width = height;
        shape.style.top = top + "px";
        shape.style.left = left + "px";
        shape.style.width = width + "px";
        shape.style.height = height + "px";
       //circle or rectangle
        if(Math.random() > 0.5){
            shape.style.borderRadius = "50%";
        }else{
             shape.style.borderRadius = "0";
        }

        shape.style.backgroundColor = generateRandomColors();
        shape.style.border = "8px solid " + generateRandomColors();      
    
//shape appear after page load & timer starts    
  shape.style.display = "block";
  start = new Date().getTime();  
}   
function shapeAfterDelay(){
    timeLoop = setTimeout(makeShapeAppear, randTime);
}  
shapeAfterDelay();
function measureTimePassed(){
    shape.onclick = function(){
        shape.style.display = "none";
        var end = new Date().getTime();
        var timeTaken = (end - start) / 1000;
        timer.textContent = timeTaken + " seconds";
        shapeAfterDelay();
        
        //get highest score
        if(hone=="-" || timeTaken < hone) {
            hthree = htwo;
            htwo = hone;			
            hone = timeTaken;
			}else if(htwo=="-" || timeTaken < htwo) {
			hthree = htwo;
			htwo = timeTaken;
			}else if(hthree=="-" || timeTaken < hthree) {
			hthree = timeTaken;
			}
        document.getElementById("hfirst").innerHTML = hone +  " s";
        document.getElementById("hsecond").innerHTML = htwo + " s";
        document.getElementById("hthird").innerHTML = hthree + " s";
        //get lowest score
         if(lone=="-" || timeTaken > lone) {
            ltwo = lone;			
            lone = timeTaken;
			}else if(ltwo=="-" || timeTaken > ltwo) {
			 ltwo = timeTaken;
            }else if(lthree=="-" || timeTaken < lthree){
             lthree = timeTaken;        
            }   
        document.getElementById("lfirst").innerHTML = lone +  " s";
        document.getElementById("lsecond").innerHTML = ltwo + " s";
        document.getElementById("lthird").innerHTML = lthree + " s";
    }
};
measureTimePassed();
function generateRandomColors() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }  
generateRandomColors();    
      
  }else if(btn.value === 'STOP'){
    btn.value = 'START';  
    clearTimeout(timeLoop);
    shape.style.display = "none";
    timer.innerHTML = " "; 
    p1button.textContent = "Player Score " + " " + hone + " s"; 
  }
    resetbtn.onclick = function(){
         location.reload(true); 
    }   
  }
  