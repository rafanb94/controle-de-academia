const fs = require("fs");
const data = require("./data.json");
const { age } = require ("./utils")

//show
exports.show = function(request, response) {
  const { id } = request.params;

  const foundInstructor = data.instructors.find(function(instructor) {
    return instructor.id == id;
  });
    if (!foundInstructor) return response.send("não encontrado");

  const instructor = {
    ...foundInstructor,
    age: age(foundInstructor.birth),
    services: foundInstructor.services.split(","),
    created_at: ""
  };
  return response.render("instructors/show", { instructor });
};

//post
exports.post = function(request, response) {
  const keys = Object.keys(request.body);
  //return response .send(keys)

  for (key of keys) {
    if (request.body[key] == "") {
      return response.send("Preencha todos os campos");
    }
  }
  let { avatar_url, birth, name, services, gender } = request.body;

  birth = Date.parse(birth);
  const created_at = Date.now();
  const id = Number(data.instructors.length + 1);

  data.instructors.push({
    id,
    avatar_url,
    name,
    birth,
    gender,
    services,
    created_at
  });
  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return response.send("Error ao gravar o arquivo");
    return response.redirect("/instructors");
  });
};

//create

//update

//delete
