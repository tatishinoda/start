let tabLinks = document.querySelectorAll(".tablinks");
let tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function (element) {
   element.addEventListener("click", openTabs);
});
function openTabs(element) {
   let btnTarget = element.currentTarget;
   let tabs = btnTarget.dataset.tabs;

   tabContent.forEach(function (element) {
      element.classList.remove("active");
   });

   tabLinks.forEach(function (element) {
      element.classList.remove("active");
   });

   document.querySelector("#" + tabs).classList.add("active");

   btnTarget.classList.add("active");
}


// Contador
function atualizaContador(dataFinal, elementoContador) {
   const deadline = new Date(dataFinal).getTime();

//faz verificação se é um valor válido
   if (isNaN(deadline)) {
      console.error('Formato de data inválido:' . dataFinal );
      return;
   }

   const x = setInterval(function () {
      const agora = new Date().getTime();
      const tempoRestante = deadline - agora;

      if (tempoRestante <= 0) {
         clearInterval(x);
         elementoContador.textContent = "Prazo finalizado!";
         return;
      }

      const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
      const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

       elementoContador.textContent = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";//`${dias}d ${horas}h ${minutos}m ${segundos}s`
   }, 1000);
}

// Pega todos os elementos com o atributo data-deadline
const elementoContadors = document.querySelectorAll("[data-deadline]");

// percorre todos os elementos encontrados e chama a função atualizaContador
elementoContadors.forEach((element) => {
const dataFinal = element.dataset.deadline;
atualizaContador(dataFinal, element);
});
