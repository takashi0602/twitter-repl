'use strict';
module.exports = (sequelize, DataTypes) => {
  var Editor = sequelize.define('Editor', {
    projectID: DataTypes.STRING,
    code: DataTypes.STRING,
    lineIndex: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Editor;
};