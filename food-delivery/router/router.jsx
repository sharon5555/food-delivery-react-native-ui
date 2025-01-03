import SignInScreen from "../screens/signin";
import SignUpScreen from "../screens/signup";
import ForgotPwdScreen from "../screens/forgotpwd";
import { createStackNavigator } from 'react-navigation-stack';

const AuthStack = createStackNavigator({
    signin: {
        screen: SignInScreen,
    },
    signup: {
        screen: SignUpScreen,
    },
    forgotpwd: {
        screen: ForgotPwdScreen,
    },
});

const router = createAppContainer(AuthStack);

export default router;