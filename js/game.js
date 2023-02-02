function mudar(){
document.getElementById('pic1').src = './imgs/apontando.png';
}

function voltar(){
   document.getElementById('pic1').src = './imgs/interativo.png';
}

//game:

const matheus = document.querySelector(".matheus");
const pilha = document.querySelector(".pilha");

const jump = () => {
   matheus.classList.add("jump");

   setTimeout(()=> {matheus.classList.remove("jump") }, 700);
} 

const loop = setInterval(()=> {
   console.log("loop");

   const pilhaPosition = pilha.offsetLeft; 
   const matheusPosition = +window.getComputedStyle(matheus).bottom.replace("px", "");

   if(pilhaPosition<=120 && pilhaPosition>0 && matheusPosition<75){
      pilha.style.animation = "none";
      pilha.style.left = `${pilhaPosition}px`;
      matheus.style.animation = "none";
      matheus.style.bottom = `${matheusPosition}px`;
      matheus.src = "./imgs/gameover.png";
      matheus.style.width = "200px";
      matheus.style.height = "200px";

      const btt = document.createElement("button");
      btt.innerHTML = "Tentar novamente";
      btt.style.backgroundColor = "lightgray";
      btt.style.color = "green";
      btt.style.borderRadius = "10px";
      btt.style.fontSize = "larger";
      btt.style.padding = "10px";
      btt.style.marginLeft = "120px";
      btt.style.marginTop = "250px";
      btt.style.cursor = "pointer";
      document.getElementsByClassName("game-board")[0].appendChild(btt);

      btt.addEventListener("click", function(){
         window.location.reload();
      });

      clearInterval(loop);
   }
}, 10);

document.addEventListener("click", jump);
// poderia ser "keydown" na linha acima


