const request = require('request')

const forecast = (longitude, latitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=f5ee12905213bdfb0b5d561c44dbe83b&query='+latitude+','+longitude + '&units=m'

    request({url, json: true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. "+
            "It feels like " + body.current.feelslike + " degrees out. " + "It is " + body.current.humidity + "% of humidity.")
        }
    })
}

module.exports = forecast