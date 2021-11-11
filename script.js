$('svg').on('click', function(){
    let city = $('input').val()

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=5033f01276a4961c65b0685a4186556e&units=metric&lang=pt_br`

    $.ajax({
        url: url,
        dataType: 'json',
        method: 'GET',
        beforeSend: function(){
            $('.result').html('Procurando...')
        },
        success: function(json){
            if(json.cod == 200){
                $('.result').html(`Temperatura: ${json.main.temp} ºC`)
            }
        },
        error: function(){
            $('.result').html(`Não foi possível encontrar a cidade ${city}`)
        }
    })
})