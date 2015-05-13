$(document).ready(function(){
	var s_table=$('#table').DataTable();
    

    $('#table tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
            $('#button').addClass('disabled');

        }
        else {
            s_table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
            $('#button').removeClass('disabled'); 
           
    	}
    });

    $('#button').click( function () {
  	var idtosel=parseInt(s_table.$('tr.selected').children('td:eq(0)').text());
  	//some action
	allert(id)	
  	});    
});
