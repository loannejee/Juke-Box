// Milestone 1: Database

// Sequelize is an open-source Node.js module (encapsulated code) that enables JavaScript 
// developers to work with relational databases more easily such as PostgreSQL.
const Sequelize = require('sequelize');
const db = require('../db');

// Models are tables
const Album = db.define('album', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    artworkUrl: {
        type: Sequelize.STRING,
        defaultValue: "default-album.jpg"
    }
});

module.exports = Album;