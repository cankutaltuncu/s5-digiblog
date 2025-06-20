import { menuElemanlari } from "./../../resources.js";

/*
Adım 1: MenuBuilder component fonksiyonu yazmak
Stringlerden oluşan bir arrayden, bir menü oluşturmak için MenuBuilder adında bir component (fonksiyon) yazın.

MenuBuilder aşağıdaki yapıya sahip bir içerik oluşturmalı ve return etmeli:

<div class="menu">
  <ul>
    {... Adım 2 ...}
  </ul>
</div>


Adım 2: Menü ögelerini oluşturmak
MenuBuilder fonksiyonu, parametre olarak aldığı arrayin her bir elemanı için <li> oluşturmalı ve bunları yukarıdaki <ul> içine eklemeli.


Adım 3: Menüyü açıp kapatmak
index.html içindeki menu-button classına sahip elemana tıklandığında, MenuBuilder içinde oluşturduğunuz menu classına sahip elemanda 'isOpen' classı varsa çıkarmalı, yoksa eklemeli. (Yani isOpen classını toggle etmeli)


Adım 4: MenuBuilder'ı kullanmak
MenuBuilder fonksiyonu ve resouces.js dosyasından gelen menuElemanlari arrayini kullanarak oluşturduğunuz menüyü, header classına sahip elemana ekleyin.


Not 1: İlk 3 adım MenuBuilder içinde yapılmalı.
Not 2: MenuBuilder fonksiyonunda oluşturduklarınızı return etmeyi unutmayın.
*/

function MenuBuilder(items) {
  const menuDiv = document.createElement("div");
  menuDiv.className = "menu";
  const ulElement = document.createElement("ul");
  menuDiv.appendChild(ulElement);

  items.forEach((itemText) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = itemText;
    listItem.appendChild(link);
    ulElement.appendChild(listItem);
  });

  const menuButton = document.querySelector(".menu-button");
  if (menuButton) {
    menuButton.addEventListener("click", () => {
      menuDiv.classList.toggle("isOpen");
    });
  }
  return menuDiv;
}

document.addEventListener("DOMContentLoaded", () => {
  const headerElement = document.querySelector(".header");

  if (headerElement) {
    const myMenu = MenuBuilder(menuElemanlari);
    headerElement.appendChild(myMenu);
  }
});
