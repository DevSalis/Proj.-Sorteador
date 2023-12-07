function sortear() {
    
    const min = Math.ceil(document.querySelector(".minimo").value);
    const max = Math.floor(document.querySelector(".maximo").value);
    const paragrafoResult = document.querySelector(".resultado");

    if (min >= max) {
        alert("O primeiro número não pode ser iqual ou maior que o segundo")
      }

    else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        
        sortear (paragrafoResult.innerHTML = result)
    } 

    
}

