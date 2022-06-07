// Milestone 1: Database

// Sequelize is an open-source Node.js module (encapsulated code) that enables JavaScript 
// developers to work with relational databases more easily such as PostgreSQL.
const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/juke', {
  logging: false
})

module.exports = db
