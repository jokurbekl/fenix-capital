import 'dotenv/config'
import { GoogleSpreadsheet, type GoogleSpreadsheetWorksheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

type FormRequest = {
    "user": {
        "name": string
        "email": string,
        "phone": string
    },
    "range": string
}

if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY)
    throw new Error("Please provide  GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY in .env file")
// Initialize auth - see https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication
const serviceAccountAuth = new JWT({
    // env var values here are copied from service account credentials generated by google
    // see "Authentication" section in docs for more info
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const doc = new GoogleSpreadsheet('1n81rZOaIsfCYWZcvur52K54_zign7Vxu2_EKXLQWbuY', serviceAccountAuth);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let sheet: GoogleSpreadsheetWorksheet;

void (async () => {
    await doc.loadInfo();
    if (!doc.sheetsByIndex[0]) throw new Error("No sheets found");
    sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    // await setHeaderRow(sheet);
    // const rows = await getRows(sheet);
    // parseRowsDataToCache(users, rows);
})()


export async function POST(request: Request) {
    const res = await request.json() as FormRequest;

    console.log(res)

    let range = "";
    switch (res.range) {
        case "10":
            range = "Less than $10K"
            break;
        case "1025":
            range = "$10K to $25K"
            break;
        case "2550":
            range = "$25K to $50K"
            break;
        case "50100":
            range = "$50K to $100K"
            break;
        case "100500":
            range = "$100K to $500K"
            break;
        case "5001000":
            range = "$500K to $1M"
            break;
        case "1000":
            range = "$1M+"
            break;
        default:
            range = "Unknown"
            break;

    }

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    if (!sheet) throw new Error("Sheet not found")
    await sheet.addRow({
        "Name": res.user.name,
        "Email": res.user.email,
        "Phone": res.user.phone,
        "Range": range,
        "Created At": new Date().toISOString(),
    });

    console.log(range)

    // add a new row to google sheets



    return Response.json({ res })
}