"use strict";
module.exports = (sequelize, DataTypes) => {
  const SchoolEmployee = sequelize.define(
    "Employee",
    {
      fname: DataTypes.STRING,
      lname: DataTypes.STRING
    },
    {
      schema: "school",
      tableName: "employee"
    }
  );
  return SchoolEmployee;
};
