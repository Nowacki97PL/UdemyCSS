var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function(){
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

backdrop.addEventListener('click', closeModal);
modal

function closeModal() {
    backdrop.style.display = "none";
    modal.style.display = "none";
}