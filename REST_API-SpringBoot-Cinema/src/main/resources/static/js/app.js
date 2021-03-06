
var funciones;
var funcionSeleccionada;
var sillas;

function llenarTabla() {
    $("#tb1").empty();
    $("#thead").empty();
    var fila = "<tr><td>Seleccionar</td><td>Número</td><td name='pelicula'>Película</td><td>Sillas</td><td>Fecha</td></tr>";    
    $("#thead").append(fila);   
    $("#tbody").empty();
    for (i = 0; i < funciones.length; i++) {
        var numFun = i + 1;
        var pelicula = funciones[i].movie.name;
        var sillas = sillasDisponibles(funciones[i].seats);
        var fecha = funciones[i].date;
        var fila = "<tr><td><input type='radio' name='record'></td><td>" + numFun + "</td><td name='pelicula'>" + pelicula + "</td><td>" + sillas + "</td><td>" + fecha + "</td></tr>";
        $("#tb1").append(fila);
    }
}

function mostrarSala() {
    $("#tbody").empty();
    $("#tb1 tr").each(function () {
        if($(this).find('input[name="record"]').is(":checked")){    
            funcionSeleccionada = ($(this).find('td:nth-child(2)')).text();
            //alert(funcionSeleccionada);
            //alert(funciones[funcionSeleccionada-1].movie.name);
        } 
    });
    sillas = funciones[funcionSeleccionada-1].seats;
    var imgOcupada = "<img src=\"/imagenes/sillaGris.png\" style=\"width: 45px; height: 45px\"";
    var imgDisponible = "<img src=\"/imagenes/sillaAzul.png\" style=\"width: 45px; height: 45px\"";
    var divMain = document.getElementById("sala");
    var tablaSala = document.getElementById("tablaSillas");
    var tblBody = document.createElement("tbody");

    tablaSala.appendChild(tblBody);

    for (i = 0; i < sillas.length; i++) {
        var fila = document.createElement('tr');
        var fila = "<tr>";
        for (j = 0; j < sillas[i].length; j++) {
            if (sillas[i][j] == true) {
                fila += "<td>" + imgDisponible +"title=\"Fila: "+(i+1)+", Columna: "+(j+1)+"\">"+ "</td>";
            } else {
                fila += "<td>" + imgOcupada +"title=\"Fila: "+(i+1)+", Columna: "+(j+1)+"\">"+ "</td>";
            }
        }
        fila += "</tr>";
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
            //document.getElementById("funcionesTxt").innerHTML = functionscinema[0].movie.name;
        },

        buscarFunciones: function () {           
            app.setCinemaName();
            //document.getElementById("funcionesTxt").innerHTML = "function app";
            //apiclient.getCinemaByName(nameCinema, app.obtenerFunciones);
            apimock.getCinemaByName(nameCinema, app.obtenerFunciones);
        }
    };
})();
