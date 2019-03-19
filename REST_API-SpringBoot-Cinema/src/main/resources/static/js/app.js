var funciones;
var sillas;

function llenarTabla() {    
    for (i = 0; i < funciones.length; i++) {
        var numFun = i+1;
        var pelicula = funciones[i].movie.name;
        var sillas = sillasDisponibles(funciones[i].seats);
        var fecha = funciones[i].date;
        var fila = "<tr><td >" + numFun + "</td><td><input type='checkbox' name='record'></td><td>" + pelicula + "</td><td>" + sillas + "</td><td>" + fecha + "</td></tr>";
        $("#tb1").append(fila);        
    }
}

function mostrarSala() {     
    $("#tb1").find('input[name="record"]').each(function(){
        if($(this).is(":checked")){   
            var numFun = ("td:first-child").value();
            //var numFun =  $(this).parents("tr").values();
            var obj = JSON.parse(numFun);
            alert(numFun);
        }
    });
    sillas=[[true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, false, true, true, true, true, true, true, true, false], [true, true, false, true, true, true, false, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, false, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true]];
    
    var imgOcupada = "<img src=\"../imagenes/sillaGris.png\" style=\"width: 60px; height: 60px\">"; 
    var imgDisponible = "<img src=\"../imagenes/sillaAzul.png\" style=\"width: 60px; height: 60px\">";     
    var divMain = document.getElementById("sala");
    var tablaSala = document.getElementById("tablaSillas");
    var tblBody = document.createElement("tbody");
    
    tablaSala.appendChild(tblBody);
    
    for (i = 0; i < sillas.length; i++) {
        var fila = document.createElement('tr');
        var fila = "<tr>";
        for (j = 0; j < sillas[i].length; j++) {
            if(sillas[i][j] == true){
                fila += "<td>"+imgDisponible+"</td>";
            }else{
                fila += "<td>"+imgOcupada+"</td>";
            }
        }
        fila+="</tr>";
        $("#tbody").append(fila);
    }
    //divMain.appendChild(tablaSala);
}

function sillasDisponibles(sillas) {
    var cont = 0;
    for (var i = 1; i < sillas.length; i++) {
        for (var j = 1; j < sillas[i].length; j++) {
            if (sillas[i][j] == true) {
                cont++;
            }
        }
    }
    return cont;
}

app = (function () {
    var nameCinema;
    var functionscinema;

    return {
        setCinemaName: function () {
            nameCinema = document.getElementById("txt_cine").value;
        },

        obtenerFunciones: function (cine) {
            functionscinema = cine.functions;
            funciones = functionscinema;
            llenarTabla();
            document.getElementById("funcionesTxt").innerHTML = functionscinema[0].movie.name;
        },

        buscarFunciones: function () {
            app.setCinemaName();
            apimock.getCinemaByName(nameCinema, app.obtenerFunciones);
        }
    };
})();
