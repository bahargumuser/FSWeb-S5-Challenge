import axios from "axios";

const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const divAdd = document.createElement("div");
  divAdd.setAttribute("class", "header");

  const headerspan = document.createElement("span");
  headerspan.classList = "date";
  headerspan.textContent = tarih;
  divAdd.appendChild(headerspan);

  const headerh1 = document.createElement("h1");
  headerh1.textContent = baslik;
  divAdd.appendChild(headerh1);

  const headspan = document.createElement("span");
  headspan.classList = "temp";
  headspan.textContent = yazi;
  divAdd.appendChild(headspan);

  return divAdd;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bilei.Şşenini kullanarak bir header oluşturun **COMPANENT sundaki.bundaki.bu
  //1.1(baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  const addSecici = document.querySelector(secici); //query ile seçici'yi çektim
  addSecici.appendChild(
    Header("Teknoloji Zamanı", "11 Kasım 2022", "sağdaki yazı")
  );
  return addSecici;
};
export { Header, headerEkleyici }; //export=modul yaratma
