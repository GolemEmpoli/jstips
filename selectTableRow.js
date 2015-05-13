$(document).ready(function(){
	var s_table=$('#soci_table').DataTable();
    

    $('#soci_table tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
            $('#removeSocio').addClass('disabled');
            $('#deleteSocio').addClass('disabled');
            $('#editSocio').addClass('disabled');
            
        }
        else {
            s_table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
            $('#removeSocio').removeClass('disabled'); 
            $('#deleteSocio').removeClass('disabled');
            $('#editSocio').removeClass('disabled');
           
    	}
    });

    $('#removeSocio').click( function () {
  		var idtosel=parseInt(s_table.$('tr.selected').children('td:eq(0)').text());
		
  	});    
});
