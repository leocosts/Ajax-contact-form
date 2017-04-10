class FormularioController{

  constructor(){
    let $ = document.querySelector.bind(document); // function alias
    this._imputNome = $('#nome');
    this._imputEmail = $('#email');
    this._imputTelefone = $('#telefone');
    this._imputMensagem = $('#mensagem');
  }

  send(event){
    event.preventDefault(); // take out form defaut behaviour

    let nome = this._imputNome.value;
    let email = this._imputEmail.value;
    let telefone = this._imputTelefone.value;
    let mensagem = this._imputMensagem.value;
    let alertcopy = "";



    /* ainda nao implementei as regras corretamente ;) */
    if (!/\w/.test(nome)){
      alertcopy = "nome errado";
    }else if (!/^\w*(\.\w*)?@\w*\.[a-z]+(\.[a-z]+)?$/.test(email)){
      alertcopy = "email errado";
    }else if (!/^\d/.test(telefone)){
      alertcopy = "telefone errado";
    }else if (!/\w/.test(mensagem)){
      alertcopy = "mensagem errada";
    }else{
      alertcopy = "mensagem enviada com sucesso";
      // funcao ajax
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "php/mail.php", true);
      //Send the proper header information along with the request
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = () => {

        if(xhr.readyState == 4 && xhr.status == 200) {
          console.log("fim do request");
          this._clearForm();
        }
      }
      xhr.send(`nome=${nome}&telefone=${telefone}&email=${email}&mensagem=${mensagem}`);
    }

    let errormessage = new ErrorMessage();
    /*errormessage.showMessage(errormessages); */
    errormessage.showMessage(alertcopy);

  }

  _clearForm(){
    console.log("entrou no limpar")
    this._imputNome.value = " ";
    this._imputEmail.value = " ";
    this._imputTelefone.value = " ";
    this._imputMensagem.value = " ";
    this._imputNome.focus();
  }

}
