$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#cancelar-button').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const linkNovaImagem = $('#inputNovaImagem').val();
        const novaImagem = $('<li style="display:none"></li>')
        $(`<img src="${linkNovaImagem}"/>`).appendTo(novaImagem);
        $(`
            <div class="overlay-image-link">
                <a href="${linkNovaImagem}" target="_blank">Ver imagem em tamanho real</a>
            </div>`
        ).appendTo(novaImagem)
        $(novaImagem).appendTo('ul');
        $(novaImagem).fadeIn(500);
        $('#inputNovaImagem').val('')
    })
})