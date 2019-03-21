apiclient = (function () {
       
    
    return {      
        getCinemaByName: function (name, callback) {
        	//alert( "Load was performed." );
        	
        	$.get( 'cinemas/'+name, function( data ) {
        		//alert( "Load was performed sfsgsgd." );
        		console.log(data);
        		
        		callback(data);
        		  
        		});
        }
    };

})();