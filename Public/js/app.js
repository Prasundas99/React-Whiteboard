//Working with Canvs api starts from here  

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var widthRatio = 3;
canvas.height = 120;
canvas.width = canvas.height * widthRatio;


ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

/*//Sellecting elements of the commands
document.querySelectorAll("[data-command]").forEach(
     item => {
          item.addEventListener("click", (e)=>{
               console.log(item.getAttribute("data-command"));
          } )
     }
);

//Sellecting elements of the tools
document.querySelectorAll("[data-tools]").forEach(
     item => {
          item.addEventListener("click", (e) => {
               document.querySelector("[data-tools].active").classList.toggle("active");
               item.classList.toggle("active");
               console.log(item.getAttribute("data-tools"));
             })
     }
);

//Sellecting elements of the shapes
document.querySelectorAll("[data-shape]").forEach(
     item => {
          item.addEventListener("click", (e) => {
               document.querySelector("[data-shape].active").classList.toggle("active");
               item.classList.toggle("active");
               console.log(item.getAttribute("data-shape"));
          })
     }
);


//Sellecting elements of the colours
document.querySelectorAll("[data-color]").forEach(
     item => {
          item.addEventListener("click", (e) => {
               document.querySelector("[data-color].active").classList.toggle("active");
               item.classList.toggle("active");
               console.log(item.getAttribute("data-color"));
          })
     }
);




let painting = false;
  
  function startposition(e){
       painting = true;
       draw(e);
  }

  function finishedposition(){
       painting=false;
       ctx.beginPath();
  }

  function draw(e) {
       if(!painting) return;
       ctx.lineWidth = 5;
       ctx.lineCap = "round";
     ctx.fillStyle = "#FF0000";
       ctx.lineTo(e.clientX , e.ClientY);
       ctx.stroke();
       ctx.beginPath();
       ctx.moveTo(e.clientX , e.clientY);
  }

  canvas.addEventListener("mousedown",startposition);
  canvas.addEventListener("mouseup", finishedposition);
  canvas.addEventListener("mousemove", draw);



  ctx.moveTo(0, 0);
  ctx.lineTo(200, 100);
  ctx.stroke();


 */
 
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 150, 75);
