let { SchoolEmployee, Employee } = require("../models");
const generateName = require("../helper/generateName");
RootController = {
  index: async (req, res) => {
    const subdomain = req.headers.host.split(".")[0];
    // console.log(SchoolEmployee.schema());
    if (subdomain == "school") {
      Employee = SchoolEmployee;
    }
    const items = await Employee.findAll();
    res.render("index", { items });
  },
  addRecord: async (req, res) => {
    const subdomain = req.headers.host.split(".")[0];
    console.log(subdomain);
    if (subdomain == "school") {
      Employee = SchoolEmployee;
    }
    const [fname, lname] = generateName();
    console.log(fname, lname);
    await Employee.create({
      fname,
      lname
    });
    const items = await Employee.findAll();
    res.render("index", { items });
  }
};

module.exports = RootController;
