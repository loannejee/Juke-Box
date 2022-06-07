// Milestone 1: Database

// Sequelize is an open-source Node.js module (encapsulated code) that enables JavaScript 
// developers to work with relational databases more easily such as PostgreSQL.
const Sequelize = require('sequelize');
const db = require('../db');

// Models are tables
const Song = db.define('song', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    audioUrl: {
        type: Sequelize.STRING,
    },
    genre: {
        type: Sequelize.STRING,
    }
});

module.exports = Song;