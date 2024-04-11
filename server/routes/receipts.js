import express from 'express';
var router = express.Router();

router.get('/', async(req, res) {
    let uri = req.uri
    fs.readFile(`server/data/${uri}`, 'utf-8', function (err, data) {
        if (err) throw err;
    
        var obj = JSON.parse(data);
        const itemsLength = Object.keys(obj.receipts[0].items).length;
        //console.log(obj);
    
        const doNotInclude = [
            "MRPAPER BG FEE",
            "TAX",
            "BALANCE"
        ]

        runParse(obj, doNotInclude, itemsLength);
    });
});

function runParse(obj, notIncluded, itemsCount) {
    for (let i = 0; i < itemsCount; i++) {
        let currItem = obj.receipts[0].items[i].description;
        if (!notIncluded.includes(currItem)) {
            if (map.has(currItem)) {
                map.set(currItem, map.get(currItem) + 1);
            } else {
                map.set(currItem, 1);
            }
        }
    }
}