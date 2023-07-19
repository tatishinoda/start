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
function tempoRestante() {
    let diaFinal = document.querySelectorAll('[id^="obj_"]')
    console.log(diaFinal);

    for (let i = 0; i < diaFinal.length; i++) {
        let diaFinalId = diaFinal[i].getAttribute('id');
        let tempoFinal = diaFinalId.split('_')[1];
        let deadline = new Date(tempoFinal);
        console.log(deadline);

        let agora = new Date();
        let t = Math.floor(deadline.getTime() - agora.getTime());
        let dia = Math.floor(t / (1000 * 60 * 60 * 24));
        let hora = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minuto = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let segundo = Math.floor((t % (1000 * 60)) / 1000);

        if (t < 0) {
            document.getElementById("obj_" + tempoFinal).innerHTML = "Prazo finalizado"
        } else {
            document.getElementById("obj_" + tempoFinal).innerHTML = dia + "<div class='dias'>d</div> <span class='separador'>:</span>"  + hora + "<div class='dias'>d</div> <span class='separador'>:</span>" + minuto + "<div class='dias'>d</div> <span class='separador'>:</span>" + segundo + "<div class='dias'>d</div> <span class='separador'>:</span>";
        }

    }
}

function StartTimeRemaining(){
    tempoRestante();
	setInterval(function(){
		tempoRestante();
	}, 1000)
}


StartTimeRemaining();
