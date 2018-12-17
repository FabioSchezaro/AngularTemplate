export class Ui {

    lock(element) {
        document.getElementById(element).classList.add('is-loading');
        document.getElementById(element).setAttribute('disabled','disabled');



    }

    setActive(element) {

        document.getElementById(element).classList.add('active');

    }

    unActive(element) {

        document.getElementById(element).classList.remove('active');

    }

    unlock(element) {

        document.getElementById(element).classList.remove('is-loading');

        document.getElementById(element).removeAttribute('disabled');
    }

    setShowModal(element){

        document.getElementById(element).classList.add('show');
       // document.getElementById("body").classList.add('modal-open');
       
    }

    setHideModal(element){

        document.getElementById(element).classList.remove('show');
        
    }

}