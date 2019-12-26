<?php
$to = 'tonykrapatony@gmail.com';
$fio = $_POST['fio'];
$email = $_POST['email'];
$message = $_POST['message'];
$headers = "From: <tonykrapatony@gmail.com>\r\n";
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message)
$fio = urldecode($fio);
$email = urldecode($email);
$message = urldecode($message);
$fio = trim($fio);
$email = trim($email);
$message = trim($message);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail($to, "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email.". Повідомлення: ".$message , $headers))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";

}?>