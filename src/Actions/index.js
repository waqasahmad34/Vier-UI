import * as LoginActions from '../Components/LoginSignupMain/LoginMain/Actions/core';
import * as SignupActions from '../Components/LoginSignupMain/SignupMain/Actions/core';

export const ActionCreators = Object.assign({}, LoginActions, SignupActions );
export const API_URL = 'http://140.82.50.108:3000/api';