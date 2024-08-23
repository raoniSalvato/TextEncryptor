function botao_crip(){
    let textarea = document.getElementById("textarea");
    let texto = textarea.value;
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    let textarea_resposta = document.getElementById("textarea_resposta");
    textarea_resposta.value = textoCriptografado;
    

    document.getElementById('imagemSemNada').style.display = 'none';
    document.getElementById('textarea_resposta_copiar').style.display = 'inline-flex';
}

function botao_descrip() {
    let textarea = document.getElementById("textarea");
    let texto = textarea.value;
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    let textarea_resposta = document.getElementById("textarea_resposta");
    textarea_resposta.value = textoDescriptografado;
    

    document.getElementById('imagemSemNada').style.display = 'none';
    document.getElementById('textarea_resposta_copiar').style.display = 'inline-flex';
}

function copiar_texto(){
    const textoCopiado = document.getElementById("textarea_resposta").value;
    navigator.clipboard.writeText(textoCopiado);
    limpar_campo()
}

function limpar_campo(){
    let textarea1 = document.getElementById("textarea")
    textarea1.value = ""

    let textarea2 = document.getElementById("textarea_resposta")
    textarea2.value = ""
}

