$(document).ready(function() {



	$("#posteo").on('click',function(){
        var mitexto = $("#mitexto").val()



        var contenido = '<div class="board">' 
          + '<img class="responsive2"  src="assets/images/paul.jpg" id="foto-perfil">'
          + '<h3 class="usuario-nombre"> Pepito Pepone</h3>'
          +  mitexto  
          + '<i class="fas fa-heart"></i>' 
          + '<i class="output">0</i>'
          + '<i class="fas fa-trash-alt"></i>'
          + '</div>' 

        $("#notas").append(contenido)     
        $("#mitexto").val('')
      });


$(document).on('click','.fa-trash-alt',function(){
  $(this)
    .toggleClass('fa-trash-alt-out')
    .parent()
    .fadeOut(200);

})

$(document).on('click','.fa-heart',function(){
	$(this).addClass('fa-heart-red')
  .removeClass('.fa-heart')
  .siblings('.output').html(function(i, val) { return val*1+1 })
});


$('#mitexto').val('')



});








