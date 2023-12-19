const models = require('../models')
const tool = require('./tool')
const opencage = require('opencage-api-client');
const dotenv = require('dotenv');
dotenv.config();
function index(req, res){
  models.Stadium.findAll().then(async result => {
      console.log(result)
      if (result) {
          res.json({
              message: "user already exists!",
              user: result,
          });
      } else {
          res.json({
              message: "New user!",
          });
      }
  })
}
function FindInCity(req, res) {
  var lat1 = req.body.latitude
  var lon1 = req.body.longitude
  var lat2 = 0
  var lon2 = 0
  var dist = 0
  var stadiumList = []

  models.Stadium.findAll().then(result => {
    console.log("lklk")
      if (result) {
          for (var i = 0; i < result.length; i++) {
              lat2 = result[i].latitude
              lon2 = result[i].longitude
              dist = distance(lat1, lon1, lat2, lon2)
              if (dist <= 100 && dist >= - 100) {
                stadiumList.push(result[i])
              }
          }
          if (stadiumList != 0) {
              res.status(200).json({
                  message: "there is stadiums",
                  stadiumList
              })
          } else {
              res.status(200).json({
                  message: "There are no stadiums nearby",
                  stadiumList
              })
          }
      }

  }).catch(error => {
      res.status(500).json({
          message: "something went wrong ",
          error: error
      })
  })

}
//////////////////////////////////////////////////////////////////////
function distance(lat1, lon1, lat2, lon2) {
  var radlat1 = Math.PI * lat1 / 180
  var radlat2 = Math.PI * lat2 / 180
  var theta = lon1 - lon2
  var radtheta = Math.PI * theta / 180
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  if (dist > 1) {
      dist = 1;
  }
  dist = Math.acos(dist)
  dist = dist * 180 / Math.PI
  dist = dist * 60 * 1.1515
  dist = dist * 1.609344 //to kilometer
  return dist
}

function GetAddress(req, res) {
  var lat = req.body.latitude
  var lon = req.body.longitude
  var s = lat + ',' + lon
opencage
  .geocode({ q: s, language: 'en',key:"2d95defadab9445b8c999cb76145ca5a"})
  .then((data) => {
    if (data.status.code === 200 && data.results.length > 0) {
      const place = data.results[0];
      console.log(place.formatted);
      console.log(place.components.road);
      console.log(place.annotations.timezone.name);
      const s =place.formatted
      res.status(200).json({
          Address: s,
          status: true
      })
    } else {
      console.log('status', data.status.message);
      console.log('total_results', data.total_results);
    }
  })
  .catch((error) => {
    console.log('error', error.message);
    if (error.status.code === 402) {
      console.log('hit free trial daily limit');
      console.log('become a customer: https://opencagedata.com/pricing');
    }
  });
}



module.exports = {
    GetAddress,
    FindInCity,
    index
}