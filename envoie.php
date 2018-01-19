<?php

    $name = $_POST["name"];
    $email = $_POST["email"];
    $comment = $_POST["comment"];

    $to = "lucrosinol@gmail.com";
    $subject = "CV_Contact";
    $message = "De: " . $name . "\r";
    $message .= "Email: " . $email . "\r\r";
    $message .= wordwrap($comment, 70);
	
	// Ma clé privée
	$secret = "6LdVZEEUAAAAANcwHSj6FNoqvP_Eqp1oaMkWuBwR";
	// Paramètre renvoyé par le recaptcha
	$response = $_POST["response"];
	// On récupère l'IP de l'utilisateur
	$remoteip = $_SERVER['REMOTE_ADDR'];


	$api_url = "https://www.google.com/recaptcha/api/siteverify?secret=" 
	    . $secret
	    . "&response=" . $response
	    . "&remoteip=" . $remoteip;


	$decode = json_decode(file_get_contents($api_url), true);


	if($decode["success"] == true)
		mail($to, $subject, $message);
	else
		return "ROBOT DETECTED";

	

	

    


