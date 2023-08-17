//Import library
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const e = require("express");
const HTTP_PORT = process.env.PORT || 3000;
const crypto = require('crypto');

//Settings
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//Default listener
function onServerStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
    console.log(`http://localhost:${HTTP_PORT}`);
}


function sha256(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

class modelPost {
    constructor(name, author, authorImg, date, img, cost, material) {
        this.name = name;
        this.author = author;
        this.authorImg = authorImg;
        this.date = date;
        this.img = img;
        this.cost = cost;
        this.material = material;

        let idString = `${name}-${author}-${date}-${img}-${cost}-${material}`;
        this.uid = sha256(idString);
    }
}

const arry = [
    new modelPost(
        "Vase #794",
        "_Steve",
        "https://cdn.thingiverse.com/site/img/default/avatar/avatar_artist_thumb_medium.jpg",
        "March 01, 2023",
        ["https://cdn.thingiverse.com/assets/de/75/a5/d9/3f/featured_preview_ea5844fb-23ae-4a4f-9557-160349d36645.JPG","https://cdn.thingiverse.com/assets/2f/41/e0/23/21/featured_preview_23e589d0-1fe4-464a-9456-e5eaa33caaf7.JPG"],
        45.0,
        ["PLA","ABS","PETG"]
    ),
    new modelPost(
        "Beer Crate battery holder",
        "Marzochi",
        "https://cdn.thingiverse.com/assets/3a/85/ed/74/e4/52698823_2156821977981429_8463739880088797184_o.jpg",
        "March 01, 2023",
        ["https://cdn.thingiverse.com/assets/4a/41/4b/a3/83/featured_preview_4.png","https://cdn.thingiverse.com/assets/45/58/c0/ed/e1/featured_preview_2-min.png"],
        28.0,
        ["PLA","ABS"]
    ),
    new modelPost(
        "USB Cable Reel v2.0",
        "manabun",
        "https://cdn.thingiverse.com/renders/f4/13/cd/b0/62/a8e03285f8d0fcbf581dbdcebb88ad27_thumb_medium.jpg",
        "January 23, 2023",
        ["https://cdn.thingiverse.com/assets/ba/b7/ba/68/6c/featured_preview_232dc57e-7342-42db-b4b3-04417bfad6f3.jpg","https://cdn.thingiverse.com/assets/23/d4/55/71/34/featured_preview_77b72619-fdcb-4273-bb58-e6b55ec39a21.jpg"],
        15.0,
        ["PLA","REX"]
    ),
    new modelPost(
        "3D Name from letters - Standard font",
        "Layermodels",
        "https://cdn.thingiverse.com/assets/cf/3d/e9/4b/22/7fa18307-7eb5-410d-97cd-5baff8d64b96.jpg",
        "January 11, 2023",
        ["https://cdn.thingiverse.com/assets/7c/f1/e1/7b/d9/featured_preview_a667f6c9-3232-488e-9b7d-8e25ffa89bf0.png","https://cdn.thingiverse.com/assets/a0/14/89/fb/9c/featured_preview_e539969d-1e42-43b7-9e1e-5944807de16a.png"],
        5.0,
        ["PLA","REX","ABS"]
    ),
    new modelPost(
        "Universal Smartwatch Dockr",
        "guppyk",
        "https://cdn.thingiverse.com/assets/7c/0b/f4/ec/2c/eh_Logo_200x200.png",
        "November 18, 2022",
        ["https://cdn.thingiverse.com/assets/11/e4/c5/63/6c/featured_preview_887b0dc9-24ca-44fa-a631-e1250e717970.jpg","https://cdn.thingiverse.com/assets/68/08/b0/bd/c1/featured_preview_b44d8cc1-29e7-436c-b06a-31190c7abb52.jpg"],
        20.0,
        ["PLA","REX"]
    )
    
]

app.get("/", (req,res) =>{
    return res.json({
        'msg':'welcome to api'
    })
})

app.get("/api/v0/", (req,res) => {
    return res.json({
        'msg':'API_Dummy_Server'
    })
})

app.get("/api/testObj", (req, res) => {
    res.json(arry)
})

app.listen(HTTP_PORT, onServerStart);