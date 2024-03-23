// LoginPage.jsx
import Header from '../components/Header'
import ImageContainer from '../ImageContainer'
import Card from '../components/Card'
import Text from '../components/Text'
// import InputField from './InputField';
import Button from '../components/Button'
import './LoginPage.css'
import './EmailVerification.css'

import BGIMG from '../assets/PPF15.png'
import Logo from '../assets/logo.png'
import Plane from '../assets/line-plane-icon.png'
const EmailVerifPage = () => {
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
				<img
					src={Logo}
					alt='Logo'
					className='image-logo-emailverif'
				/>
				<Text className='text-login-emailverif' text='Email Verification' />
				<Text
					className='text-signin-access'
					text='Please check your email for a verification link.'
				/>

				<Button className='button-resendemail' label='Resend Email' />
				<img
					src={Plane}
					alt='Fun Icon'
					className='image-below-button'
				/>
			</Card>
		</div>
	)
}

export default EmailVerifPage
