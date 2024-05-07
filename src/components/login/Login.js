import * as React from 'react';
import {Platform, NativeModules, View, Alert} from 'react-native';
import {Dotenv} from 'react-native-dotenv';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import styles from './Login.scss';

// Load environment variables before configuration
// Dotenv.config();
// const {REACT_APP_WEB_CLIENT_ID, REACT_APP_ANDROID_CLIENT_ID} = process.env;

const REACT_APP_WEB_CLIENT_ID =
  '866589204945-kju434gckj8mhaep0gdiodlk5pearnnm.apps.googleusercontent.com';
const REACT_APP_ANDROID_CLIENT_ID =
  '866589204945-agc4lu44tud9gs67ab2tb91qgq6en0i1.apps.googleusercontent.com';

GoogleSignin.configure({
  webClientId: REACT_APP_WEB_CLIENT_ID,
  androidClientId: REACT_APP_ANDROID_CLIENT_ID,
  // Optional scopes for Google Drive API (add if needed)
  //   scopes: ['profile', 'email', 'https://www.googleapis.com/auth/drive.file'],
});

const statusCodes = {
  SIGN_IN_CANCELLED: 'SIGN_IN_CANCELLED',
  IN_PROGRESS: 'IN_PROGRESS',
  PLAY_SERVICES_NOT_AVAILABLE: 'PLAY_SERVICES_NOT_AVAILABLE',
};

const Login = () => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // Handle successful sign-in, e.g., navigate to the home screen
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // User cancelled the sign-in flow
        Alert.alert('Sign in cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Sign-in is in progress already
        Alert.alert('Sign in is in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Play services not available or outdated
        Alert.alert('Play services are not available');
      } else {
        // Some other error occurred
        Alert.alert('Error', error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Other login components */}
      <GoogleSigninButton
        style={styles.googleSigninButton}
        onPress={signIn} // Call the signIn function when the button is pressed
      />
    </View>
  );
};

export default Login;
