var containerLink = document.getElementById("bottom__link");

containerLink.addEventListener("click", showHiddenElements);

function showHiddenElements(){

    var hiddenElements = document.getElementsByClassName("row hidden");

    if (hiddenElements.length == 0){
        return new Error("Ошибка был передан пустой массив данных в функцию отображения скрытых элементов - Обратитесь к разрабработчику");
    }

    else{
        var lengthHiddenElements = hiddenElements.length;
        for(i=0; i<lengthHiddenElements; i++){
            hiddenElements[0].classList.remove("hidden");
        }
        containerLink.classList.toggle("hidden");

      
    }
}

