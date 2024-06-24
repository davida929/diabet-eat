let pop_up = document.querySelector(".pop-bg");
let close_btn = document.querySelector(".exit");
let open_btn = document.querySelector(".open");
let eye = document.querySelector(".eye");
let pwd = document.querySelector("#pwd");
let conn = document.querySelector(".btn-conect");

close_btn.onclick = () => {
  pop_up.style.display = "none";
};
open_btn.onclick = () => {
  pop_up.style.display = "grid";
};

eye.onclick = () => {
  let temp =
    "https://img.icons8.com/?size=100&id=33916&format=png&color=000000";
  let origin =
    "https://img.icons8.com/?size=100&id=986&format=png&color=000000";
  if (eye.src !== temp) {
    pwd.type = "text";
    eye.src = temp;
    return;
  }
  pwd.type = "password";
  eye.src = origin;
};

conn.onclick = (e) => {
  e.preventDefault();
  document.location.href = "./chat";
};
