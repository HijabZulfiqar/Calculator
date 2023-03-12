
let screen = document.querySelector(".input-screen");
let btn = document.querySelectorAll(".btn");
const btnContainer = document.getElementById("#btn-container");
// //////////////////////////
// 
btn.forEach(function(b) {
    b.addEventListener('click', function() {
        if (b.classList.contains("num")) {
            screen.value += b.innerHTML;
            console.log(screen.value);
        }
        if (b.classList.contains("del")) {
            screen.value = screen.value.slice(0, screen.value.length-1);
            console.log(screen.value);
        }
        if(b.classList.contains("reset")){
            screen.value="";
        }
        if (b.classList.contains("equal")) {
            screen.value = eval(screen.value);
          }
          if (b.classList.contains("mult")) {
            screen.value += "*";
          }
    })
})

