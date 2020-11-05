import React from 'react';
import Classes from './LoginPage.module.css';

const LoginPageDesign = () => {
  return (
    <div className={Classes.Login}>
      <form className={Classes.Form}>
        <h1 className={Classes.Title}>Log In</h1>
        <div className={Classes.Wrapper}>
          <p className={Classes.Heading}>UserName</p>
          <input className={Classes.Inputdata} name="Username" type="Text" required />
          <p className={Classes.Heading}>Password</p>
          <input className={Classes.Inputdata} name="Password" type="Password" required />
        </div>
        <input className={Classes.Btn} type="button" value="Submit" />
        <div className={Classes.Accountwrap}>
          <p>Don't have an account?</p>
          <input className={Classes.SignupBtn} type="button" value="Sign Up Here" />
        </div>
      </form>

    </div>
  )
}

export default LoginPageDesign;