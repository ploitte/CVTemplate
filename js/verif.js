$(document).ready(function(){

    function sendMail($name, $email, $comment){

        $.ajax({
            url: "envoie.php",
            method: "post",
            dataType: "json",
            data:{
                name : $name,
                email : $email,
                comment : $comment
            },
            success: function(data){
            },
            error: function(error){
                console.log(error);
            }
        });
    }


    $(document).on("click", "#submit",  function(e){
        console.log("Salut");
        e.preventDefault();

        let $name = $("#name").val();
        let $email = $("#email").val();
        let $comment = $("#comments").val();

        let regex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";

        let div = "<ul>";

        if($name != ""){

            if($email != ""){

                if($email.match(regex)){

                    if($comment != ""){

                        sendMail($name, $email, $comment);
                    }else{
                        div += "<li>Missing comment</li>";
                    }
                }else{

                    div += "<li>Invalid email</li>";
                }
            }else{
                div += "<li>Missing email</li>";
            }
        }else{
            div += "<li>Missing name</li>";
        }

        div += "</ul>";
        

    });




});
