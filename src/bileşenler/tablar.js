import axios from "axios";
const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse
  //['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

  const divTopics = document.createElement("div");
  divTopics.setAttribute("class", "topics");

  konu.forEach((element) => {
    const tabDiv = document.createElement("div");
    tabDiv.classList = "tab";
    tabDiv.textContent = element;
    divTopics.appendChild(tabDiv);
  });

  return divTopics;
};
//console.log(Tablar(["javascript", "bootstrap", "teknoloji"]));

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  // bunda ekstra axios gerekli
};
//once dammy ile deneyebilirsin
// {"konular":["javascript","bootstrap","teknoloji","jquery","node.js"]} //objeden verileri çek

const secilen = document.querySelector("secici");

export { Tablar, tabEkleyici };
