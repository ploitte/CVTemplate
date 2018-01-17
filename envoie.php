<?php

if(isset($_POST["name"])
&& isset($_POST["email"])
&& isset($_POST["comment"])){

   
    $name = $_POST["name"];
    $email = $_POST["email"];
    $comment = $_POST["comment"];

    if(!empty($name)
    && !empty($email)
    && !empty($comment)){
            if(preg_match('#^[\w.-]+@[\w.-]+\.[a-z]{2,6}$#i', $email)){
                

                $to = "lucrosinol@gmail.com";
                $subject = "Cv Contact";
                $message = $comment;
                $headers = 'De: ' . $name . " email: " . $email;


                mail($to, $subject, $message, $headers);
            }
    }

}