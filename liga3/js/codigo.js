$(function(){
    var config = {
        func : function(resp){
            
            if(resp != 1){
                $.liga('mensaje', 'FALLO');
            }else{
                $('#divTabla').load('contenido.php');
                $('#algocual').load('seleccionar.php');
                
            }
        }
    };
    $('form').liga('AJAX', config);
});