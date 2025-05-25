/* 


*/

const abas = document.querySelector(".aba");

abas.forEach(aba => {
    abas.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado");
    aba.Selecionada.classList.remove("selecionado");

    aba.classList.add("selecionado");

}

function mostrarInformacoesDaAba(aba) {
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    const idDoElementoDeinformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById();
    informacaoASerMostrada.classList.add("selecionado");


}