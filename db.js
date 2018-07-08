const Sequelize = require('sequelize');

const db = new Sequelize('heroku_7697999bfbc1608', 'b5f842e84e26ba','b5ad92e4'), {
    host: 'us-cdbr-iron-east-04.cleardb.net',
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
    },
    book_image_url: {
       type: Sequelize.STRING
    },
    user_name: {
      type: Sequelize.STRING
    }
});

const Wishlist = db.define('wishlist', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
});

const Message = db.define('messages', {
   id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       primaryKey: true
   },
   content: {
       type: Sequelize.TEXT,
       allowNull: false
   },
   senderId: {
       type: Sequelize.INTEGER,
       allowNull: false
   }
});

User.hasMany(Listing);
User.hasMany(Wishlist);
Listing.hasMany(Wishlist);
Message.belongsTo(Listing);

db.sync().then(() => console.log("Database has been synced! "))
         .catch((err) => console.log("Error creating database! "));

exports = module.exports = {
    User, Listing, Wishlist, Message
};
