var orientacao = "N"; 
var posicaoX = 0;
var posicaoY = 0;
var limitX = 0;
var limitY= 0;
function aspirador(x, y, comands) {
    if (comands == null) {
        return (['N', 0, 0])
    }
    limitX = x
    limitY = y
    const preArray = comands.toUpperCase();
    var comandArray = preArray.split("");
    for (let i = 0; i < comandArray.length; i++) {
        var comandAtual = comandArray[i];
        switch (orientacao) {
            case "N":
                norths(comandAtual)
                break;
            case "L":
                easts(comandAtual)
                break;
            case "S":
                souths(comandAtual)
                break;
            case "O":
                wests(comandAtual)
                break;
        }
    }
    return ([orientacao, posicaoX, posicaoY]) 
}
function norths(comandFromArray) {
    switch (comandFromArray) {
        case "F":
            posicaoY += 1
            if (posicaoY > limitY) {
                posicaoY -=1
            }
            break;
        case "T":
            posicaoY -= 1
            if (posicaoY < 0) {
                posicaoY += 1
            }
            break;
        case "D":
            orientacao = "L"
            break;
        case "E":
            orientacao = "O"
            break;
    }
}
function easts(comandFromArray) {
    switch (comandFromArray) {
        case "F":
            posicaoX += 1
            if (posicaoX > limitX) {
                posicaoX -=1
            }
            break;
        case "T":
            posicaoX -= 1
            if (posicaoX < 0) {
                posicaoX +=1
            }
            break;
        case "D":
            orientacao = "S"
            break;
        case "E":
            orientacao = "N"
            break;
    }
}
function souths(comandFromArray) {
    switch (comandFromArray) {
        case "F":
            posicaoY -= 1
            if (posicaoY < 0) {
                posicaoY +=1
            }
            break;
        case "T":
            posicaoY += 1
            if (posicaoY > limitY) {
                posicaoY -= 1
            }
            break;
        case "D":
            orientacao = "O"
            break;
        case "E":
            orientacao = "L"
            break;
    }
}
function wests(comandFromArray) {
    switch (comandFromArray) {
        case "F":
            posicaoX -=1
            if (posicaoX < 0) {
                posicaoX +=1
            }
            break;
        case "T":
            posicaoX += 1
            if (posicaoX > limitX) {
                posicaoX -= 1
            }
            break;
        case "D":
            orientacao = "N"
            break;
        case "E":
            orientacao = "S"
            break;
    }
}