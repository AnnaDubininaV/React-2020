import SignUpForm from '../../components/sign-up-fofm/sign-up-form.component';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <div>Sign-in page</div>
      <button onClick={logGoogleUser}> Sign In with Google Popup</button>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
