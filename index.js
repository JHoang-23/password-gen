const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generateRandomPassword(passwordLength){
    let string = ""
    for (let i = 0; i<passwordLength; i++){
        let randInt = Math.floor(Math.random() * characters.length)
        string += characters[randInt]        
    }
    return string
}

function renderRandomPassword(){
    let passwordLength = document.getElementById("password-length").value
    if (passwordLength < 6 || passwordLength > 20){
        showPopup("Please choose a length between 6 and 20 characters.")
    } else{
        let firstPassword = document.getElementById("left-box")
        let secondPassword = document.getElementById("right-box")

        firstPassword.textContent = generateRandomPassword(passwordLength)
        secondPassword.textContent = generateRandomPassword(passwordLength)
        
    }
    

}

function showPopup(message) {
    document.getElementById("errorMessage").textContent = message;
    document.getElementById("error").style.display = "block";
}

function hidePopup(){
    document.getElementById("error").style.display = "none";
}

