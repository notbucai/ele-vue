import axios from "axios";
axios.defaults.withCredentials=true;
export default function ({ url, data = {}, type = "GET" }) {
    // let promise;
    // if (type === "GET") {
    //     let dataStr = "";

    //     Object.keys(data).forEach(key => {
    //         dataStr += key + "=" + data[key] + "&"
    //     });

    //     if (dataStr) {
    //         dataStr = dataStr.substring(0, dataStr.length - 1);
    //         url += "?" + dataStr;
    //     }
    //     console.log(url);

    //     promise = axios.get(url);
    // } else if (type === "POST") {
    //     promise = axios.post(url, data);
    // }
    // return promise;
    return new Promise((resolve, reject) => {
        let promise;
        if (type === "GET") {
            let dataStr = "";

            Object.keys(data).forEach(key => {
                dataStr += key + "=" + data[key] + "&"
            });

            if (dataStr) {
                dataStr = dataStr.substring(0, dataStr.length - 1);
                url += "?" + dataStr;
            }

            promise = axios.get(url);
        } else if (type === "POST") {
            promise = axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });
        }

        promise.then((response) => {
            resolve(response.data)
        }).catch((error) => {
            reject(error);
        });
    });
}