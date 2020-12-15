const Sequelize = require('sequelize');

const User = require('../../models/User');


const databaseConfig = require('../../config/database');

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init(){

    this.connection = new Sequelize({
        "username": "postgres",
    "password": "botafogo05",
    "database": "draence",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "define":{
      "timestamps":true,
      "underscored":true,
      "underscoredAll":true
    }});

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))

  }
}

module.exports = new Database();