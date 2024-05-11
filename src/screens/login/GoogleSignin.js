import React, {useEffect} from 'react';
import {Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '457290270580-l7ma90n9a6492j347lgkl6fo04jld5u7.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  try {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken, user} = await GoogleSignin.signIn();
    console.log('User information: ', user); // Log user separately
    console.log('User Identifier: ', idToken);
    Alert.alert('Successfully signed in');

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.log(error);
    setSignInError('Something went wrong'); // Set sign-in error message
  }
}

const GoogleSignInButton = () => (
  <Button
    title="Google Sign-In"
    onPress={() =>
      onGoogleButtonPress().then(() => console.log('Signed in with Google!'))
    }
  />
);

export default GoogleSignInButton;
