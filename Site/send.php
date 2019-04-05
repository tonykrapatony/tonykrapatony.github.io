<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$message = htmlspecialchars($message);

$name = urldecode($name);
$email = urldecode($email);
$phone = urldecode($phone);
$message = urldecode($message);

$name = trim($name);
$email = trim($email);
$phone = trim($phone);
$message = trim($message);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("tonykrapatony@gmail.com", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email.". Телефон: ".$phone.". Сообщение: ".$message , "From: info@https://ihorvynohradnyi.000webhostapp.com \r\n")) 
{
    echo "good"; 
} else { 
    echo "error";
}
?>