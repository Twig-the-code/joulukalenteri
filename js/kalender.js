$('.card').click(function(){

    // set date header for card
    let id = $(this).attr("id")
    let content = cardContent[id-1]
    let date = id + ". joulukuuta"
    
    $("#kalender-date").text(date)

    // set card text content
    if (!content) {
        let i = Math.floor(Math.random() * 2.5)
        let content = cheatContent[i]
        $("#modal-text").addClass("cheat-text").removeClass("secret-code")
        $("#modal-text2").hide()
        $("#modal-img").attr("src", content[1])
        $("#modal-text1").text(content[0])
    } else {
        $("#modal-text").removeClass("cheat-text").addClass("secret-code")
        $("#modal-text2").show().text(content[1])
        $("#modal-img").attr("src", content[2])
        $("#modal-text1").text(content[0])
    }

    $('#modal').modal('show')
})

cardContent = [
    [
        "Kirje joulupukille",
        "@Tuvon hallituksen puheenjohtaja ja alueellinen varhaiskasvatuksen erityisopettaja Ritva-Liisa Pihlainen",
        "assets/img/d1.jpg"
    ],
    [
        "Varhaiskasvatuksen palvelualuejohtaja Vesa Kulmalan joulutervehdys",
        " ",
        "assets/img/d2.jpg"
    ],
    [
        "Tonttu-tervehdys",
        "@Tuvon hallituksen jäsenen ja Karhunaukion päiväkodinjohtajan Maarit Kallioniemi",
        "assets/img/d3.jpg"
    ],
    [
        "Tuvon hallituslaisia tonttuilemassa (Ritva-Liisa, Riikka, Tuija, Laura ja Pirjo)",
        "@Tuvon hallituksen sihteeri ja Uittamon päiväkodinjohtaja Tuija Uhmavaara",
        "assets/img/d4.jpg"
    ],
    [
        "Entisen työsuojeluvaltuutettu Jari Haunisen jouluinen tervehdys.",
        " ",
        "assets/img/d5.jpg"
    ],
    [
        "Hyvää itsenäisyyspäivää Maamme-laulun sanoin Robinin laulamana (YouTube)",
        "@Tuvon hallituksen varapuheenjohtaja ja projektikoordinaattori Riikka Vuorinen",
        "assets/img/d6.jpg"
    ],
    [
        "Myskikurpitsa-kikherne curry - Instagram @anniinaskitchen",
        "@Tuvon hallituksen sihteeri ja Uittamon päiväkodin johtaja Tuija Uhmavaara",
        "assets/img/d7.jpg"
    ],
    [
        "OAJ:n puheenjohtaja Olli Luukkaisen joulunodotuksen tervehdys",
        " ",
        "assets/img/d8.jpg"
    ],
    [
        "What do you get if you cross Santa with a duck? A Christmas Quacker!",
        "7NzoJ",
        "assets/img/d9.jpg"
    ],
    [
        "What do snowmen eat for breakfast? Ice Crispies.",
        "i1Ou+",
        "assets/img/d10.jpg"
    ],
    [
        "Why is it always cold at Christmas? Because it is Decemberrrrrrr!",
        "dzmNN",
        "assets/img/d11.jpg"
    ],
    [
        "What did one snowman say to the other snowman? Smells like carrots around here!",
        "ohNzV",
        "assets/img/d12.jpg"
    ],
    [
        "What does Santa use to bake cakes? Elf-raising flour",
        "aAIal",
        "assets/img/d13.jpg"
    ],
    [
        "What do elves do after school? Their gnome work!",
        "71NGj",
        "assets/img/d14.jpg"
    ],
    [
        "What did the snowman say to the robin? I have snow idea!",
        "5cadu",
        "assets/img/d15.jpg"
    ],
    [
        "Why is it getting harder to buy Advent calendars? Because their days are numbered!",
        "0Rtgk",
        "assets/img/d16.jpg"
    ],
    [
        "How does Santa keep track of all the fireplaces he's visited? He keeps a logbook.",
        "/mvxs",
        "assets/img/d17.jpg"
    ],
     [
        "Who delivers presents to cats? Santa Paws!",
        "KcKu5",
        "assets/img/d18.jpg"
    ],
     [
        "Why does everyone love Frosty the Snowman? He's cool",
        "+Sefv",
        "assets/img/d19.jpg"
    ],
     [
        "What is white and minty? A polo bear!",
        "kApsZ",
        "assets/img/d20.jpg"
    ],
    [
        "What’s green, covered in tinsel and goes ribbet ribbet? A mistle-toad!",
        "HTsvd",
        "assets/img/d21.jpg"
    ],
    [
        "How did Scrooge win the football game? The ghost of Christmas passed!",
        "UujuL",
        "assets/img/d22.jpg"
    ],
    [
        "What’s the absolute best Christmas present? A broken drum — you can’t beat it!",
        "NG1lO",
        "assets/img/d23.jpg"
    ],
     [
        "What type of cars do elves drive? Toy-otas!",
        "LsWC3",
        "assets/img/d24.jpg"
    ],
    [   
        "The encryption is 128-bit AES and your secret password is rudoplh 🦌 Go decrypt your secret message!",
        "mD8yR",
        "assets/img/d25.jpg"
    ]
]

cheatContent = [
    [
        "Santa says it isn't this day yet!",
        "assets/img/cheat1.jpg"
    ],
    [
        "Stop trying to sneak a look at days in the future!",
        "assets/img/cheat2.jpg"
    ],
    [
        "It still isn't this day yet!",
        "assets/img/cheat3.jpg"
    ]
]