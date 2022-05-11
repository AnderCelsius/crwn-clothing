import { firebase } from "../../utils/firebase/firebase.component";

const SignIn = () => {
  const { signInWithGooglePopup, createUserDocumentFromAuth } = firebase;

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In</button>
    </div>
  );
};

export default SignIn;
