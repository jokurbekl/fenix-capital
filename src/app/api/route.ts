import "dotenv/config";
import {
  GoogleSpreadsheet,
  type GoogleSpreadsheetWorksheet,
} from "google-spreadsheet";
import { JWT } from "google-auth-library";
import axios from "axios";
import { NextRequest } from "next/server";
import { info } from "console";

type FormRequest = {
  user: {
    name: string;
    email: string;
    phone: {
      countryCode: string | number;
      areaCode: string | number;
      phoneNumber: string | number;
      // isoCode: "us",
      // valid: function valid(strict)
    };
  };
  range: string;
};

if (
  !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
  !process.env.GOOGLE_PRIVATE_KEY
)
  throw new Error(
    "Please provide  GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY in .env file",
  );
// Initialize auth - see https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication
const serviceAccountAuth = new JWT({
  // env var values here are copied from service account credentials generated by google
  // see "Authentication" section in docs for more info
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const doc = new GoogleSpreadsheet(
  "1n81rZOaIsfCYWZcvur52K54_zign7Vxu2_EKXLQWbuY",
  serviceAccountAuth,
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let sheet: GoogleSpreadsheetWorksheet;

void (async () => {
  await doc.loadInfo();
  if (!doc.sheetsByIndex[0]) throw new Error("No sheets found");
  sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  // await setHeaderRow(sheet);
  // const rows = await getRows(sheet);
  // parseRowsDataToCache(users, rows);
})();

const getUniqueID = async ({
  email,
  name,
  phone,
}: {
  email: string;
  name: string;
  phone: string;
}) => {
  const payload = {
    email,
    firstName: name.split(" ")[0],
    lastName: name.split(" ")[1] ?? "",
    phone,
  };
  console.log(payload);

  const request = await axios.post<string>(
    `${process.env.UNIQUE_ID_API}`,
    payload,
  );
  return request.data;
};

type CrmUserData = {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  country: string;
  comment: string;
  ip: string;
};

interface CrmUserDataRequestForm extends CrmUserData {
  fullName: string;
  utm_campaign: string;
  utm_content: string;

  info: string;
  language: string;
}

type CrmUserDataRequestBody = {
  leads: CrmUserDataRequestForm[];
};

const sendDataToCrm = async (userData: CrmUserData) => {
  const { firstName, lastName } = userData;
  const requestBody: CrmUserDataRequestBody = {
    leads: [
      {
        ...userData,
        fullName: `${firstName} ${lastName}`,
        utm_campaign: "FiNex Capital",
        utm_content: "fi-nexcapital.com",
        info: "FiNex",
        language: "fr",
      },
    ],
  };
  console.log(requestBody);
  try {
    const response = await axios.post(
      "https://api.apexcfd.com/affiliates/leads",
      requestBody,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJhZmZpbGlhdGVfaWQiOjMsImNyZWF0ZWQiOjE3MjUzODkyODIsImV4cGlyYXRpb24iOjAsImJyYW5kIjoiYXBleGNmZCIsInJpZ2h0cyI6WyJhZmZpbGlhdGUiXX0.N3BObsqbIo_eWtD5F5Jj0Ii2yJZ5LgtQ7aPuoCZQmSk",
        },
      },
    );

    const data: unknown = response.data;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export async function POST(request: NextRequest) {
  const res = (await request.json()) as FormRequest;
  console.log(res);

  let range = "";
  switch (res.range) {
    case "10":
      range = "Less than $10K";
      break;
    case "1025":
      range = "$10K to $25K";
      break;
    case "2550":
      range = "$25K to $50K";
      break;
    case "50100":
      range = "$50K to $100K";
      break;
    case "100500":
      range = "$100K to $500K";
      break;
    case "5001000":
      range = "$500K to $1M";
      break;
    case "1000":
      range = "$1M+";
      break;
    default:
      range = "Unknown";
      break;
  }

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  if (!sheet) throw new Error("Sheet not found");

  const phoneNumber = `${res.user.phone.countryCode}${res.user.phone.areaCode}${res.user.phone.phoneNumber}`;
  await sheet.addRow({
    Name: res.user.name,
    Email: res.user.email,
    Phone: phoneNumber,
    Range: range,
    "Created At": new Date().toISOString(),
    "Unique ID": await getUniqueID({
      email: res.user.email,
      name: res.user.name,
      phone: phoneNumber,
    }),
  });

  sendDataToCrm({
    comment: range,
    email: res.user.email,
    firstName: res.user.name.split(" ")[0] ?? "",
    lastName: res.user.name.split(" ")[1] ?? "",
    phone: phoneNumber,
    country: request.geo?.country ?? "FR",
    ip: request.ip ?? "145.226.33.121",
  }).catch((err) => console.log(err));

  console.log(range);

  // add a new row to google sheets

  return Response.json({ res });
}
