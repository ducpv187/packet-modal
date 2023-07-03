$(document).ready(function() {
    setTimeout(function(){
        openModal($('#btn-1'));
    },2000)    
});
$(document).on('click', '.js-modal-open', function(){    
    openModal($(this));
})

$(document).on('click', '.js-modal-close , .modal-overlay', function(){    
    closeModal($(this));
})

//open modal
function openModal($this){    
    let modal = $this.parents('.main').find('.modal');
    modal.addClass('modal-active');
    setTimeout(function(){
        modal.addClass('modal-fade');
    },500)
}

//close modal
function closeModal($this){
    let modal = $this.parents('.modal');
    modal.removeClass('modal-fade');
    setTimeout(() => {
        modal.removeClass('modal-active');
    }, 1000);    
}