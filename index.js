var elemSendButton = document.getElementById("send_button")
console.log(elemSendButton);

const USER_MESSAGE_ELEMENT_ID = "user_message";
const ERROR_MESSAGE_ELEMENT_CLASS = "error-message";


function showMessage(message, isError) {
       //Borrar mensaje anterior en caso de existir
       var elemPreviousMessage = document.getElementById("user_message")

       if (elemPreviousMessage) {
           elemPreviousMessage.parentNode.removeChild(elemPreviousMessage);
       }

       //Crear mensaje de bienvenida / element p
       var elemMessage = document.createElement("p");
       elemMessage.innerText = message;
       elemMessage.id = "user_message";
       if(isError)
       {
           elemMessage.className = "error-message";
       }
       

       //Mostrar mensaje de bienvenida
       var elemMainDiv = document.getElementById("main_div");
       elemMainDiv.appendChild(elemMessage);
   }
elemSendButton.onclick = function () {
   console.log("Send button clicked")

   var elemEmail = document.getElementById("youremail");
   var elemName = document.getElementById("yourname");
   var elemMess = document.getElementById("yourmessage");

   console.log(elemEmail);
   console.log(elemName);
   console.log(elemMess);

   var email = elemEmail.value;
   var name = elemName.value;
   var mess = elemMess.value;
   console.log(email);
   console.log(name);
   console.log(mess);

   if (email === "admin" && name === "admin" && mess ==="admin") {

    //Crear mensaje de bienvenida / element p
    //var elemWelcomeMessage = document.createElement("p");
    //elemWelcomeMessage.innerText = "Bienvenido " + username;

    //Mostrar mensaje de bienvenida
    //var elemMainDiv = document.getElementById("main_div");
    //elemMainDiv.appendChild(elemWelcomeMessage);

    showMessage("Bienvenido " + name);

} else {
    showMessage("Credenciales incorrectas", true);
}

if (email === "" && name === "" && mess === ""){
    showMessage("Campos de textos vacios", true);
    
}

}
