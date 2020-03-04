var elemSendButton = document.getElementById("send_button")
 console.log(elemSendButton);

const USER_MESSAGE_ELEMENT_ID = "user_message";
const ERROR_MESSAGE_ELEMENT_CLASS = "error-message";


 function showMessage(message, isError) {
        
        var elemPreviousMessage = document.getElementById("user_message")

        if (elemPreviousMessage) {
            elemPreviousMessage.parentNode.removeChild(elemPreviousMessage);
        }

       
        var elemMessage = document.createElement("p");
        elemMessage.innerText = message;
        elemMessage.id = "user_message";
        if(isError)
        {
            elemMessage.className = "error-message";
        }
        
    }
elemSendButton.onclick = function () {
    console.log("Send button clicked")

    var elemEmail = document.getElementById("youremail");
    var elemName = document.getElementById("yourname");
    var elemMess = document.getElementById("yourmessage");

    var youremail = elemEmail.value;
    var yourname = elemName.value;
    var yourmessage = elemMess.value;

    if (youremail === "" && yourname === "" && yourmessage === ""){
        showMessage("Campos de textos vacios", true);
        
    }

}


