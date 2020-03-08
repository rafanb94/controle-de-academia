const fs = require ('fs')
const data = require('./data.json')

//post
exports.post = function (request, response){
    
        const keys = Object.keys(request.body)
        //return response .send(keys)
    
        for (key of keys) {
            if (request.body[key] == ""){
                return response.send("Preencha todos os campos")
            }
        }
        data.intructors.push(request.body)
        fs.writeFile("data.json", JSON.stringify(data), function(err){
            if(err) return response.send("Error ao gravar o arquivo")
            return response.redirect("/instructors")
        } )
    }


//create

//update

//delete