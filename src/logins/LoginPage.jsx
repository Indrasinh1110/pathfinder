// LoginPage.jsx
import React from 'react'
import Header from '../components/Header'
import ImageContainer from '../ImageContainer'
import Card from '../components/Card'
import Text from '../components/Text'
import InputField from '../components/InputField'
import Button from '../components/Button'
import './LoginPage.css'

import Plane from  '../assets/line-plane-icon.png';
import BGIMG from '../assets/PPF15.png'
import Logo from '../assets/logo.png'

const LoginPage = () => {
	return (
		<div className='login-page-container'>
			<Header
				leftTexts={[
					'Control Panel',
					'Application Suite',
					'Companies',
					'Resume',
					'Interview Prep',
					'Logbook',
				]} // Add all the texts you need here
				rightButtonText='Download Plug-in'
			/>
			<ImageContainer image={BGIMG} />
			<Card>
			<img src={Logo} alt='Logo' className='image-logo' />
				<Text className='text-login' text='Log in' />
				<Text
					className='text-signin-access'
					text='Sign in to access your account'
				/>
				{/* <Text className="text-email-label" text="Enter your pilot email" /> */}
				<InputField
					className='input-email'
					placeholder='email@email.com'
					label='Enter your pilot email'
				/>
				{/* <Text className="text-password-label" text="Enter your pilot password" /> */}
				<InputField
					className='input-password'
					placeholder='***********************'
					label='Enter your pilot password'
				/>

				<div className='credentials-container'>
					<div className='checkbox-container'>
						<input
							type='checkbox'
							id='remember-me'
							className='remember-me-checkbox'
						/>
						<label
							htmlFor='remember-me'
							className='remember-me-label'
						>
							Remember me
						</label>
					</div>
					<a href='/forgot-password' className='forgot-password-link'>
						Forgot your password?
					</a>
				</div>

				<Button className='button-signin' label='Sign in' />
				<img
					src={Plane}
					alt='Fun Icon'
					className='image-below-button'
				/>
				<Text className='text-signin-access' text='Welcome Back!' />
			</Card>
		</div>
	)
}

export default LoginPage
