// tabs
var tabLinks = document.querySelectorAll(".tablinks"); //pega todos os elementos com a classe tablinks
var tabContent = document.querySelectorAll(".tabcontent"); //pega todos os elementos com a classe tabcontent

tabLinks.forEach(function(element) { //para cada elemento da classe tablinks
   element.addEventListener("click", openTabs); //adiciona um evento de click que chama a função openTabs
});


function openTabs(element) { //criando a função openTabs
   var btnTarget = element.currentTarget; //pega o elemento que foi clicado
   var tabs = btnTarget.dataset.tabs; //pega o valor do atributo data-tabs do elemento que foi clicado

   tabContent.forEach(function (element) {//para cada elemento da classe tabcontent
      element.classList.remove("active");//remove a classe active
   });

   tabLinks.forEach(function(element) {//para cada elemento da classe tablinks
      element.classList.remove("active");//remove a classe active
   });

   document.querySelector("#" + tabs).classList.add("active"); //adiciona a classe active ao elemento que tem o id igual ao valor do atributo data-tabs do elemento que foi clicado

   btnTarget.classList.add("active");//adiciona a classe active ao elemento que foi clicado
}


// Contador
function countdown(counterDiv = '.counter') { // Pode ser passado um seletor para a div principal
   var main, endDate, returnCalculate; // Criando as variáveis

   // Selecionar a div principal
   main = document.querySelectorAll(counterDiv); // Pode ser passado um seletor para a div principal
   if (main.length === 0) return false; // Se não encontrar a div principal, retorna falso

   // Seleciona a propriedade 'data-deadline' e faz uma soma para esperar o fim do dia
   endDate = main[0].getAttribute('data-deadline');
   if (endDate) endDate = endDate + 'T23:59:59-03:00';
   else return false;

   // Calcular e escrever
   returnCalculate = countdown_calculate(endDate, main); // Chama a função que calcula e escreve
   if( returnCalculate ) setInterval( () => countdown_calculate(endDate, main), 1000); // Se o retorno for true, chama a função a cada 1 segundo

   return returnCalculate; // Retorna o valor da função que calcula e escreve
}

function countdown_calculate( endDate, main ) { // Função que calcula e escreve o contador regressivo
   var days, hours, minutes, seconds, endDate; // Criando as variáveis que serão usadas

   endDate = new Date(endDate).getTime(); // Transforma a data final em milisegundos
   if (isNaN(endDate)) return false; // Se a data final não for um número, retorna falso

   var startDate = new Date(); // Pega a data atual
   startDate = startDate.getTime(); // Transforma a data atual em milisegundos

   var timeRemaining = parseInt((endDate - startDate) / 1000); // Calcula o tempo restante em segundos

   // "Mágica" da matemática
   if (timeRemaining >= 0) { // Se o tempo restante for maior ou igual a 0
       days = parseInt(timeRemaining / 86400); // Calcula os dias e transforma em horas

       timeRemaining = (timeRemaining % 86400); // Calcula o resto dos dias e transforma em horas
       hours = parseInt(timeRemaining / 3600); // Calcula as horas e transforma em minutos

       timeRemaining = (timeRemaining % 3600); // Calcula o resto das horas e transforma em minutos
       minutes = parseInt(timeRemaining / 60);// Calcula os minutos e transforma em segundos

       timeRemaining = (timeRemaining % 60); // Calcula o resto dos minutos e transforma em segundos
       seconds = parseInt(timeRemaining); // Calcula os segundos

       // Selecionar os filhos na div pai e escrever resultados
       main.forEach(element => {
           element.querySelector(".--days").textContent = ("0" + days).slice(-2); // Adiciona o zero na frente se o número for menor que 10
           element.querySelector(".--hours").textContent = ("0" + hours).slice(-2); // Adiciona o zero na frente se o número for menor que 10
           element.querySelector(".--minutes").textContent = ("0" + minutes).slice(-2); // Adiciona o zero na frente se o número for menor que 10
           element.querySelector(".--seconds").textContent = ("0" + seconds).slice(-2); // Adiciona o zero na frente se o número for menor que 10
       });

       return true;
   } else {
       return false;
   }
}
