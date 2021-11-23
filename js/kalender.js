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
    '<a href="https://youtu.be/iZNv_B5nW2w">Kirje joulupukille</a>',
    "@Tuvon hallituksen puheenjohtaja ja alueellinen varhaiskasvatuksen erityisopettaja Ritva-Liisa Pihlainen",
    "assets/img/tuvo_1.jpeg",
  ],
  [
    '<a href="https://youtu.be/YSH0f_Ni0LQ">Varhaiskasvatuksen palvelualuejohtaja Vesa Kulmalan joulutervehdys</a>',
    " ",
    "assets/img/tuvo_2.jpeg",
  ],
  [
    "Tonttu-tervehdys",
    "@Tuvon hallituksen jäsenen ja Karhunaukion päiväkodinjohtajan Maarit Kallioniemi",
    "assets/videos/tuvo_3.mp4",
  ],
  [
    "Tuvon hallituslaisia tonttuilemassa (Ritva-Liisa, Riikka, Tuija, Laura ja Pirjo)",
    "@Tuvon hallituksen sihteeri ja Uittamon päiväkodinjohtaja Tuija Uhmavaara",
    "assets/videos/tuvo_4.mp4",
  ],
  [
    "Entisen työsuojeluvaltuutettu Jari Haunisen jouluinen tervehdys.",
    " ",
    "assets/videos/tuvo_5.mp4",
  ],
  [
    '<a href="https://www.youtube.com/watch?v=J1fN5NQXf7g"> Hyvää itsenäisyyspäivää Maamme-laulun sanoin Robinin laulamana (YouTube)</a>',
    "@Tuvon hallituksen varapuheenjohtaja ja projektikoordinaattori Riikka Vuorinen",
    "assets/img/tuvo_6.jpeg",
  ],
  [
    "Myskikurpitsa-kikherne curry - Instagram @anniinaskitchen",
    "@Tuvon hallituksen sihteeri ja Uittamon päiväkodin johtaja Tuija Uhmavaara",
    "assets/videos/tuvo_7.mp4",
  ],
  [
    "OAJ:n puheenjohtaja Olli Luukkaisen joulunodotuksen tervehdys",
    " ",
    "assets/videos/tuvo_8.mp4",
  ],
  [" ", " ", "assets/img/tuvo_09.png"],
  [
    "Tuvon hallituslaisia ja luottamusmiehiä tonttuilemassa tropiikissa (Marja, Maarit, Jaana, Hanna ja Kirsti)",
    "@Tuvon hallituksen sihteeri ja Uittamon päiväkodinjohtaja Tuija Uhmavaara",
    "assets/videos/tuvo_10.mp4",
  ],
  [
    "”Lelukaupan ikkunassa” (Arvid Lydecken)",
    "@Viittoja Ida Pehkonen, lukija ja kuvaaja Tuvon hallituksen jäsen ja alueellinen varhaiskasvatuksen erityisopettaja Pirjo Laakso",
    "assets/videos/tuvo_11.mp4",
  ],
  [
    "Hiutaleet maahan leijailee",
    "@Pokka pitää -kuoro, pianossa kuoronjohtaja Johanna Järvinen",
    "assets/videos/tuvo_12.mp4",
  ],
  [
    "Lucian päivä",
    "Lucian päivää vietetään Pyhän Lucian muistoksi vuosittain hänen kuolinpäivänään 13. joulukuuta. Muistopäivä kuuluu alun perin katoliseen pyhimyskalenteriin, mutta nykyisin sitä vietetään ennen kaikkea ruotsinkielisessä kulttuurissa. Perinteeseen kuuluu Lucia-neito, joka on pukeutunut valkoisiin vaatteisiin, punaiseen vyöhön ja kynttiläkruunuun ja pitää kädessään kynttilää. Lucia tuo valoa talven pimeyteen. Lucia (lat. lux, valo) on suomennettuna Valotar. Juliaanisessa kalenterissa talvipäivänseisaus osui keskiajalla Lucian kuolinpäivään, mikä viittaa siihen, ettei kyseessä ollut sattuma. Vuoden pisimpään yöhön ja valon juhlaan liittyneet pakanalliset tavat ja uskomukset yhdistyivät Lucian nimeen. <br><br>@Kuva ja lähde: <a href='https://fi.wikipedia.org/wiki/Lucian_p%C3%A4iv%C3%A4' > Wikipedia</a>, koonnut tuvon hallituksen varapuheenjohtaja ja projektikoordinaattori Riikka Vuorinen",
    "assets/img/tuvo_13.jpg",
  ],
  [
    "Talviruno vau.fi:stä",
    "@Tuvon hallituksen sihteeri ja Uittamon päiväkodinjohtaja Tuija Uhmavaara",
    "assets/videos/tuvo_14.mp4",
  ],
  [
    "<strong>Taivaannaula, Annan päivä </strong> <br><br> Keskiajalta aina 1600-luvun lopulle joulukuun 15. päivä oli Suomessa omistettu Annalle. Tämän takia kansanperinteessä Annan päiväksi kutsutaankin usein juuri joulukuun puoliväliä. Vanhana Annan päivänä pimeys on tuntunut ihmisistä sananparsien perusteella loputtomalta. »Kyllä on yötä jouluista, Annan päivän aikuista». Jouluaattoon on kuitenkin enää yhdeksän yötä. Annan päivänä pitikin jo aloittaa joululeipomiset ja jouluoluiden valmistus. Annan pitkää yötä pidettiin sopivana aikana joulun leipomisille. Ihmiset nukkuivat illalla muutaman tunnin, mutta puoliltaöin herättiin leipomaan koristeellisia joululeipiä. Yhteen leipään, joka syötiin jouluaamuna, tehtiin »joulusilmät» eli ihmisen kasvot. Leipomisen lisäksi yöllä kierrettiin myös naapureissa pyytämässä paistinkakkua. Anteliaisuus takasi talolle leivän vuotuisen riittämisen ja hyvän kalansaaliin.<br><br>Sanottiin myös, että »Annana oluet pannaan, jouluna joukolla juodaan». Loitsuilla pyhitetty olut on ollut muinaissuomalaisten juhlajuoma. Oluen tehtävänä oli olla juhlamielen ja ilon antaja pidoissa. Hedelmällisyyteen liittyvissä juhlissa juopuminen saattoi kuulua asiaan, ja humala toi oluen ja viljan haltijan osaksi juhlaa.<br><br>Rahvaanuskossa vihreäviittainen Anna eli Annikki on metsän emäntä tai Tapion tytär. Annikki soitteli metsässä simapilliä ja istui kultaisella tuolilla kehräten vaskisella värttinällä. Metsän pedot olivat Annikin koiria, joten oli luonnollista, että karjanhoitajat pyysivät Annikkia, »juottajaa metisen juoman, katsojaa metisen karjan», varjelemaan karjaa näiltä koirilta. Metsälle lähtevä mies on pyytänyt Annikilta saalista esimerkiksi tähän tapaan:<br><br>»Annikki, tytär Tapion,<br>Juonitar, metsän emäntä,<br>Annas tuosta riistan juosta,<br>Rahan karvan katkoella<br>Poikki Pohjolan joesta,<br>Kanasaaren kainaloitse!»<br><br>Kirjoittaja: Anssi Alhonen.<br> <a href='https://www.taivaannaula.org/perinne/kansanperinteen-pyhat/annan-paiva'>lähde</a>",
    "@Tiedot Wikipedia, koonnut tuvon hallituksen jäsen ja varhaiskasvatuksen erityisopettajaopiskelija Laura Mantere",
    "assets/img/tuvo_15.jpeg",
  ],
  [
    '<strong>PIPARKAKKUTALO </strong><br><br>Ainekset:<br>1kg piparkakkutaikinaa<br><br> Liimaamiseen:<br> 3-4dl sokeria<br><br>Ohje:<br>• Kopioi piparkakkutalon kaavat leivinpaperille tai paksummalle kiiltäväpintaiselle pahville.<br><br>• Kauli piparkakkutaikina jauhotetulla pöydällä 3 - 4 mm:n paksuiseksi levyksi. Leikkaa levystä piparkakkutalon kaavojen mukaan 2 sivuseinää, 2 päätyseinää, 2 kattoa sekä savupiipun osat. Siirrä palat varovasti lastalla leivinpaperille uunipellille.<br><br>• Leikkaa toiseen sivuseinään oviaukko ja päätyseiniin ikkuna-aukot. Irrota varoen ja nosta myös ovi pellille.<br><br>• Tee lopusta taikinasta n. 5 mm:n paksuinen levy talon pohjaksi.<br><br>• Paista osat uunissa 200 asteessa n. 10 min. Anna jäähtyä hyvin.<br><br>• Sulata sokeri miedolla lämmöllä laakeassa pannussa tai kasarissa. Vältä turhaa sekoittamista.<br><br>• Kokoa piparkakkutalo. Kasta ensin molempien päätyseinien toinen sivu sokeriin. Paina molemmat yhtä aikaa kiinni pöydällä ylösalaisin olevaan toiseen sivuseinään. Tee sama toiselle puolelle.<br><br>• Kasta molempien päätyseinien toinen kalteva reuna sokeriin. Paina kiinni pöydällä ylösalaisin olevaan toiseen kattopalaan. Tee sama toiselle puolelle.<br><br>• Kasta talon pohja sokeriin ja kiinnitä pohjalevyyn. Kiinnitä lopuksi savupiippu ja ovi.<br><br>• Koristele esim. pikeerillä, nonparelleilla ja/tai tomusokerilla.<br><br> <a href="https://www.valio.fi/reseptit/piparkakkutalo/"> Piparkakkutalon ohje </a> ja <a href="https://www.valio.fi/joulu/piparkakkutalo/" > Piparkakkutalon kaavat </a > ',
    "@Tuvon hallituksen varapuheenjohtaja ja projektikoordinaattori Riikka Vuorinen",
    "assets/img/tuvo_16.jpeg",
  ],
  [
    "”Karhun joulu”",
    "@Viittoja Ida Pehkonen, lukija ja kuvaaja tuvon hallituksen jäsen ja alueellinen varhaiskasvatuksen erityisopettaja Pirjo Laakso",
    "assets/videos/tuvo_17.mp4",
  ],
  [
    "Jouluinen OVTES toive",
    "@Tuvon hallituksen jäsen ja JUKOn luottamusmies Hanna Saarinen & tuvon tiedottaja ja JUKOn luottamusmies Kirsi ”Kikka” Salo-Saarinen",
    "assets/videos/tuvo_18.mp4",
  ],
  [
    "Pieni liekki - Anna-Mari Kaskinen",
    "@Tuvon hallituksen sihteeri ja Uittamon päiväkodinjohtaja Tuija Uhmavaara",
    "assets/videos/tuvo_19.mp4",
  ],
  [
    "<strong>Joulusauna</strong><br><br>Kantaa puut,<br>kantaa vedet,<br>verkkaan tulta virittelee,<br>lakaisee lattian,<br>pyyhkii penkit,<br>illan pitkän odottelee.<br><br>Heittää löylyn,<br>istuu hiljaa,<br>nauttii kiukaan sihinässä,<br>vastoo vähän,<br>loiskii vettä<br>lempeässä hämärässä.<br><br>Joulu on <br>ja saunatonttu<br>yöllä yksin kylpemässä.<br><br><strong>-Tuula Korolainen</strong><br>kirjasta 'Kuono kohti joulua'",
    "@Tuvon hallituksen jäsen ja Karhunaukion päiväkodinjohtaja Maarit Kallioniemi",
    "assets/img/tuvo_20.jpeg",
  ],
  [
    "<strong>Värikkäät Jouluikkunat</strong> <br> ½ pkt murotaikinaa (200g)<br> n. 10 hedelmäkarkkia (esim. Pirkka Karuselli pussista)<br><br> Erottele matokarkeista eriväriset osat – keltaiset, punaiset ja siniset – ja silppua. Kaaviloi kylmä taikinalevy parin millin vahvuiseksi levyksi ja ota siitä erilaisilla pikkuleipämuoteilla leipiä ja nosta pellille leivinpaperin päälle. Tee kuhunkin leipään ”ikkuna” pikkumuoteilla tai esimerkiksi metallisella pullonkorkilla. Tee jokaiseen leipään myös 1-2 reikää esimerkiksi hammastikulla ripustuslangan pujottamista varten. Levitä jokaiseen ikkunaan yksiväristä karkkisilppua ohut kattava kerros. Voit välillä laittaa taikinaa jääkappiin kovettumaan, niin saat leivottua kaikki pikkuleivät kunnes niitä on n. 16kpl. <br><br>Paista leipiä n. 180 asteen lämmössä uunin keskitasolla 8-10 min. Karkkisilppu sulaa leivän keskellä ja kiehuu paiston aikana. Jos sitä on liikaa, se kiehuu pahasti yli. Kun pikkuleivät alkavat saada väriä, ne ovat kypsiä. Anna niiden jäähtyä pellillä, mutta tee ripustusreiät uudelleen tarvittaessa. <br>Irrota jäähtyneet leivät lastalla ja pujota lankaan neulan avulla. Ripusta joulukuuseen tai ikkunaan!<br><br> Leivontaohje, joka on vuosia sitten löydetty mahdollisesti Pirkka - lehdestä.",
    "@Tuvon hallituksen jäsen ja Karhunaukion päiväkodinjohtaja Maarit Kallioniemi",
    "assets/img/tuvo_21.jpeg",
  ],
  [
    "Muumien joulu - kirjasta Muumilaakson neljä vuodenaikaa (Tove Jansson, Sami Malila)",
    "@Äänenä (ääni muutettu) tuvon hallituksen jäsen ja varhaiskasvatuksen erityisopettajaopiskelija Laura Mantere",
    "assets/img/tuvo_22.jpeg",
  ],
  [
    "Pukki tietää",
    "@Pokka pitää -kuoro, pianossa kuoronjohtaja Johanna Järvinen",
    "assets/videos/tuvo_23.mp4",
  ],
  [" ", " ", "assets/img/tuvo_24.png"],
];

cheatContent = [
  ["Joulupukki sanoo, että tämä päivä ei ole vielä!", "assets/img/cheat1.jpeg"],
  ["Älä yritä vilkaista tulevia päiviä!", "assets/img/cheat2.jpeg"],
  ["Vielä ei ole tämä päivä!", "assets/img/cheat3.jpeg"],
];
