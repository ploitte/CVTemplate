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
                console.log("success");
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

        div += "</ul>";

        let word = new RegExp("<li>");
        let search = div.match(word);

        if(search != null){
            console.log(div);
            $("#errors").html(div);
        }else{
            sendMail($name, $email, $comment);
            $("#errors").html("Email has been sended").css("color", "green");
            $("textarea").val("");
        }
    });




});
