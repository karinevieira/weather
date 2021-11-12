if ($('input').val() == ''){
    $('.result').hide()
}

$('svg').on('click', function(){
    let city = $('input').val()
    $('.result').show()

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
                $('.result').html(
                    `
                    <h3>${json.name}-${json.sys.country}</h3>
                    <div class="temp">
                        <p>Temperatura: ${json.main.temp} ºC</p>
                        <p>Sensação Térmica: ${json.main.feels_like} ºC</p>
                    </div>
                    <div class="weather">
                        <p>${json.weather[0].description}</p>
                        <img src="http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png">
                    </div>
                    `
                )
            }
        },
        error: function(){
            $('.result').html(`Não foi possível encontrar a cidade ${city}`)
        }
    })
})