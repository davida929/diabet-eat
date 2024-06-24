let send = document.getElementById("send");
let msg = document.querySelector(".msg");
let ipt = document.getElementById("message");
let img = document.getElementById("image");

img.addEventListener("change", (e) => {
  const sary = e.target.files[0];
  if (sary) {
    url = URL.createObjectURL(sary);
    msg.innerHTML += user_img_response(url);
  }
});
// template :
const bot_response = (res) => {
  let before =
    '<div class="flex justify-start mb-4"><img src="https://img.icons8.com/?size=100&id=37410&format=png&color=000000" class="object-cover h-8 w-8 rounded-full" alt=""/> <div class="ml-2 py-3 px-4 bg-slate-100 rounded-br-3xl rounded-tr-3xl rounded-tl-xl max-w-md">';

  let after =
    '</div></div></div><div class="ml-12 -mt-3 flex items-center justify-between w-24"><img src="https://img.icons8.com/?size=100&id=11675&format=png&color=595959" alt="#" class="cursor-pointer w-6"/><img src="https://img.icons8.com/?size=100&id=pNYOTp5DinZ3&format=png&color=595959" alt="#" class="cursor-pointer w-6"/>  <img src="https://img.icons8.com/?size=100&id=az8n6pxuzg4r&format=png&color=595959" alt="#" class="cursor-pointer w-6"/> </div> ';
  return before + res + after;
};

const bot_response_img = (res) => {
  let before =
    '<div class="flex justify-start mb-4"><img src="https://img.icons8.com/?size=100&id=37410&format=png&color=000000" class="object-cover h-8 w-8 rounded-full"/><div class="ml-2 py-3 px-4 bg-gray-100 rounded-br-3xl rounded-tr-3xl rounded-tl-xl"><img src="';

  let after = ' " alt="" class="max-w-md"/></div></div>';
  return before + res + after;
};

const user_response = (res) => {
  let before =
    ' <div class="flex justify-end mb-4"><div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">';
  let after = "</div></div>";
  return before + res + after;
};
const user_img_response = (res) => {
  let before =
    ' <div class="flex justify-end mb-4"><div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"><img src="';
  let after = '" alt="" class="max-w-md"/></div></div>';
  return before + res + after;
};

const refresh_bot = async () => {
  let before =
    '<div class="flex justify-start mb-4"><img src="https://img.icons8.com/?size=100&id=37410&format=png&color=000000" class="object-cover h-8 w-8 rounded-full"/><div class="ml-2 bg-white rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"><img src="/web/static/assets/a.gif" alt="" class="max-w-12"/></div></div>';
  msg.innerHTML += before;
};

// get image
send.onclick = (e) => {
  e.preventDefault();
  msg.scroll({
    top: msg.scrollHeight,
    behavior: "smooth",
  });
  msg.innerHTML += user_response(ipt.value);
  ipt.value = "";

  let old = msg.innerHTML;
  refresh_bot();
  setTimeout(() => {
    msg.innerHTML = old;
    msg.innerHTML += bot_response(
      "Bonjour john . En tant que patient diabétique, voici un programme de repas pour demain, conçu pour maintenir une glycémie stable avec des aliments à faible indice glycémique, riches en fibres et en nutriments essentiels. En respectant le régime et les consignes du médecin, tout ira bien. </br> "
    );
  }, 2000);
};

// Script de Test
