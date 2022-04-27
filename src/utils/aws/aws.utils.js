
export async function authGet(url) {
    const hash = getHash();
    const response = await makeRequest(url, hash, "GET");

    return response;
}

// const modifyUrlBasedOnSettings = url => {
//     if (process.env.NODE_ENV === "development" && USE_LOCAL === "true") {
//         return url;
//     } else {
//         return url.replace(LOCALHOST_ADDR, API_GATEWAY_ADDR);
//     }
// };

const getHash = () => {
    const hash = getSavedHashFromLocalStorage();

    if (hash) {
        return hash;
    } else {
        return '';
    }
};

const makeRequest = async (url, hash, method, body) => {
    try {
        const req = {
            method,
            headers: {
                "Authorization": hash
            }
        };

        if (body) {
            req.body = JSON.stringify(body);
        }

        const res = await fetch(url, req);
        const response = await res.json();
        return response;
    } catch (e) {
        console.error(e);
    }
};

// export const saveHashToLocalStorage = hash => {
//     const obj = {
//         hash: hash,
//         expiresOn: new Date(new Date().getTime()+(7*24*3600*1000)) // 7 days from now
//     };
//
//     window.localStorage.setItem(localStorageKeyName, JSON.stringify(obj));
// };

export const getSavedHashFromLocalStorage = () => {
    let hash;
    // const dataFromLocalStorage = window.localStorage.getItem(localStorageKeyName);
    //
    // if(dataFromLocalStorage) {
    //     const obj = JSON.parse(dataFromLocalStorage);
    //
    //     if(new Date() < new Date(obj.expiresOn)) {
    //         hash = obj.hash;
    //     } else {
    //         console.error("Hash is no longer valid");
    //     }
    // }

    return hash;
};

// export const clearSavedHash = () => {
//     window.localStorage.removeItem(localStorageKeyName);
// };