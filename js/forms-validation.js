// JavaScript Document


	function removeChecks(){
	/*var app_fname = document.getElementById("app_fname");
	var app_email_address = document.getElementById("app_email_address");
	var news_name = document.getElementById("news_name");

	if(app_fname.value != ""){
	app_fname.style.borderColor = "#C9C9C9";
	
	}

	if(app_email_address.value != ""){
		app_email_address.style.borderColor = "#C9C9C9";
	}

	if(checkcontact(app_email_address.value) == true){
		app_email_address.style.borderColor = "#C9C9C9";
	}

	if(news_name.value != "" ){
		news_name.style.borderColor = "#C9C9C9";
	}*/
}

	function checkcontact(input)
	{
		var pattern1=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
		if(pattern1.test(input))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
					
					
	function validateContact(){

		var app_fname = $('#app_fname').val(),
		app_email_address = $('#app_email_address').val(),
		subject = $('#subject').val(),
		msg = $('#app_msg').val();

		$.ajax({
                url: 'http://sendmail.aldiseno.pe/Service/SendMail.svc/Send/'+ app_fname +'/'+ app_email_address +'/'+ subject +'/' + msg,
                //dataType: 'json',
                //contentType: 'application/json; charset=utf-8',
                type: "GET",
                //data: '',
                success: function (data) {
                    console.log(data.codigo);
                },
                error: function (err) {
                    console.log(err);
                }
            });

		return false;


		var app_fname = document.getElementById("app_fname");
		var app_email_address = document.getElementById("app_email_address");
	
		var flag = 0;
		
		if(app_fname.value == "" )
		{
			app_fname.style.borderColor = "#FE847B";
			flag = 1;
		}
	
		else if(app_email_address.value=="")
		{
			app_email_address.style.borderColor = "#FE847B";
			flag = 1;
		}
		else if(checkcontact(app_email_address.value)==false)
		{
			app_email_address.style.borderColor = "#FE847B";
			flag = 1;
		}	
	}

	
	
	
		