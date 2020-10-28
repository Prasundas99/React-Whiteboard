//Sellecting elements of the commands
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