const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >= minDistance)

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total_distance, journey) => total_distance + journey.distance, 0)

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map(journey => journey.transport)
};


module.exports = Traveller;
