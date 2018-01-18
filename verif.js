$(document).ready(function(){

    $("#captcha").slideUp();



    function sendMail($name, $email, $comment){

        $.ajax({
            url: "envoie.php",
            type: "post",
            dataType: "json",
            data:{
                name : $name,
                email : $email,
                comment : $comment
            },
            success: function(data){
                console.log(data);
            },
            error: function(error){
                console.log(error);
            }
        });
    }



    $(document).on("click", "#submit",  function(e){


        e.preventDefault();


        let $name = $("#name").val();
        let $email = $("#email").val();
        let $comment = $("#comments").val();

        let response = grecaptcha.getResponse();

        let regex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";

        let div = "<ul>";

            if($name == "")
                div += "<li>Missing name</li>";
            
            if($email == "")
                div += "<li>Missing email</li>";

            else if(!$email.match(regex))
                div += "<li>Invalid email</li>";

            if($comment == "")
                div += "<li>Missing comment</li>";
            if(response.length == 0 ){
                div += "<li>Captcha not checked</li>";
            }

        div += "</ul>";

        let word = new RegExp("<li>");
        let search = div.match(word);

        if(search != null){
            console.log(div);
            $("#errors").html(div).css("color", "red");
            grecaptcha.reset();
        }else{
            sendMail($name, $email, $comment);
            $("#errors").html("Email has been sent").css("color", "green");
            $("textarea").val("");
            grecaptcha.reset();
        }
    });

    $("#comments").keyup(function(){

        if($("#comments").val() == "")
            $("#captcha").slideUp();
        else
            $("#captcha").slideDown("slow");

    });


});
