var pessoas = [[1,'CG',2,'S',null],[2,'JC',1,'S',null],[3,'JS',3,'S',null],[4,'MS',2,'N',25/09]];
var contratos = [[1,150,100],[2,300,48],[3,550,24],[4,1000,12]];
var pagamentos = [[1,4,"01/09"],[2,3,"05/09"],[3,1,"19/09"],[4,2,"25/09"]];
var pessoas2 = [1,'CG',2,'S',null]
var linhaResultadoFinal = new Array()

function tester(arrayInicial) {
}

function aPagar(id) {
    linhaResultadoFinal.push(id[0]);

    for (let i = 0; i < pagamentos.length; i++) {
        for (let j = 0; j < pagamentos[i].length; j++) {
                if (pagamentos[i].slice() == linhaResultadoFinal) {
                    var data = pagamentos[i]. pop()
                }
        }
    }

    linhaResultadoFinal.push(data);

    console.log(data)
    return ([linhaResultadoFinal])
}
console.log(aPagar(pessoas2))