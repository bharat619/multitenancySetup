"use strict";
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      fname: DataTypes.STRING,
      lname: DataTypes.STRING
    },
    {
      tableName: "employee"
    }
  );
  return Employee;
};
