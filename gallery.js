let arrImage = ["https://images.unsplash.com/photo-1542099720-6a8998d675d7?ixlib=rb-0.3.5&s=a6bc9c922f89a4c1032fd9a92e5d5cac&auto=format&fit=crop&w=401&q=80",
    "https://images.unsplash.com/photo-1542101206144-eee046996f19?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cbc77eb1ca1fa4521b7fc6819ed6a2f&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1542173212-6fbb91e107f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0f80857a9986c67b43b0ce666adf327&auto=format&fit=crop&w=376&q=80",
    "https://images.unsplash.com/photo-1542155469-fdda4225a6d0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b610bdcf8f6221acd848266d27630afd&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1525803141539-19835e2b9fc6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c9097d61e4d504f79b85fac75bdfe4b9&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1529735188788-e1e753fd9171?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d8c40a13dcf9d229fc975d3ddd6a2eb&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1542191677-f3329ec8c8a4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b371f912f3c550f79a2c90d436a9bf68&auto=format&fit=crop&w=1498&q=80"];

function shuffle() {
    for (let i = arrImage.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrImage[i], arrImage[j]] = [arrImage[j], arrImage[i]];
    }
    return arrImage;
}

function myFunction() {
    let gallery = document.getElementById("gallery");
    let shuffleArrImage = shuffle(arrImage);
    for (let i = 0; i < arrImage.length; i++) {
        let imgEl = document.createElement("IMG");
        gallery.appendChild(imgEl);
        let img = gallery.getElementsByTagName("img")[i];
        img.setAttribute("src", shuffleArrImage[i]);
        img.addEventListener("click", function () {
            let popup_container = document.querySelector(".popup_container");
            let test = img.getAttribute("src");
            popup_container.style.display = "flex";
            let imgPopUp = document.createElement("IMG");
            imgPopUp.setAttribute("src", test);
            popup_container.appendChild(imgPopUp);

        });
    }
}

myFunction();

function closeButton() {
    let popup_container = document.querySelector(".popup_container");
    popup_container.removeChild(popup_container.lastElementChild);
    popup_container.style.display = "none";
}


