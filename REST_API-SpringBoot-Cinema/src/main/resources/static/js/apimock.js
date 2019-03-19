//@author dsaavedra

apimock = (function () {

    var mockdata = [];
    var cine;
    var text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
    
    mockdata["Cine80"] = '{ "name": "Cine80", "functions": [{ "movie": { "name": "Titanic Movie", "genre": "Action" }, "seats": [[true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true]], "date": "2018-12-18 15:30" }, { "movie": { "name": "The Purge", "genre": "Horror" }, "seats": [[true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true]], "date": "2018-12-18 15:30" }] }';
    mockdata["Cine112"] = '{ "name": "Cine112", "functions": [{ "movie": { "name": "mision imposible", "genre": "Fiction" }, "seats": [[true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true]], "date": "2018-12-18 15:31" }] }';
    mockdata["Cinemania"] = '{ "name": "Cinemania", "functions": [{ "movie": { "name": "la favorita", "genre": "Drama" }, "seats": [[true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true]], "date": "2019-03-14 15:31" }] }';
    mockdata["CineColombia"] = '{ "name": "CineColombia", "functions": [{ "movie": { "name": "capitana marvel", "genre": "Aventure" }, "seats": [[true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, false, true, true, true, true, true, true, true, false], [true, true, false, true, true, true, false, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, false, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true]], "date": "2019-03-14 01:30" }] }';
    
    return {      
        getCinemaByName: function (name, callback) {
            //document.getElementById("funcionesTxt").innerHTML = "HOLAAA";
            cine = mockdata[name];
            var objCine = JSON.parse(cine);       
            //document.getElementById("funcionesTxt").innerHTML = "APIMOCK";                       
            callback(objCine);
        }
    };

})();
