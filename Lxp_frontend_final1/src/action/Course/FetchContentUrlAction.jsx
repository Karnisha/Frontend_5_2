export const FETCH_CONTENT_URL_REQUEST ='FETCH_CONTENT_URL_REQUEST';
export const FETCH_CONTENT_URL_SUCCESS = 'FETCH_CONTENT_URL_SUCCESS';
export const FETCH_CONTENT_URL_FAILURE = 'FETCH_CONTENT_URL_FAILURE';

export const fetchContentUrlRequest=(formData)=>({
    type: FETCH_CONTENT_URL_REQUEST,
    payload:formData
});

export const fetchContentUrlSuccess=(material)=>({
    type: FETCH_CONTENT_URL_SUCCESS,
    payload : material
});

export const fetchContentUrlFailure = (error)=>({
    type: FETCH_CONTENT_URL_FAILURE,
    payload : error
});

