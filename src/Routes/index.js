import Login from '../Components/LoginSignupMain/LoginMain/Login/Login'
import HomeCopy from '../Components/HomeMain/HomeCopy'
import Signup from '../Components/LoginSignupMain/SignupMain/Signup/Signup'
import LoginSignup from '../Components/LoginSignupMain/LoginSignup'

import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';

function conditionalRendering(signedIn) {
    if (signedIn) {
        return "HomeCopy"
    } else {
        return "LoginSignup"
    }
}

export const createRootNavigator = (signedIn = false) => {
    var appcontainer = createSwitchNavigator(
        {
            Login: {
                screen: Login
            },
            HomeCopy: {
                screen: HomeCopy
            },
            Signup:{
                screen: Signup
            },
            LoginSignup:{
                screen: LoginSignup
            }
        },
        {
            initialRouteName: conditionalRendering(signedIn)
        }
    );

    return createAppContainer(appcontainer)
};
