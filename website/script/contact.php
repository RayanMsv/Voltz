<?php

if (isset($_POST["submit"])){
    $nom = $_POST["name"];
    $fname = $_POST["fname"];
    $email = $_POST["email"];
    $object = $_POST["object"];
    $message = $_POST["message"];
    $to = "dev.care.sare@gmail.com";
    $headers = "From:" . $nom . " " . $prenom ." " . $email;
    if (mail($to,$objet,$message,$headers))
    {
        echo "Merci, " . $fname . " ! Ton message a bien été envoyé.";
    } 
    else   
    { 
        echo "Une erreur s'est produite";
    }
}

?>
