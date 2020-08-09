//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no bottão
.addEventListener('click', cloneField);

//Executar uma ação
function cloneField(){
   //Duplicar os campos
   const newfieldsContainer = document.querySelector('.schedule-item').cloneNode(true)
    
   //pegar campos
   const fields = newfieldsContainer.querySelectorAll('input')
   
   //para cada campo limpar os campos
    /*fields[0].value = "";
   fields[1].value = "";
    */
    fields.forEach(function(field){
        //pegar field do momento e limpa
        field.value = "";
    })



   //Colocar na página
    document.querySelector('#schedule-items').appendChild(newfieldsContainer)

}


