// Milestone 1: Database
const db = require('./db');

// 1. require each of your models here...
const Album = require('./models/Album');
const Artist = require('./models/Artist');
const Song = require('./models/Song');

// ========================================================

// 2. ...and give them some nice associations here!
// https://sequelize.org/docs/v6/core-concepts/assocs/

// One-To-Many
Album.hasMany(Song)
Song.belongsTo(Album)

// One-To-Many
Artist.hasMany(Song)
Song.belongsTo(Artist)

// One-To-Many
Artist.hasMany(Album)
Album.belongsTo(Artist)

// ========================================================

module.exports = {
  db,
  // 3. Include your models in your module.exports as well!
  // The seed file expects to find them there!
  Album,
  Artist,
  Song,
}



// You should be able to execute the seed file in bin/seed.js by running npm run seed
