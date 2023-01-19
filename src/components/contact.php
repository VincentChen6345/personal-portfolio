<?php
//get data from form
$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];

$to ='vincent.chen6345@hotmail.com';
$subject='You received a message from your portfolio website';

//The following text will be sent
//Name= user entered name
//Email= user entered email
// Message= user entered message

$text="Name =". $name . "\n Email = " . $email . "\n Message =" . $message;

$headers="From: https://personal-portfolio-age.netlify.app/ ";
//PHP mail() function
//mail(to,subject,message,headers,parameters);
echo ('hello from server');
if($email!=NULL){
    main($to,$subject,$text,$headers);
}
//Redirect to
header("Location:last.html")
?>