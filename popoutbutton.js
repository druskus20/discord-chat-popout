/*
 * This script inserts a chat popout button in a https://discord.com/channels/* 
*/

var buttonContainerClass = "buttons-3JBrkn";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Get the buttons container at the input text area
//  after waiting for the loading screen 
async function getButtonsContainer() {
 var [buttons] = document.getElementsByClassName(buttonContainerClass);
 while (buttons == null) {
    await sleep(1000);
    var [buttons] = document.getElementsByClassName(buttonContainerClass);
  } 
  return buttons
}

function openPopOutChat() {
 window.open(window.location.href,'popUpWindow','height=400,width=600,scrollbars=yes,menubar=no'); 
}

// Insert a new button in the buttonsContainer (id="popout-chat-button")
async function InsertPopOutButton() {
  popOutButton = document.createElement('div');
  popOutButton.className = 'buttonContainer-28fw2U';
  popOutButton.innerHTML = `
<button id="popout-chat-button" aria-label="Open chat in a separate window" tabindex="0" type="button" class="button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN">
   <div class="contents-18-Yxp button-3AYNKb button-318s1X stickerButton-3OEgwj">
      <div class="buttonWrapper-1ZmCpA" id="children" style="opacity: 1; transform: none;">

         <svg width="20" height="21" viewBox="0 0 22 23"  xmlns="http://www.w3.org/2000/svg">
         <path d="M18.2188 20.05H2.75V4.58125H10.3125V1.83125H0V22.8H20.9688V12.4875H18.2188V20.05Z" fill="currentColor"/>
         <path d="M14.4375 0.800003L17.1875 3.55L11.3438 9.39375L13.4062 11.4563L19.25 5.6125L22 8.70625V0.800003H14.4375Z" fill="currentColor"/>
         </svg>
         </svg>
      </div>
   </div>
</button>
  `;

 popOutButton.addEventListener("click", openPopOutChat);
 buttons = await getButtonsContainer()
 buttons.appendChild(popOutButton); 
}

if (document.getElementById("popout-chat-button") == null){
 InsertPopOutButton()
}
