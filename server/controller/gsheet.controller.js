import {response} from "../utils/responseHandler";
const {google} = require('googleapis');
import {getTokendAuth, oauthConnect} from "../utils/auth/oauth.utils";

const deduplicate= async (req, res) => {
    const { spreedSheetId,token} = req.body
    try {
        const oAuth2Client = await getTokendAuth(token)
        const rowsA = await listData(oAuth2Client,spreedSheetId,'A');
        const rowsB = await listData(oAuth2Client,spreedSheetId,'B');
        response(res, 200, {rowA: rowsA, rowB : rowsB})
    } catch (err) {
        console.log(err)
        response(res, 500, {message: "error"})
    }
}

const getListSheets = async (req, res) =>{
    const {token} = req.params
    console.log(req.params)
    try {
        /*const oAuth2Client = await getTokendAuth(token)
        const drive = google.drive({version: 'v3', auth});
        drive.files.list({
            pageSize: 10,
            fields: 'nextPageToken, files(id, name)',
        }, (err, res) => {
            if (err) return console.log('The API returned an error: ' + err);
            const files = res.data.files;
            if (files.length) {
                console.log('Files:');
                files.map((file) => {
                    console.log(`${file.name} (${file.id})`);
                });
            } else {
                console.log('No files found.');
            }
        });*/
        response(res, 200, {message : "okey"})
    } catch (err) {
        console.log(err)
        response(res, 500, {message: "error"})
    }
}



const listData = async(auth,spreedSheetId,tab)=> {
    const sheets = google.sheets({version: 'v4', auth});
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: spreedSheetId,
        range: tab,
    });
    if(response.status !== 200) throw `Error`
    return response.data.values
}

export {deduplicate,getListSheets}