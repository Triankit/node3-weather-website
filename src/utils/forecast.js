const request = require('request')
const forecast = (longitude,latitude, callback)=>{
    url='http://api.weatherstack.com/current?access_key=9a56057bc0496d3b726995397891d8a6&query='+ encodeURIComponent(longitude)+','+encodeURIComponent(latitude)
        
request({url:url,json:true},(error,{body})=>{
if (error) {
            callback('Unable to connect to weather service!',undefined)
        } else if (body.error) {
            callback('Unable to find location Services!',undefined)
        } else {
            callback(undefined, 'In '+body.location.name +' weather is ' +
             body.current.weather_descriptions[0] + ' and temperature is ' +
              body.current.temperature )
        }

})
}

module.exports = forecast