nomeDosEstudantes_Array=[]
function enviar(){
    var nome1 = document.getElementById("nameOfTheStudent1").value;
    var nome2 = document.getElementById("nameOfTheStudent2").value;
    var nome3 = document.getElementById("nameOfTheStudent3").value;
    var nome4 = document.getElementById("nameOfTheStudent4").value;
    nomeDosEstudantes_Array.push(nome1)
    nomeDosEstudantes_Array.push(nome2)
    nomeDosEstudantes_Array.push(nome3)
    nomeDosEstudantes_Array.push(nome4)
    console.log(nomeDosEstudantes_Array)
    document.getElementById("displayName").innerHTML = nomeDosEstudantes_Array
    //Adicionar estilo aos botões
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";
}
function sorting(){
    nomeDosEstudantes_Array.sort()
    console.log(nomeDosEstudantes_Array)
    document.getElementById("displayName").innerHTML = nomeDosEstudantes_Array
}