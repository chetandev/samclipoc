const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

let FruitBox = [];



router.use(cors())
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))


router.get("/ping", async (req, res) => {
    const result = { incomming: 'ping ', version: '6' }
    console.log(result)
    res.send(JSON.stringify(result))
});

router.get("/fruitbox", async (req, res) => {
    res.send(JSON.stringify(FruitBox))
});

router.get("/fruitbox/:item", async (req, res) => {

    const item = parseInt(req.params.item)
    FruitBox.push(item)
    res.send(JSON.stringify(FruitBox[item]))
});


const mysql = require('mysql2/promise');
var util = require('util');
var conn = mysql.createPool({
    host: '',
    user: 'pbreporting-user',
    password: ''
});

router.get("/dbdata", async (req, res) => {

    try {
        const [rows] = await conn.execute("select count(*) from gaadi_finance.banks")
        console.log(rows)
        res.send(rows)
    } catch (e) {
        console.log(e)
        res.send(e)
    }
});


app.use('/', router)

module.exports = app;

//roll back

// aws lambda update-alias  --function-name sam-app-HelloWorldFunction-waY94AhNYYW8  --name live --function-version 1
//aws lambda get-alias  --function-name sam-app-HelloWorldFunction-waY94AhNYYW8  --name live   
//aws lambda list-versions-by-function --function-name sam-app-ExpressFunction-vNi9QFmrYFrW --max-items 2