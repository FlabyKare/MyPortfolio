<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$text = $_POST['text'];

$token = "5458501936:AAFNwuGja_j5FJHR2WzsOutvSVQSlEZOo4w";
$chat_id = "-825651915";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Сообщение: ' => $text,
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };

  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {
    header('Location: pages/thanks.html');
  } else {
    echo "Error";
  }
?>