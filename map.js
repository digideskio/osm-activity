'use strict';

const TileDecadeChangelog = require('./changelog');

module.exports = function(tileLayers, tile, write, done) {
  const changelog = new TileDecadeChangelog(tile);
  tileLayers.osm.osm.features.forEach(ft => changelog.track(ft));
  done(null, changelog.toGeoJSON());
};