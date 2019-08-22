const request = require('request')


const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/f34ff08baa5bc55e3fa809146b7f0676/'+latitude+','+longitude+'?'

  request({url,json: true}, (error, {body}) => {
    if(error){
      callback('Unable to connect to weather services!', undefined)
    }else if(body.error){
      callback('Unable to find weather for location. Try another search.', undefined)
    }else{
      const {temperature: current, precipProbability: rain} = body.currently
      callback(undefined, {
        forecast: body.daily.data[0].summary,
        current,
        rain
      })
    }
  })

}


module.exports = forecast
