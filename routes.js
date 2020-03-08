const express = require("express");
const routes = express.Router();
const instructors = require("./instructors");

routes.get("/", function(request, response) {
  return response.redirect("/instructors");
});
routes.get("/instructors", instructors.index)
routes.get("/instructors/create", instructors.create);
routes.post("/instructors", instructors.post);
routes.get("/instructors/:id", instructors.show);
routes.get("/instructors/:id/edit", instructors.edit );
routes.put("/instructors", instructors.put);
routes.delete("/instructors", instructors.delete)


routes.get("/members", function(request, response) {
  return response.send("members");
});
module.exports = routes;
