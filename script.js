var counter1 = 0;
var counter2 = 1;
var counter3 = 2;
var counter4 = 3;

var ModalIndex

const Modal = {
    open(n){
        
        document.querySelector(".modal-overlay").classList.add("active")

        document.body.style.position = 'fixed';

        document.body.style.top = `-${window.scrollY}px`;

        if (n == 0) return DOM.ModalPhoto(counter1)

        if (n == 1) return DOM.ModalPhoto(counter2)

        if (n == 2) return DOM.ModalPhoto(counter3)

        if (n == 3) return DOM.ModalPhoto(counter4)
    },
    close(){
        document.querySelector(".modal-overlay").classList.remove("active")

        document.body.style.position = '';
        document.body.style.top = '';

        let heigth = window.innerHeight

        window.scrollTo(0, heigth)
    }
}

const Photos = ["IMG_2422","IMG_2446","IMG_3520-2","IMG_3553","IMG_3766","IMG_3774","IMG_4312","IMG_4336","IMG_4389","IMG_5364","IMG_5940","IMG_6201","IMG_6676","IMG_8617","IMG_8702","IMG_8853","IMG_8882","IMG_8932","IMG_8959","IMG_9279-2"]

const DOM = {
    addPhotos() {
        let place = document.getElementById("m-photos-content")

        let code = `
        <button class="m-photos-btn" id="m-photos-btn-left" onclick="NextPhoto.prev()"><img src="./assets/left-arrow.svg" alt=""></button>
                    <div id="m-photos-container">
                        <div class="img-card"><img src="./Photos/${Photos[counter1]}.jpg" alt="Photo" onclick="Modal.open(0)"></div>
                        <div class="img-card"> <img src="./Photos/${Photos[counter2]}.jpg" alt="Photo" onclick="Modal.open(1)"></div>
                        <div class="img-card"> <img src="./Photos/${Photos[counter3]}.jpg" alt="Photo" onclick="Modal.open(2)"></div>
                        <div class="img-card"> <img src="./Photos/${Photos[counter4]}.jpg" alt="Photo" onclick="Modal.open(3)"></div>
                    </div>
                    <button class="m-photos-btn" id="m-photos-btn-right" onclick="NextPhoto.next()"><img src="./assets/right-arrow.svg" alt=""></button>
        `

        place.innerHTML = code
    },
    
    ModalPhoto(index){
        let container = document.getElementById("modal-img")

        let code = `<img src="./Photos/${Photos[index]}.JPG" alt="">`

        container.innerHTML = code

        return ModalIndex = index
    }
}

const NextPhoto = {
    next(){
        counter1 += 1;
        counter2 += 1;
        counter3 += 1;
        counter4 += 1;

        if(counter1 >= Photos.length){counter1 = 0}

        if(counter2 >= Photos.length){counter2 = 0}

        if(counter3 >= Photos.length){counter3 = 0}

        if(counter4 >= Photos.length){counter4 = 0}

        DOM.addPhotos()
},
    prev(){
        counter1 -= 1;
        counter2 -= 1;
        counter3 -= 1;
        counter4 -= 1;

        if(counter1 < 0){counter1 = Photos.length -1}

        if(counter2 < 0){counter2 = Photos.length -1}

        if(counter3 < 0){counter3 = Photos.length -1}

        if(counter4 < 0){counter4 = Photos.length -1}

        DOM.addPhotos()
    },

    ModalNext(){
        this.next()

        let nextPhoto = ModalIndex + 1

        if (nextPhoto >= Photos.length){ nextPhoto = 0}

        return DOM.ModalPhoto(nextPhoto)
    },

    ModalPrev(){
        this.prev()

        let prevPhoto = ModalIndex - 1

        if (prevPhoto < 0){prevPhoto = Photos.length -1}

        return DOM.ModalPhoto(prevPhoto)
    }
}

const Header = {
    Change(){
        let heigth = window.scrollY

        let doc = document.getElementById("header")

        if(heigth >= 100) {
            doc.style.backgroundColor = "#4b4b4b"
        } else {
            doc.style.backgroundColor = "transparent"
        }
    }


}

DOM.addPhotos()
