let failedAttempts = 0;

const getMessages = () => {
    const passcode = document.querySelector("#passcode");
    
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val()
        let found = false;
        
        for (let key in data) {
            if (key === passcode.value){
                console.log("match found")
                const message = document.querySelector("#message")
                message.style.color = "#000000"
                message.innerHTML = data[key]
                found = true
            }
        }

        if (found === false){
            console.log("match not found")
            const message = document.querySelector("#message")
            message.style.color = "#ff0000"
            message.innerHTML = "Message not found"  
            failedAttempts ++;
            console.log(failedAttempts);  
           
            /*
            if (failedAttempts > 3){
                console.log("Wait");
                let waitMinutes = failedAttempts - 3;
                
            } 
            */
        }

        passcode.value = "";
    })
}