import "./style.min.css";

import { Button1 } from "./utils/buttons";
import { Input1 } from "./utils/inputs";

const SignUp = () => {
  const showSignupForm = () => {
    return (
      <form>
        <Input1 name="username" placeholder="enter username..." />
        <Input1 name="email" type="email" placeholder="enter email..." />
        <Input1
          name="password"
          type="password"
          placeholder="enter password..."
        />
        <Input1
          name="confirmpassword"
          type="password"
          placeholder="confirm password..."
        />
        <Button1 text="submit" />
      </form>
    );
  };

  return <div className="signup">{showSignupForm()}</div>;
};

export default SignUp;
