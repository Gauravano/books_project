const Sequelize = require('sequelize');

const db = new Sequelize('bookish', 'gaurav_bookish', 'Bookish 1', {
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        min: 0,
        max: 5
    }
});
