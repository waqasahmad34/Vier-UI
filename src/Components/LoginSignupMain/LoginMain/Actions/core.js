import * as types from './types';
import { API_URL } from '../../../../Actions';
import { AsyncStorage } from 'react-native'

export function login(signindata) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            const postRequest = fetch(API_URL + '/user/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signindata)
            }).then((response) => {
                console.log('Res: ', response);
                response.json().then(data => {
                    console.log("Data: ", data)
                    if (data.token) {
                        var access_token = JSON.stringify(data.token)
                        var userDetial = JSON.stringify(null)
                        let keys = [['accessToken', access_token], ['userDetail', userDetial]];
                        AsyncStorage.multiSet(keys, (err, accesstoken) => {
                            if (err) {

                            } else {

                            }
                        });
                        console.log(data.token)
                        dispatch(setSessionStatus(true))
                        dispatch(setSessionKey(data.token))
                        resolve({
                            status: true
                        })
                    } else {
                        resolve({
                            status: false,
                            error: data.message
                        })
                    }
                });
            }).catch(() => {
                resolve({
                    status: false
                })
            })
        })
    }
}

export function setSessionStatus(status) {
    return {
        type: types.SESSION_STATUS,
        sessionStatus: status
    }
}

export function setSessionKey(key) {
    return {
        type: types.SESSION_KEY,
        sessionKey: key
    }
}
