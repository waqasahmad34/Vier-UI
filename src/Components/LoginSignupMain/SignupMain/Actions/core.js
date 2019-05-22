import { API_URL } from '../../../../Actions';
import { AsyncStorage } from 'react-native'

export function signup(signupdata) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            const postRequest = fetch(API_URL + '/user/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupdata)
            }).then((response) => {
                console.log('Response:', response);
                response.json().then(data => {
                    console.log("Data:", data)
                    if (data.message == 'Successfully registered!...') {
                        resolve({
                            status: true,
                            message: data.message
                        })
                    }
                    else {
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
