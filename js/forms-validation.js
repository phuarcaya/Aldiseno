// JavaScript Document


	function removeChecks(){
	
	var app_fname = document.getElementById("app_fname");

	var app_email_address = document.getElementById("app_email_address");
	var news_name = document.getElementById("news_name");
	var news_email_address = document.getElementById("news_email_address");

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
	}
	if(news_email_address.value != ""){
	news_email_address.style.borderColor = "#C9C9C9";
	}

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

		var subject = $('#subject').val();

		var dataEmail = {
			api_user:'poncianohc',
			api_key:'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',
			to:'poncianohc@gmail.com',
			toname:'Destination',
			subject:'Example_Subject',
			text:'testingtextbody',
			from:'info@domain.com'
		};

		var data2 = {
					  api_user:'poncianohc',
			api_key:'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',
			to:'poncianohc@gmail.com',
			toname:'Destination',
			subject:'Example_Subject',
			text:'testingtextbody',
			from:'info@domain.com'
					};

		$.ajax({
                url: 'https://api.sendgrid.com/v3/mail/send',
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                type: "POST",
                
                data: data2,
                success: function (data) {
                    console.log('OK');
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
	
		if(flag == 0)
		{	
			
			$.ajax({
							type: "POST",
							url: "submit.php",
							data: $("#appoint_form").serialize(),
							success: function(msg)
							{
								//alert(msg);
								if(msg == 'success'){
								
								$('#message-app').fadeIn(2000);
								document.getElementById("message-app").innerHTML = "Thank You! We'll contact you shortly";
								return true;
								}else{
								
								
								$('#message-app').fadeIn(2000);
								document.getElementById("message-app").innerHTML = "Thanks for contacting us.";
								return true;
								}
							}
						});
			
		}
	}

	
	
	
		