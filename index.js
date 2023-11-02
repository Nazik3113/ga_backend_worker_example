import axios from "axios";
import os from "os";

const MEASUREMENT_ID = "G-3G18GZHRC0";
const API_SECRET = "_CW2p3G4TRezY_diY81mkQ";

setInterval(() => {
    axios({
        method: 'post',
        url: `https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`,
        data: {
            client_id: "XXXXXXXXXX.YYYYYYYYYY",
            events: [
                {
                    name: "mem_check",
                    params: {
                        freemem: os.freemem(),
                        totalmem: os.totalmem(),
                    }
                }
            ]
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Response sent.");
    }).catch(err => {
        console.log("Response error: " + err);
    });
}, 200);