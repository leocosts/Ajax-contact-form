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

    /* ainda nao implementei as regras corretamente ;) */
    if (!/\w/.test(nome)){
      throw new Error('formato de nome errado');
    }else if (!/^\w*(\.\w*)?@\w*\.[a-z]+(\.[a-z]+)?$/.test(email)){
      throw new Error('formato de email errado');
    }else if (!/^\d/.test(telefone)){
      throw new Error('formato de telefone errado');
    }else if (!/\w/.test(mensagem)){
      throw new Error('formato de mensagem errado');
    }else{
      // funcao ajax
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "php/mail.php", true);
      //Send the proper header information along with the request
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {//Call a function when the state changes.
        if(xhr.readyState == 4 && xhr.status == 200) {
          console.log("fim do request");
          //incluir aqui linpar campos
          //this._clearForm();
        }
      }
      xhr.send(`nome=${nome}&telefone=${telefone}&email=${email}&mensagem=${mensagem}`);
    }
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
