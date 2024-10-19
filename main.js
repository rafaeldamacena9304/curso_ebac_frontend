$(document).ready(function(){
    
    $('form').on('submit', function(e){
        e.preventDefault();
        const inputNovaTarefa = $('#inputNovaTarefa').val();
        const novaTarefa = $(`<li class="tarefa" style="display:none;">${inputNovaTarefa}</li>`);
        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(500);
        $(inputNovaTarefa).val('');
    })


    $('#listaTarefas').on('click', 'li', function(){
        $(this).addClass('concluida');
    })
})