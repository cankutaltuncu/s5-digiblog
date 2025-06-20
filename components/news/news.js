// Haberleri üretmek için aşağıdaki newsData objesini kullanacağız. Önce inceleyin.
import { newsData } from "./../../resources.js";

const sampleNewsItem = {
  baslik: "örnek başlık",
  tarih: "11 Kasım 2026",
  ilkParagraf: "Örnek paragraf 1",
  ikinciParagraf: "Örnek paragraf 2",
  ucuncuParagraf: "Örnek paragraf 3",
};

/*
Adım 1: NewsBuilder component fonksiyonu yazmak
Yazacağınız NewsBuilder fonksiyonu, yukarıdaki sampleNewsItem yapısındaki bir objeyi parametre olarak almalı ve alttaki yapıya sahip bir içerik oluşturup return etmeli:

<div class="article">
  <h2>{haber başlığı}</h2>
  <p class="tarih">{haber tarihi}</p>

  {üç ayrı paragraf elementi}

  <button class="expandButton">+</button>
</div>


Adım 2:
Oluşturulan expandButton classına sahip elemana tıklandığında, içinde bulunduğu article classına sahip elemanda isOpen classı yoksa eklemeli, varsa çıkarmalı.


Adım 3:
newsData, sampleNewsItem yapısına benzeyen objelerden oluşan bir array ve sayfada göstermek istediğimiz haberleri içeriyor.
newsData'nın her bir elemanını NewsBuilder ile kullanmak için bir döngü yazın. Döngü her çalıştığında:
- o anki eleman ve NewsBuilder kullanılarak içerik hazırlanmalı,
- hazırlanan içerik, index.html'de bulunan articleList classına sahip elemanın içine yerleştirilmeli.


Not 1: İlk 2 adım NewsBuilder içinde yapılmalı.
Not 2: NewsBuilder fonksiyonunda oluşturduklarınızı return etmeyi unutmayın.
*/

function NewsBuilder(newsItem) {
  const articleDiv = document.createElement("div");
  articleDiv.className = "article";

  const titleElement = document.createElement("h2");
  titleElement.textContent = newsItem.baslik;
  articleDiv.appendChild(titleElement);

  const dateElement = document.createElement("p");
  dateElement.className = "date";
  dateElement.textContent = newsItem.tarih;
  articleDiv.appendChild(dateElement);

  if (newsItem.ilkParagraf) {
    const p1 = document.createElement("p");
    p1.textContent = newsItem.ilkParagraf;
    articleDiv.appendChild(p1);
  }
  if (newsItem.ikinciParagraf) {
    const p2 = document.createElement("p");
    p2.textContent = newsItem.ikinciParagraf;
    articleDiv.appendChild(p2);
  }
  if (newsItem.ucuncuParagraf) {
    const p3 = document.createElement("p");
    p3.textContent = newsItem.ucuncuParagraf;
    articleDiv.appendChild(p3);
  }

  const expandButton = document.createElement("button");
  expandButton.className = "expandButton";
  expandButton.textContent = "+";
  articleDiv.appendChild(expandButton);

  expandButton.addEventListener("click", () => {
    articleDiv.classList.toggle("isOpen");
    if (articleDiv.classList.contains("isOpen")) {
      expandButton.textContent = "-";
    } else {
      expandButton.textContent = "+";
    }
  });

  return articleDiv;
}
document.addEventListener("DOMContentLoaded", () => {
  const articleListContainer = document.querySelector(".articleList");

  if (articleListContainer) {
    newsData.forEach((newsItem) => {
      const newsArticle = NewsBuilder(newsItem);
      articleListContainer.appendChild(newsArticle);
    });
  }
});
