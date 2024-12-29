const URL = 
{
    offline: {
        path: 'http://127.0.0.1:8181/', 
        status: true
    },
    online: {
        // path: 'https://www.scentsbyhoppey.com/', 
        path: 'https://api.scentsbyhoppey.com/',
        status: false
    },
    connectTo: 'offline'
}

const DESTINATION = (URL.connectTo === 'offline') ? URL.offline.path : URL.online.path

export const BASE_URL = `${DESTINATION}api/`;

export const USAGE_PATH = 
{
    PRODUCT_IMAGE : `${DESTINATION}transaction/`,
    PRODUCT_VIDEO : `${DESTINATION}video/`,
    PROFILE_PICTURE : `${DESTINATION}image/`,
}



