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
  const divAdd1 = document.createElement("div");
  divAdd1.setAttribute("class", "topics");

  const topicsdiv = document.createElement("div");
  topicsdiv.classList = "tab";
  topicsdiv.textContent = javascript;
  divAdd1.appendChild(topicsdiv);

  const topicsdiv2 = document.createElement("div");
  topicsdiv2.classList = "tab";
  topicsdiv2.textContent = bootstrap;
  divAdd1.appendChild(topicsdiv2);

  const topicsdiv3 = document.createElement("div");
  topicsdiv3.classList = "tab";
  topicsdiv3.textContent = teknoloji;
  divAdd1.appendChild(topicsdiv3);

  const topicsdiv4 = document.createElement("div");
  topicsdiv4.classList = "tab";
  topicsdiv4.textContent = jquery;
  divAdd1.appendChild(topicsdiv4);

  const topicsdiv5 = document.createElement("div");
  topicsdiv5.classList = "tab";
  topicsdiv5.textContent = node.js;
  divAdd1.appendChild(topicsdiv5);

  return divAdd1;
};

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

export { Tablar, tabEkleyici };
