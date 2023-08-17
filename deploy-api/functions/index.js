const functions = require("firebase-functions")
const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors());

class modelPost{

    constructor(name, author, authorImg, date, img, cost, material){
        this.name = name
        this.author = author
        this.authorImg = authorImg
        this.date = date
        this.img = img
        this.cost = cost
        this.material = material
    }
}

const arry = [
    new modelPost(
        "Vase #794",
        "_Steve",
        "https://cdn.thingiverse.com/site/img/default/avatar/avatar_artist_thumb_medium.jpg",
        "March 01, 2023",
        ["https://cdn.thingiverse.com/assets/de/75/a5/d9/3f/featured_preview_ea5844fb-23ae-4a4f-9557-160349d36645.JPG"],
        10.0,
        ["PLA"]
    ),
    new modelPost(
        "Vase #794",
        "_Steve",
        "https://cdn.thingiverse.com/site/img/default/avatar/avatar_artist_thumb_medium.jpg",
        "March 01, 2023",
        ["https://cdn.thingiverse.com/assets/de/75/a5/d9/3f/featured_preview_ea5844fb-23ae-4a4f-9557-160349d36645.JPG"],
        10.0,
        ["PLA"]
    )
]

app.get("/api/test", (req, res) => {
    res.json({
        'msg' : 'API hosting demo'
    })
})

app.get("/api/testObj", (req, res) => {
    res.json(arry)
})

exports.app = functions.https.onRequest(app)