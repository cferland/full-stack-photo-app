const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "photoapp_db",
  dialect: "postgres",
  define: {
    underscored: true
  }
});

class Post extends Sequelize.Model {}

Post.init(
  {
    username: Sequelize.STRING,
    image_url: Sequelize.TEXT,
    caption: Sequelize.TEXT,
    location: Sequelize.STRING
  },
  {
    sequelize,
    modelName: "post"
  }
);

class User extends Sequelize.Model {}

User.init(
  {
    username: Sequelize.STRING,
    password_digest: Sequelize.STRING
  },
  {
    sequelize,
    modelName: "user"
  }
);

class Comment extends Sequelize.Model {}

Comment.init(
  {
    comment: Sequelize.STRING
  },
  {
    sequelize,
    modelName: "user"
  }
);

User.hasMany(Post, { onDelete: "cascade" });
Post.belongsTo(User);
Comment.belongsTo(Post);

module.exports = {
  Post,
  User,
  Comment,
  sequelize
};
