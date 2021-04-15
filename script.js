const Modal = {
    open(){
        document
            .querySelector(".modal-overlay")
            .classList
            .add("active")
    },
    close(){
        document
            .querySelector(".modal-overlay")
            .classList
            .remove("active")
    }
}

const Photos = ["IMG_2422","IMG_2446","IMG_3520-2","IMG_3553","IMG_3766","IMG_3774","IMG_4312","IMG_4336","IMG_4389","IMG_5364","IMG_5940","IMG_6201","IMG_6676","IMG_8617","IMG_8702","IMG_8853","IMG_8882","IMG_8932","IMG_8959","IMG_9279-2"]

const DOM = {
    addPhotos() {
        let place = document.getElementById("m-photos-content")

        let code = `
        <button class="m-photos-btn" id="m-photos-btn-left" onclick="NextPhoto.prev()"><img src="./assets/left-arrow.svg" alt=""></button>
                    <div id="m-photos-container">
                        <div class="img-card"><img src="./Photos/${Photos[counter]}.jpg" alt="Photo" onclick="Modal.open()"></div>
                        <div class="img-card"> <img src="./Photos/${Photos[counter + 1]}.jpg" alt="Photo" onclick="Modal.open()"></div>
                        <div class="img-card"> <img src="./Photos/${Photos[counter + 2]}.jpg" alt="Photo" onclick="Modal.open()"></div>
                        <div class="img-card"> <img src="./Photos/${Photos[counter + 3]}.jpg" alt="Photo" onclick="Modal.open()"></div>
                    </div>
                    <button class="m-photos-btn" id="m-photos-btn-right" onclick="NextPhoto.next()"><img src="./assets/right-arrow.svg" alt=""></button>
        `

        place.innerHTML = code
    }
}

var counter = 0;

const NextPhoto = {
    next(){
        if(counter >= Photos.length - 4){
            counter = 0
        }else {
            counter = counter + 4;
        }
        DOM.addPhotos()
},
    prev(){
        if(counter <= 0){
            counter = Photos.length -4
        }else {
            counter = counter - 4
        }
        DOM.addPhotos()
    }
}
DOM.addPhotos()
