// Milestone 1: Database

// Sequelize is an open-source Node.js module (encapsulated code) that enables JavaScript 
// developers to work with relational databases more easily such as PostgreSQL.
const Sequelize = require('sequelize')

const config = {
  logging: false,
};

if (process.env.LOGGING === 'true') {
  delete config.logging;
}

if (process.env.DATABASE_URL) {
  config.dialect
}

//https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/juke', config)

// const db = new Sequelize(process.env.PORT || 5432, {
//   logging: false
// })

module.exports = db
