import admin from "firebase-admin";
import {getApps} from "firebase-admin/app"

const seviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT_KEY as string);

if(!getApps().length)
{
admin.initializeApp({
    credential: admin.credential.cert(seviceAccount),
})
}

const adminDB=admin.firestore()

export default adminDB;
