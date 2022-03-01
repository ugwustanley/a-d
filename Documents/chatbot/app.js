const chatbody = document.querySelector(".chat-body");
const botchat = document.getElementsByClassName(".all-botchat");
chatbody.scrollTop = 9999999;
if (botchat.offsetWidth > 300){
    botchat.style.width = 300 + "px";
}