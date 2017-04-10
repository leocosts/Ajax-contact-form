<?php
if($_POST){
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $telefone = $_POST['telefone'];
  $mensagem = $_POST['mensagem'];
}

$headers = 'From: email@email.com' . "\r\n" .
    'Reply-To: email@email.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$msg = "Nome: ".$nome. " Email: " .$email. " Telefone: " .$telefone. " Mensagem: " .$mensagem;
$msg = wordwrap($msg,70);
mail("leocosts@gmail.com","Contato",$msg,$headers);

?>
