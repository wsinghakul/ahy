import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { AuthenticationCon} from'./authentication.styles.jsx'
const Authentication = () => {
  return (
    <AuthenticationCon>
      <SignInForm />
      <SignUpForm />
    </AuthenticationCon>
  );
};

export default Authentication;
