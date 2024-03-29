$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            queroDeComprar: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor, insire o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposincorretos = validador.numberOfInvalids();
            if (camposincorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-roupas button').click(function() {
        const destino = $('#contato');
        const nomeroupa = $(this).parent().find('h3').text();

        $('#quero-comprar').val(nomeroupa);

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})
