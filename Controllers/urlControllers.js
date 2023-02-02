const URL = require('../Models/urlSchema');
const shortid = require('shortid');

const saveDatatoDB = async (req, res) => {

    const body = req.body;
    if (!body.url) {
        return res.redirect('/*')
    }

    let canCreate = false;

    const id = shortid();
    const url = body.url;

    const result = await URL.findOne({ redirectURL: url });

    if (!result || canCreate && result.redirectURL !== url) {
        await URL.create({
            shortID: id,
            redirectURL: url,
            history: 0,
            createdBy: req.sendUserdata._id,
        })
        canCreate = true;
    }

    const responseData = canCreate ? id : "Short Url Already Exisits :)";

    res.render('home', {
        response: responseData,
    })
}

const getInfo = async (req, res) => {

    const shortID = req.params.id;
    const result = await URL.findOne({ shortID });

    res.send({
        totalClicks: result.history,
        createdAt: result.createdAt,
        lastUpdate: result.updatedAt,
    })
}

const redirectURL = async (req, res) => {
    const id = req.params.id;

    const temp = await URL.findOne({ shortID: id });

    const currClicks = temp.history + 1;

    const updateDocument = await URL.findOneAndUpdate({ shortID: id }, {
        history: currClicks
    })

    if (updateDocument.redirectURL[0] === 'h')
        res.redirect(updateDocument.redirectURL);
    else
        res.render('home', {
            response: 'Your URL is "NOT VALID" at all make sure to paste complete ur starting with https://example.com'
        })
}

module.exports = {
    saveDatatoDB,
    getInfo,
    redirectURL,
}