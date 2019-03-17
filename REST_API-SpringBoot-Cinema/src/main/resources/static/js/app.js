//@author dsaavedra
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
var nombreCine;


app = (function () {    
    var nameCinema;
    var functionscinema;

    return {
    setCinemaName: function(){
        nameCinema = document.getElementById("txt_cine").value;        
    },        
    
    obtenerFunciones: function(cine){
        functionscinema = cine.functions;
        //document.getElementById("funcionesTxt").innerHTML = functionscinema[0].movie.name;
        document.getElementById("funcionesTxt").innerHTML = functionscinema[0].getPrototypeOf().toString();
    },
    
    buscarFunciones: function () {
        app.setCinemaName();
        apimock.getCinemaByName(nameCinema, app.obtenerFunciones);
    }       
    };
})();
