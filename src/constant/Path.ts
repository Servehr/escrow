const URL = 
{
    offline: {
        path: 'http://127.0.0.1:8181/', 
        status: true
    },
    online: {
        path: 'https://www.scentsbyhoppey.com/', 
        status: false
    },
    connectTo: 'online'
}

const DESTINATION = (URL.connectTo === 'online') ? URL.offline.path : URL.online.path

export const BASE_URL = `${DESTINATION}api/`;

export const USAGE_PATH = 
{
    PRODUCT_IMAGE : `${DESTINATION}transaction/`,
    PRODUCT_VIDEO : `${DESTINATION}video/`,
}



