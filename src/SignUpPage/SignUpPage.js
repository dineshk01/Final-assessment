import React from 'react';
import Classes from './SignUpPage.module.css';

const SignUpPageDesign = () => {
    return (
        <div className={Classes.Login}>
            <form className={Classes.Form}>
                <h1 className={Classes.Title}>Sign Up</h1>
                <div className={Classes.Wrapper}>

                    <p className={Classes.Heading}>UserName</p>
                    <input className={Classes.Inputdata} name="Username" type="Text" required />
                    <p className={Classes.Heading}>Email</p>
                    <input className={Classes.Inputdata} name="Email</p" type="Text" required />
                    <p className={Classes.Heading}>Password</p>
                    <input className={Classes.Inputdata} name="Password" type="Password" required />
                    <p className={Classes.Heading}>Re-Enter Password</p>
                    <input className={Classes.Inputdata} name="Password" type="Password" required />

                </div>
                <input className={Classes.Btn} type="button" value="Submit" />
                <div className={Classes.Accountwrap}>
                    <p>Already have a Account?</p>
                    <input className={Classes.SignupBtn} type="button" value="Log In Here" />
                </div>
            </form>

        </div>
    )
}

export default SignUpPageDesign;