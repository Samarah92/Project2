"use strict";

const station = require('../controllers/station');
const stationStore = require('../models/station-store');

const analytics ={

  getUpdateWeather(station) {
  let lastReading=null;
 
  if (station.readings.length>0){
    lastReading = station.readings[station.readings.length-1];
    station.code = lastReading.code;
    station.temperature = lastReading.temperature;
    station.pressure = lastReading.pressure;
    
    
  }
  
}
}

module.exports = analytics;