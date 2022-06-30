var url = "https://locar-pw1-2021.herokuapp.com/products";
let xhr = new XMLHttpRequest();

function buscarCarros(){
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4){
            if (xhr.status == 200){
                console.log(JSON.parse(xhr.responseText));
            }
        }
    }
    xhr.send();
}

buscarCarros();