const http = require("http");
const app = require("./server");
const db = require("./server/models/index");

app.set("port", 3000);
db.sequelize.sync().then(function() {
  app.listen(app.get("port"), () => {
    console.log("Server started at PORT 3000");
  });
});
