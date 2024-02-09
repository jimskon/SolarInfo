var serverIP = "http://44.201.131.63"

function sendInvite() {
	var emailBody = "We have the best chat!!! get your ram here:\n" + serverIP + "/restChat/restChat.html"
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "restChatBestChat@gmail.com",
    Password : "8249F76074C09FC2DBFD6B7916E6AB574028",
    To : 'sam.rabieh@gmail.com',
    From : "restChatBestChat@gmail.com",
    Subject : "Come check out our Mario Server!!!!!!",
    Body : emailBody
}).then(
  message => alert(message)
);
}
