// Declaring dependencies
const User = require('./User');
const Post = require('./Post');

// Setting up relationships
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// Exports
module.exports = { User, Post };
