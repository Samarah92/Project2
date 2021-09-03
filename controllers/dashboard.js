"use strict";

const uuid = require('uuid');

const logger = require("../utils/logger");
const stationStore = require('../models/station-store');
const analytics = require('../utils/analytics');
const station = require('../controllers/station')

const dashboard = {
  index(request, response) {
const dashboard = analytics.getUpdateWeather(station);
    for (station=this.stations) {
      analytics.updateWeather(station);
    }
const viewData = {
      title: 'Station',
      station: stationStore.getAllStations(),
  
    };
    logger.info('about to render', stationStore.getAllStations());
    response.render('dashboard', viewData);
},
  
   deleteStation(request, response) {
    const stationId = request.params.id;
    logger.debug(`Deleting Station ${stationId}`);
    stationStore.removeStation(stationId);
    response.redirect('/dashboard');
  },
  
    addStation(request, response) {
    const newStation = {
      id: uuid.v1(),
      title: request.body.title,
      readings: [],
    };
    stationStore.addStation(newStation);
    response.redirect('/dashboard');
  },
};

module.exports = dashboard;