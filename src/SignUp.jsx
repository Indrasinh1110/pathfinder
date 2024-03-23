// LoginPage.jsx
import React from 'react';
import Header from './Header';
import ImageContainer from './ImageContainer';
import Card from './Card';
import Text from './Text';
import InputField from './InputField';
import Button from './Button';
import './LoginPage.css';
import './ForgotPassword.css';

const SignUpPage = () => {
  return (
    <div className="login-page-container">
      <Header
        leftTexts={["Control Panel", "Application Suite", "Companies", "Resume", "Interview Prep", "Logbook"]} // Add all the texts you need here
        rightButtonText="Download Plug-in"
      />
      <ImageContainer image="PPF15.png" />
      <CardSignUp>
        <img src="logo.png" alt="Logo" className="image-logo" />
        <Text className="text-forgotpassword" text="Forgot your Password?" />
        {/* <Text className="text-email-label" text="Enter your pilot email" /> */}
        <InputField className="input-email-forgot" placeholder="email@email.com" label="Email Address"  />
        <Button className="button-sendtempcode" label="Send Temporary Verification Code" />
        <InputField className="input-VerifCode" placeholder="*******" label="Enter Verification Code"  />
        {/* <Text className="text-password-label" text="Enter your pilot password" /> */}
        <InputField className="input-password-forgot" placeholder="***********************" label="New Password" />
        <InputField className="input-password-forgot" placeholder="***********************" label="Confirm New Password" />
        <Button className="button-submitNewPassword" label="Submit" />
      </CardSignUp>
    </div>
  );
};

export default SignUpPage;
