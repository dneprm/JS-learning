$(document).ready(function(){
	$("#telephone").mask("+99(999) 999-9999");
    $("#myForm").validate({

       rules:{

            mytext:{
                required: true
            },

            telephone:{
                required: true
            },

            email:{
                required: true,
                email: true
            }
       },

       messages:{

             mytext:{
                required: "Заполните, пожалуйста, это поле"
            },

            telephone:{
                required: "Заполните, пожалуйста, это поле"
            },

            email:{
                required: "Заполните, пожалуйста, это поле",
                email: "Пожалуйста, введите корректный email (например, name@email.com)"
            }

       }

    });

});