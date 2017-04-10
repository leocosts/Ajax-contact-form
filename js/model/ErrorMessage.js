class ErrorMessage{

  showMessage(message){
    console.log(message);
    let $ = document.querySelector.bind(document); // function alias
    $('.error-message').innerHTML = message;

  }

}
