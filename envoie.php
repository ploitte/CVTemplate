<?php

require_once "recaptchalib.php";


if(isset($_POST["name"])
&& isset($_POST["email"])
&& isset($_POST["comment"])){


   
    // your secret key
    $secret = "6Lf8PkEUAAAAAPLdVJXCvBul494iLjYfiWhj1Ik9";
    
    // empty response
    $response = null;
    
    // check secret key
    $reCaptcha = new ReCaptcha($secret);


    $name = $_POST["name"];
    $email = $_POST["email"];
    $comment = $_POST["comment"];


    if ($_POST["g-recaptcha-response"]){

        $response = $reCaptcha->verifyResponse(
            $_SERVER["REMOTE_ADDR"],
            $_POST["g-recaptcha-response"]
        );

        if($response != null && $response->success){

            if(!empty($name)
            && !empty($email)
            && !empty($comment)){
                if(preg_match('#^[\w.-]+@[\w.-]+\.[a-z]{2,6}$#i', $email)){
                    

                    $to = "lucrosinol@gmail.com";
                    $subject = "Cv Contact";
                    $message = wordwrap($comment, 70);
                    $headers = 'De: ' . $name . " email: " . $email;


                    mail($to, $subject, $message, $headers);

                }
            }
        }
    }



}