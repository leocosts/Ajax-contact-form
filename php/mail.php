<?php
if($_POST){
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $telefone = $_POST['telefone'];
  $mensagem = $_POST['mensagem'];
}


$msg = "Nome: ".$nome. " email " .$email. " telefone: " .$telefone. " mensagem: " .$mensagem;
$msg = wordwrap($msg,70);
mail("leocosts@gmail.com","Contato",$msg);

?>
