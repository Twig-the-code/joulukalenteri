$(".card").click(function () {
  // set date header for card
  let id = $(this).attr("id");
  let content = cardContent[id - 1];
  let date = id + ". joulukuuta";

  $("#kalender-date").text(date);

  // set card text content
  if (!content) {
    let i = Math.floor(Math.random() * 2.5);
    let content = cheatContent[i];
    $("#modal-text").addClass("cheat-text").removeClass("secret-code");
    $("#modal-text2").hide();
    $("#modal-img").attr("src", content[1]);
    $("#modal-text1").text(content[0]);
  } else {
    $("#modal-text").removeClass("cheat-text").addClass("secret-code");
    $("#modal-text2").show().text(content[1]);
    $("#modal-img").attr("src", content[2]);
    $("#modal-text1").text(content[0]);
  }

  $("#modal").modal("show");
});

cardContent = [
  [
    "Kirje joulupukille",
    "@Tuvon hallituksen puheenjohtaja ja alueellinen varhaiskasvatuksen erityisopettaja Ritva-Liisa Pihlainen",
    "assets/img/d1.jpg",
  ],
  [
    "Varhaiskasvatuksen palvelualuejohtaja Vesa Kulmalan joulutervehdys",
    " ",
    "assets/img/d2.jpg",
  ],
  [
    "Tonttu-tervehdys",
    "@Tuvon hallituksen jäsenen ja Karhunaukion päiväkodinjohtajan Maarit Kallioniemi",
    "assets/img/d3.jpg",
  ],
  [
    "Tuvon hallituslaisia tonttuilemassa (Ritva-Liisa, Riikka, Tuija, Laura ja Pirjo)",
    "@Tuvon hallituksen sihteeri ja Uittamon päiväkodinjohtaja Tuija Uhmavaara",
    "assets/img/d4.jpg",
  ],
  [
    "Entisen työsuojeluvaltuutettu Jari Haunisen jouluinen tervehdys.",
    " ",
    "assets/img/d5.jpg",
  ],
  [
    "Hyvää itsenäisyyspäivää Maamme-laulun sanoin Robinin laulamana (YouTube)",
    "@Tuvon hallituksen varapuheenjohtaja ja projektikoordinaattori Riikka Vuorinen",
    "assets/img/d6.jpg",
  ],
  [
    "Myskikurpitsa-kikherne curry - Instagram @anniinaskitchen",
    "@Tuvon hallituksen sihteeri ja Uittamon päiväkodin johtaja Tuija Uhmavaara",
    "assets/img/d7.jpg",
  ],
  [
    "OAJ:n puheenjohtaja Olli Luukkaisen joulunodotuksen tervehdys",
    " ",
    "assets/img/d8.jpg",
  ],
  [" ", " ", "assets/img/d9.jpg"],
  [
    "Tuvon hallituslaisia ja luottamusmiehiä tonttuilemassa tropiikissa (Marja, Maarit, Jaana, Hanna ja Kirsti)",
    "@Tuvon hallituksen sihteeri ja Uittamon päiväkodinjohtaja Tuija Uhmavaara",
    "assets/img/d10.jpg",
  ],
  [
    "”Lelukaupan ikkunassa” (Arvid Lydecken)",
    "@Viittoja Ida Pehkonen, lukija ja kuvaaja Tuvon hallituksen jäsen ja alueellinen varhaiskasvatuksen erityisopettaja Pirjo Laakso",
    "assets/img/d11.jpg",
  ],
  [
    "Hiutaleet maahan leijailee",
    "@Pokka pitää -kuoro, pianossa kuoronjohtaja Johanna Järvinen",
    "assets/img/d12.jpg",
  ],
  [
    "Lucian päivä",
    "@ Lucian päivää vietetään Pyhän Lucian muistoksi vuosittain hänen kuolinpäivänään 13. joulukuuta. Muistopäivä kuuluu alun perin katoliseen pyhimyskalenteriin, mutta nykyisin sitä vietetään ennen kaikkea ruotsinkielisessä kulttuurissa. Perinteeseen kuuluu Lucia-neito, joka on pukeutunut valkoisiin vaatteisiin, punaiseen vyöhön ja kynttiläkruunuun ja pitää kädessään kynttilää. Lucia tuo valoa talven pimeyteen. Lucia (lat. lux, valo) on suomennettuna Valotar. Juliaanisessa kalenterissa talvipäivänseisaus osui keskiajalla Lucian kuolinpäivään, mikä viittaa siihen, ettei kyseessä ollut sattuma. Vuoden pisimpään yöhön ja valon juhlaan liittyneet pakanalliset tavat ja uskomukset yhdistyivät Lucian nimeen. Kuva ja lähde: https://fi.wikipedia.org/wiki/Lucian_p%C3%A4iv%C3%A4Kuva ja tiedot Wikipedia, koonnut tuvon hallituksen varapuheenjohtaja ja projektikoordinaattori Riikka Vuorinen",
    "assets/img/d13.jpg",
  ],
  [
    "Talviruno vau.fi:stä",
    "@Tuvon hallituksen sihteeri ja Uittamon päiväkodinjohtaja Tuija Uhmavaara",
    "assets/img/d14.jpg",
  ],
  [
    "Taivaannaula, Annan päivä",
    "@Tiedot Wikipedia, koonnut tuvon hallituksen jäsen ja varhaiskasvatuksen erityisopettajaopiskelija Laura Mantere",
    "assets/img/d15.jpg",
  ],
  [
    "Piparkakkutalon ohje: https://www.valio.fi/reseptit/piparkakkutalo/ Piparkakkutalon kaavat: https://www.valio.fi/joulu/piparkakkutalo/",
    "@Tuvon hallituksen varapuheenjohtaja ja projektikoordinaattori Riikka Vuorinen",
    "assets/img/d16.jpg",
  ],
  [
    "”Karhun joulu”",
    "@Viittoja Ida Pehkonen, lukija ja kuvaaja tuvon hallituksen jäsen ja alueellinen varhaiskasvatuksen erityisopettaja Pirjo Laakso",
    "assets/img/d17.jpg",
  ],
  [
    "Jouluinen OVTES toive",
    "@Tuvon hallituksen jäsen ja JUKOn luottamusmies Hanna Saarinen & tuvon tiedottaja ja JUKOn luottamusmies Kirsi ”Kikka” Salo-Saarinen",
    "assets/img/d18.jpg",
  ],
  [
    "Pieni liekki - Anna-Mari Kaskinen",
    "@Tuvon hallituksen sihteeri ja Uittamon päiväkodinjohtaja Tuija Uhmavaara",
    "assets/img/d19.jpg",
  ],
  [
    "Joulusauna - Tuula Korolainen (kirjasta Kuono kohti joulua)",
    "@Tuvon hallituksen jäsen ja Karhunaukion päiväkodinjohtaja Maarit Kallioniemi",
    "assets/img/d20.jpg",
  ],
  [
    "Leivontaohje, joka on vuosia sitten löydetty mahdollisesti Pirkka-lehdestä.",
    "@Tuvon hallituksen jäsen ja Karhunaukion päiväkodinjohtaja Maarit Kallioniemi",
    "assets/img/d21.jpg",
  ],
  [
    "Muumien joulu - kirjasta Muumilaakson neljä vuodenaikaa (Tove Jansson, Sami Malila)",
    "@Äänenä (ääni muutettu) tuvon hallituksen jäsen ja varhaiskasvatuksen erityisopettajaopiskelija Laura Mantere",
    "assets/img/d22.jpg",
  ],
  [
    "Pukki tietää",
    "@Pokka pitää -kuoro, pianossa kuoronjohtaja Johanna Järvinen",
    "assets/img/d23.jpg",
  ],
  [" ", " ", "assets/img/d24.jpg"],
];

cheatContent = [
  ["Joulupukki sanoo, että tämä päivä ei ole vielä!", "assets/img/cheat1.jpg"],
  ["Älä yritä vilkaista tulevia päiviä!", "assets/img/cheat2.jpg"],
  ["Vielä ei ole tämä päivä!", "assets/img/cheat3.jpg"],
];
