function verificarCor () {
    let input = document.getElementById("campo").value;

    input = input.toLowerCase();

    switch (input) {
        case "vermelho":
            document.querySelector("body").style.backgroundColor = "red";
        break;

        case "verde":
            document.querySelector("body").style.backgroundColor = "green";
        break;

        case "azul":
            document.querySelector("body").style.backgroundColor = "blue";
        break;

        default:
            let p = document.getElementById("mensagem");

            p.innerHTML =  "Cor Indisonível no momento para: " + input;
            p.style.fontFamily = "Arial, sans-serif";
            p.style.margin = "50px";
    };
};