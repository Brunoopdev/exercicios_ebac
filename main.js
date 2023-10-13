$(document).ready(function(){
    
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').submit(function(e){
        e.preventDefault();
        const inputDaTarefa = $('#input-tarefa').val();
        const novoItem = $('<li></li>');

        $(`<p>${inputDaTarefa}</p>`).appendTo(novoItem);
        
        $(novoItem).appendTo('ul');

        $('ul').on('click','li',function(){
            $(this).css('text-decoration','line-through');
            
        })

        $('#input-tarefa').val('');
    })

})