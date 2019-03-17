function saludar(nombre) {
  alert('Hola ' + nombre);
}
function obtenerFunciones(cine){
    document.getElementById("funcionesTxt").innerHTML = "BuscandoFunciones2";
    objCine = JSON.parse(cine);       
    functionscinema = objCine.functions; 
    document.getElementById("funcionesTxt").innerHTML = "functionscinema";

 } 

function getCinemaByName(cinema, callback) {
    var mockdata = [];
    mockdata["Cine80"] = [{ "name": "Cine80", "functions": [{ "movie": { "name": "Titanic Movie", "genre": "Action" }, "seats": [[true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true]], "date": "2018-12-18 15:30" }, { "movie": { "name": "The Purge", "genre": "Horror" }, "seats": [[true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true]], "date": "2018-12-18 15:30" }] }];
    mockdata["Cine112"] = [{ "name": "Cine112", "functions": [{ "movie": { "name": "mision imposible", "genre": "Fiction" }, "seats": [[true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true]], "date": "2018-12-18 15:31" }] }];
    mockdata["Cinemania"] = [{ "name": "Cinemania", "functions": [{ "movie": { "name": "la favorita", "genre": "Drama" }, "seats": [[true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true]], "date": "2019-03-14 15:31" }] }];
    mockdata["CineColombia"] = [{ "name": "CineColombia", "functions": [{ "movie": { "name": "capitana marvel", "genre": "Aventure" }, "seats": [[true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true]], "date": "2019-03-14 01:30" }] }];
    
    document.getElementById("funcionesTxt").innerHTML = "APIMOCK";
    cine = mockdata[name];            
    callback(cine);
}

procesarEntradaUsuario(saludar);