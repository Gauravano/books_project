const Sequelize = require('sequelize');

const db = new Sequelize('bookish', 'gaurav_bookish', 'Bookish 1', {
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        min: 0,
        max: 5
    }
});

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    contact: {
        type: Sequelize.STRING,
        validate: {
            isNumeric: true,
            len: [10,12]
        }
    },
    address: {
        type: Sequelize.STRING
    },
    college: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Listing = db.define('listings', {
   id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       primaryKey: true
   },
   book_name: {
       type: Sequelize.STRING,
       allowNull: false,
       unique: true
   },
   author_name: {
       type: Sequelize.STRING,
       allowNull: false
   },
    price: {
       type: Sequelize.INTEGER,
       allowNull: false
    },
    condition: {
       type: Sequelize.ENUM,
       values: ['New', 'Almost New', 'Slight damage', 'Worn']
    }
});

User.hasMany(Listing);
// User.hasMany(Listing, {foreignKey: 'id', sourceKey: 'user_id'});

db.sync().then(() => console.log("Database has been synced! "))
         .catch((err) => console.log("Error creating database! "));

exports = module.exports = {
    User, Listing
};