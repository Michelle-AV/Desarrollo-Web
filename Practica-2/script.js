$(document).ready(function(){

    var nom = $("#nombre");
    var apPat = $("#apPat");
    var apMat = $("#apMat");
    var fechaNac = $("#fechaNac");

    $("#btnRfc").click(function() {
        var val1 = (apPat.val().substring(0,2)).toUpperCase();
        var val2 = (apMat.val().substring(0,1)).toUpperCase();
        var val3 = (nom.val().substring(0,1)).toUpperCase();
       
        if(nom.val() != "" && apPat.val() !="" && apMat.val() !="" && fechaNac.val() !=""){
            $("#rfcGenerado").val(val1+val2+val3+fechaNac.val().substring(2,4)+fechaNac.val().substring(5,7)+fechaNac.val().substring(8,10)+"AB0");
        }else {
            alert("Llena todos los campos.");
        }
    });

    $("#consultaApi").click(function() {

        if($("#idUser").val()!=""){
            $.ajax({
                url: "https://jsonplaceholder.typicode.com/users/" + $("#idUser").val(),
                method: "GET",
                dataType: "json",
                success: function(data) {
                    $("#nombreApi").val(data.name);
                    $("#emailApi").val(data.email);
                },
                error: function() {
                    alert("No existe este ID"+$("#idUser").val());
                }
            });
        } else{
            alert('Ingrese un ID para buscar.');
        }
    });
    
    $("#limpiar").click(function(){

        var id = $("#idUser");
        var nom = $("#nombreApi");
        var email = $("#emailApi");

        nom.val("");
        email.val("");
        id.val("");
    });

})