var date = new Date();
var todaysDate = date.getDate();
console.log(todaysDate);

$(".card").click(function () {
  // set date header for card
  let id = $(this).attr("id");
  let content = cardContent[id - 1];
  let date = id + ". joulukuuta";

  var date2 = new Date();
  var todaysDate = date2.getDate();

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
    $("#modal-text").removeClass("cheat-text").addClass("secret-code");
    $("#modal-text2").show().html(content[1]);
    $("#modal-vid source").attr("src", content[2]);
    $("#modal-img").attr("src", content[2]);
    $("#modal-text1").html(content[0]);
    $("#modal-formdiv").show();
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
    "@ Lucian päivää vietetään Pyhän Lucian muistoksi vuosittain hänen kuolinpäivänään 13. joulukuuta. Muistopäivä kuuluu alun perin katoliseen pyhimyskalenteriin, mutta nykyisin sitä vietetään ennen kaikkea ruotsinkielisessä kulttuurissa. Perinteeseen kuuluu Lucia-neito, joka on pukeutunut valkoisiin vaatteisiin, punaiseen vyöhön ja kynttiläkruunuun ja pitää kädessään kynttilää. Lucia tuo valoa talven pimeyteen. Lucia (lat. lux, valo) on suomennettuna Valotar. Juliaanisessa kalenterissa talvipäivänseisaus osui keskiajalla Lucian kuolinpäivään, mikä viittaa siihen, ettei kyseessä ollut sattuma. Vuoden pisimpään yöhön ja valon juhlaan liittyneet pakanalliset tavat ja uskomukset yhdistyivät Lucian nimeen. Kuva ja lähde: https://fi.wikipedia.org/wiki/Lucian_p%C3%A4iv%C3%A4Kuva ja tiedot Wikipedia, koonnut tuvon hallituksen varapuheenjohtaja ja projektikoordinaattori Riikka Vuorinen",
    "assets/img/tuvo_13.jpg",
  ],
  [
    "Talviruno vau.fi:stä",
    "@Tuvon hallituksen sihteeri ja Uittamon päiväkodinjohtaja Tuija Uhmavaara",
    "assets/videos/tuvo_14.mp4",
  ],
  [
    "Taivaannaula, Annan päivä",
    "@Tiedot Wikipedia, koonnut tuvon hallituksen jäsen ja varhaiskasvatuksen erityisopettajaopiskelija Laura Mantere",
    "assets/img/d15.jpg",
  ],
  [
    '<a href="https://www.valio.fi/reseptit/piparkakkutalo/">Piparkakkutalon ohje </a> ja <a href="https://www.valio.fi/joulu/piparkakkutalo/" > Piparkakkutalon kaavat </a> ',
    "@Tuvon hallituksen varapuheenjohtaja ja projektikoordinaattori Riikka Vuorinen",
    "assets/img/d16.jpg",
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
    "Joulusauna - Tuula Korolainen (kirjasta Kuono kohti joulua)",
    "@Tuvon hallituksen jäsen ja Karhunaukion päiväkodinjohtaja Maarit Kallioniemi",
    "assets/videos/tuvo_20.mp4",
  ],
  [
    "Leivontaohje, joka on vuosia sitten löydetty mahdollisesti Pirkka-lehdestä.",
    "@Tuvon hallituksen jäsen ja Karhunaukion päiväkodinjohtaja Maarit Kallioniemi",
    "assets/img/d21.jpg",
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
