var date = new Date();
var todaysDate = date.getDate();
console.log(todaysDate);

$(".card").click(function () {
  // set date header for card
  let id = $(this).attr("id");
  let content = cardContent[id - 1];
  let date = id + ". joulukuuta";

  let date2 = new Date();
  let todaysDate = date2.getDate();

  // Delete this on the 1st of December
  todaysDate = 31;

  let lastContentItem = content[2];
  let contentType = lastContentItem.slice(lastContentItem.length - 3);
  console.log(lastContentItem.slice(lastContentItem.length - 3));

  $("#kalender-date").text(date);

  // set card text content
  if (id > todaysDate) {
    let i = Math.floor(Math.random() * 2.5);
    let content = cheatContent[i];
    $("#modal-text").addClass("cheat-text").removeClass("secret-code");
    $("#modal-text2").hide();
    $("#modal-vid").hide();
    $("#modal-mp3").hide();
    $("#modal-img").attr("src", content[1]);
    $("#modal-text1").text(content[0]);
    $("#modal-formdiv").hide();
  } else {
    if (contentType == "mp4") {
      $("#modal-text").removeClass("cheat-text").addClass("secret-code");
      $("#modal-text2").show().html(content[1]);
      $("#modal-vid").attr("src", content[2]);
      $("#modal-vid").show();
      $("#modal-mp3").hide();
      $("#modal-img").hide();
      $("#modal-text1").html(content[0]);
      $("#modal-formdiv").show();
    } else if (contentType == "mp3") {
      $("#modal-text").removeClass("cheat-text").addClass("secret-code");
      $("#modal-text2").show().html(content[1]);
      $("#modal-vid").hide();
      $("#modal-mp3").attr("src", content[2]);
      $("#modal-mp3").show();
      $("#modal-img").hide();
      $("#modal-text1").html(content[0]);
      $("#modal-formdiv").show();
    } else {
      $("#modal-text").removeClass("cheat-text").addClass("secret-code");
      $("#modal-text2").show().html(content[1]);
      $("#modal-vid").hide();
      $("#modal-mp3").hide();
      $("#modal-img").attr("src", content[2]);
      $("#modal-img").show();
      $("#modal-text1").html(content[0]);
      $("#modal-formdiv").show();
    }
  }

  $("#modal").modal("show");
});

cardContent = [
  [
    '<a href="https://youtu.be/iZNv_B5nW2w">Kirje joulupukille (youtube)</a>',
    "@Tuvon hallituksen puheenjohtaja ja alueellinen varhaiskasvatuksen erityisopettaja Ritva-Liisa Pihlainen",
    "assets/img/tuvo_1.jpeg",
  ],
  [
    '<a href="https://youtu.be/YSH0f_Ni0LQ">Varhaiskasvatuksen palvelualuejohtajan joulutervehdys (youtube)</a>',
    "@Vesa Kulmala",
    "assets/img/tuvo_2.jpeg",
  ],
  [
    "Tonttu-tervehdys",
    "@Tuvon hallituksen j??senen ja Karhunaukion p??iv??kodinjohtajan Maarit Kallioniemi",
    "assets/videos/tuvo_3.mp4",
  ],
  [
    "Tuvon hallituslaisia tonttuilemassa (Ritva-Liisa, Riikka, Tuija, Laura ja Pirjo)",
    "@Tuvon hallituksen sihteeri ja Uittamon p??iv??kodinjohtaja Tuija Uhmavaara",
    "assets/videos/tuvo_4.mp4",
  ],
  [
    "Entisen ty??suojeluvaltuutettu Jari Haunisen jouluinen tervehdys.",
    " ",
    "assets/videos/tuvo_5.mp4",
  ],
  [
    '<a href="https://www.youtube.com/watch?v=J1fN5NQXf7g"> Hyv???? itsen??isyysp??iv???? Maamme-laulun sanoin Robinin laulamana (YouTube)</a>',
    "@Tuvon hallituksen varapuheenjohtaja ja projektikoordinaattori Riikka Vuorinen",
    "assets/img/tuvo_6.jpeg",
  ],
  [
    "Myskikurpitsa-kikherne curry - Instagram @anniinaskitchen",
    "@Tuvon hallituksen sihteeri ja Uittamon p??iv??kodin johtaja Tuija Uhmavaara",
    "assets/videos/tuvo_7.mp4",
  ],
  [
    "OAJ:n puheenjohtaja Olli Luukkaisen joulunodotuksen tervehdys",
    " ",
    "assets/videos/tuvo_8.mp4",
  ],
  [
    "<strong> ILOISTA JOULUN AIKAA! </strong> ",
    "Toivottaa Satakunnan ja Varsinais-Suomenvaalipiirin VOL-valtuutetut",
    "assets/img/tuvo_09.png",
  ],
  [
    "Tuvon hallituslaisia ja luottamusmiehi?? tonttuilemassa tropiikissa (Marja, Maarit, Jaana, Hanna ja Kirsti)",
    "@Tuvon hallituksen sihteeri ja Uittamon p??iv??kodinjohtaja Tuija Uhmavaara",
    "assets/videos/tuvo_10.mp4",
  ],
  [
    "???Lelukaupan ikkunassa??? (Arvid Lydecken)",
    "@Viittoja Ida Pehkonen, lukija ja kuvaaja Tuvon hallituksen j??sen ja alueellinen varhaiskasvatuksen erityisopettaja Pirjo Laakso",
    "assets/videos/tuvo_11.mp4",
  ],
  [
    "Hiutaleet maahan leijailee",
    "@Pokka pit???? -kuoro, pianossa kuoronjohtaja Johanna J??rvinen",
    "assets/videos/tuvo_12.mp4",
  ],
  [
    "Lucian p??iv??",
    "Lucian p??iv???? vietet????n Pyh??n Lucian muistoksi vuosittain h??nen kuolinp??iv??n????n 13. joulukuuta. Muistop??iv?? kuuluu alun perin katoliseen pyhimyskalenteriin, mutta nykyisin sit?? vietet????n ennen kaikkea ruotsinkielisess?? kulttuurissa. Perinteeseen kuuluu Lucia-neito, joka on pukeutunut valkoisiin vaatteisiin, punaiseen vy??h??n ja kynttil??kruunuun ja pit???? k??dess????n kynttil????. Lucia tuo valoa talven pimeyteen. Lucia (lat. lux, valo) on suomennettuna Valotar. Juliaanisessa kalenterissa talvip??iv??nseisaus osui keskiajalla Lucian kuolinp??iv????n, mik?? viittaa siihen, ettei kyseess?? ollut sattuma. Vuoden pisimp????n y??h??n ja valon juhlaan liittyneet pakanalliset tavat ja uskomukset yhdistyiv??t Lucian nimeen. <br><br>@Kuva ja l??hde: <a href='https://fi.wikipedia.org/wiki/Lucian_p%C3%A4iv%C3%A4' > Wikipedia</a>, koonnut tuvon hallituksen varapuheenjohtaja ja projektikoordinaattori Riikka Vuorinen",
    "assets/img/tuvo_13.jpg",
  ],
  [
    "Talviruno vau.fi:st??",
    "@Tuvon hallituksen sihteeri ja Uittamon p??iv??kodinjohtaja Tuija Uhmavaara",
    "assets/videos/tuvo_14.mp4",
  ],
  [
    "<strong>Taivaannaula, Annan p??iv?? </strong> <br><br> Keskiajalta aina 1600-luvun lopulle joulukuun 15. p??iv?? oli Suomessa omistettu Annalle. T??m??n takia kansanperinteess?? Annan p??iv??ksi kutsutaankin usein juuri joulukuun puoliv??li??. Vanhana Annan p??iv??n?? pimeys on tuntunut ihmisist?? sananparsien perusteella loputtomalta. ??Kyll?? on y??t?? jouluista, Annan p??iv??n aikuista??. Jouluaattoon on kuitenkin en???? yhdeks??n y??t??. Annan p??iv??n?? pitikin jo aloittaa joululeipomiset ja jouluoluiden valmistus. Annan pitk???? y??t?? pidettiin sopivana aikana joulun leipomisille. Ihmiset nukkuivat illalla muutaman tunnin, mutta puolilta??in her??ttiin leipomaan koristeellisia joululeipi??. Yhteen leip????n, joka sy??tiin jouluaamuna, tehtiin ??joulusilm??t?? eli ihmisen kasvot. Leipomisen lis??ksi y??ll?? kierrettiin my??s naapureissa pyyt??m??ss?? paistinkakkua. Anteliaisuus takasi talolle leiv??n vuotuisen riitt??misen ja hyv??n kalansaaliin.<br><br>Sanottiin my??s, ett?? ??Annana oluet pannaan, jouluna joukolla juodaan??. Loitsuilla pyhitetty olut on ollut muinaissuomalaisten juhlajuoma. Oluen teht??v??n?? oli olla juhlamielen ja ilon antaja pidoissa. Hedelm??llisyyteen liittyviss?? juhlissa juopuminen saattoi kuulua asiaan, ja humala toi oluen ja viljan haltijan osaksi juhlaa.<br><br>Rahvaanuskossa vihre??viittainen Anna eli Annikki on mets??n em??nt?? tai Tapion tyt??r. Annikki soitteli mets??ss?? simapilli?? ja istui kultaisella tuolilla kehr??ten vaskisella v??rttin??ll??. Mets??n pedot olivat Annikin koiria, joten oli luonnollista, ett?? karjanhoitajat pyysiv??t Annikkia, ??juottajaa metisen juoman, katsojaa metisen karjan??, varjelemaan karjaa n??ilt?? koirilta. Mets??lle l??htev?? mies on pyyt??nyt Annikilta saalista esimerkiksi t??h??n tapaan:<br><br>??Annikki, tyt??r Tapion,<br>Juonitar, mets??n em??nt??,<br>Annas tuosta riistan juosta,<br>Rahan karvan katkoella<br>Poikki Pohjolan joesta,<br>Kanasaaren kainaloitse!??<br><br>Kirjoittaja: Anssi Alhonen.<br> <a href='https://www.taivaannaula.org/perinne/kansanperinteen-pyhat/annan-paiva'>l??hde</a>",
    "@Tiedot Wikipedia, koonnut tuvon hallituksen j??sen ja varhaiskasvatuksen erityisopettajaopiskelija Laura Mantere",
    "assets/img/tuvo_15.jpeg",
  ],
  [
    '<strong>PIPARKAKKUTALO </strong><br><br>Ainekset:<br>1kg piparkakkutaikinaa<br><br> Liimaamiseen:<br> 3-4dl sokeria<br><br>Ohje:<br>??? Kopioi piparkakkutalon kaavat leivinpaperille tai paksummalle kiilt??v??pintaiselle pahville.<br><br>??? Kauli piparkakkutaikina jauhotetulla p??yd??ll?? 3 - 4 mm:n paksuiseksi levyksi. Leikkaa levyst?? piparkakkutalon kaavojen mukaan 2 sivusein????, 2 p????tysein????, 2 kattoa sek?? savupiipun osat. Siirr?? palat varovasti lastalla leivinpaperille uunipellille.<br><br>??? Leikkaa toiseen sivusein????n oviaukko ja p????tyseiniin ikkuna-aukot. Irrota varoen ja nosta my??s ovi pellille.<br><br>??? Tee lopusta taikinasta n. 5 mm:n paksuinen levy talon pohjaksi.<br><br>??? Paista osat uunissa 200 asteessa n. 10 min. Anna j????hty?? hyvin.<br><br>??? Sulata sokeri miedolla l??mm??ll?? laakeassa pannussa tai kasarissa. V??lt?? turhaa sekoittamista.<br><br>??? Kokoa piparkakkutalo. Kasta ensin molempien p????tyseinien toinen sivu sokeriin. Paina molemmat yht?? aikaa kiinni p??yd??ll?? yl??salaisin olevaan toiseen sivusein????n. Tee sama toiselle puolelle.<br><br>??? Kasta molempien p????tyseinien toinen kalteva reuna sokeriin. Paina kiinni p??yd??ll?? yl??salaisin olevaan toiseen kattopalaan. Tee sama toiselle puolelle.<br><br>??? Kasta talon pohja sokeriin ja kiinnit?? pohjalevyyn. Kiinnit?? lopuksi savupiippu ja ovi.<br><br>??? Koristele esim. pikeerill??, nonparelleilla ja/tai tomusokerilla.<br><br> <a href="https://www.valio.fi/reseptit/piparkakkutalo/"> Piparkakkutalon ohje </a> ja <a href="https://www.valio.fi/joulu/piparkakkutalo/" > Piparkakkutalon kaavat </a > ',
    "@Tuvon hallituksen varapuheenjohtaja ja projektikoordinaattori Riikka Vuorinen",
    "assets/img/tuvo_16.jpeg",
  ],
  [
    "???Karhun joulu???",
    "@Viittoja Ida Pehkonen, lukija ja kuvaaja tuvon hallituksen j??sen ja alueellinen varhaiskasvatuksen erityisopettaja Pirjo Laakso",
    "assets/videos/tuvo_17.mp4",
  ],
  [
    "Jouluinen OVTES toive",
    "@Tuvon hallituksen j??sen ja JUKOn luottamusmies Hanna Saarinen & tuvon tiedottaja ja JUKOn luottamusmies Kirsi ???Kikka??? Salo-Saarinen",
    "assets/videos/tuvo_18.mp4",
  ],
  [
    "Pieni liekki - Anna-Mari Kaskinen",
    "@Tuvon hallituksen sihteeri ja Uittamon p??iv??kodinjohtaja Tuija Uhmavaara",
    "assets/videos/tuvo_19.mp4",
  ],
  [
    "<strong>Joulusauna</strong><br><br>Kantaa puut,<br>kantaa vedet,<br>verkkaan tulta virittelee,<br>lakaisee lattian,<br>pyyhkii penkit,<br>illan pitk??n odottelee.<br><br>Heitt???? l??ylyn,<br>istuu hiljaa,<br>nauttii kiukaan sihin??ss??,<br>vastoo v??h??n,<br>loiskii vett??<br>lempe??ss?? h??m??r??ss??.<br><br>Joulu on <br>ja saunatonttu<br>y??ll?? yksin kylpem??ss??.<br><br><strong>-Tuula Korolainen</strong><br>kirjasta 'Kuono kohti joulua'",
    "@Tuvon hallituksen j??sen ja Karhunaukion p??iv??kodinjohtaja Maarit Kallioniemi",
    "assets/img/tuvo_20.jpeg",
  ],
  [
    "<strong>V??rikk????t Jouluikkunat</strong> <br> ?? pkt murotaikinaa (200g)<br> n. 10 hedelm??karkkia (esim. Pirkka Karuselli pussista)<br><br> Erottele matokarkeista eriv??riset osat ??? keltaiset, punaiset ja siniset ??? ja silppua. Kaaviloi kylm?? taikinalevy parin millin vahvuiseksi levyksi ja ota siit?? erilaisilla pikkuleip??muoteilla leipi?? ja nosta pellille leivinpaperin p????lle. Tee kuhunkin leip????n ???ikkuna??? pikkumuoteilla tai esimerkiksi metallisella pullonkorkilla. Tee jokaiseen leip????n my??s 1-2 reik???? esimerkiksi hammastikulla ripustuslangan pujottamista varten. Levit?? jokaiseen ikkunaan yksiv??rist?? karkkisilppua ohut kattava kerros. Voit v??lill?? laittaa taikinaa j????kappiin kovettumaan, niin saat leivottua kaikki pikkuleiv??t kunnes niit?? on n. 16kpl. <br><br>Paista leipi?? n. 180 asteen l??mm??ss?? uunin keskitasolla 8-10 min. Karkkisilppu sulaa leiv??n keskell?? ja kiehuu paiston aikana. Jos sit?? on liikaa, se kiehuu pahasti yli. Kun pikkuleiv??t alkavat saada v??ri??, ne ovat kypsi??. Anna niiden j????hty?? pellill??, mutta tee ripustusrei??t uudelleen tarvittaessa. <br>Irrota j????htyneet leiv??t lastalla ja pujota lankaan neulan avulla. Ripusta joulukuuseen tai ikkunaan!<br><br> Leivontaohje, joka on vuosia sitten l??ydetty mahdollisesti Pirkka - lehdest??.",
    "@Tuvon hallituksen j??sen ja Karhunaukion p??iv??kodinjohtaja Maarit Kallioniemi",
    "assets/img/tuvo_21.jpeg",
  ],
  [
    "Muumien joulu - kirjasta Muumilaakson nelj?? vuodenaikaa (Tove Jansson, Sami Malila)",
    "@????nen?? (????ni muutettu) tuvon hallituksen j??sen ja varhaiskasvatuksen erityisopettajaopiskelija Laura Mantere",
    "assets/tuvo_22.mp3",
  ],
  [
    "Pukki tiet????",
    "@Pokka pit???? -kuoro, pianossa kuoronjohtaja Johanna J??rvinen",
    "assets/videos/tuvo_23.mp4",
  ],
  [
    "Toivoo Turun varhaiskasvatuksen",
    "opettajat ry hallitus",
    "assets/img/tuvo_24.png",
  ],
];

cheatContent = [
  ["Joulupukki sanoo, ett?? t??m?? p??iv?? ei ole viel??!", "assets/img/cheat1.jpeg"],
  ["??l?? yrit?? vilkaista tulevia p??ivi??!", "assets/img/cheat2.jpeg"],
  ["Viel?? ei ole t??m?? p??iv??!", "assets/img/cheat3.jpeg"],
];
