let failedAttempts = 0;

const getMessages = () => {
    const passcode = document.querySelector("#passcode");
    
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val()
        let found = false;
        
        for (let key in data) {
            if (data[key].passcode === passcode.value){
                const message = document.querySelector("#message")
                message.style.color = "#000000"
                message.innerHTML = data[key].message;
                found = true
            }
        }

        if (found === false){
            const message = document.querySelector("#message")
            message.style.color = "#ff0000"
            message.innerHTML = "Message not found"  
            failedAttempts ++;
            console.log(failedAttempts);  
           
            
            if (failedAttempts > 3){
                //hide input box for 60*waitMinutes seconds
            } 
            
        }

        passcode.value = "";
    })
}