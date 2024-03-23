// LoginPage.jsx
import Header from '../components/Header'
import ImageContainer from '../ImageContainer'
import Card from '../components/Card'
import Text from '../components/Text'
import InputField from '../components/InputField'
import Button from '../components/Button'
import './LoginPage.css'
import './ForgotPassword.css'
import BgImage from '../assets/PPF15.png'
import LogoImg from '../assets/logo.png'
import CardForgotPassword from '../CardForgotPassword'

const ForgotPasswordPage = () => {
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
			<ImageContainer image={BgImage} />
			<CardForgotPassword
				id='card-container'
				style={{
					width: '30%',
					paddingTop: '20px',
				}}
			>
				<div
					className='logo-container'
					style={{
						display: 'block',
						position: 'relative',
						justifyContent: 'center',
					}}
				>
					<img src={LogoImg} alt='Logo' className='image-logo' />
				</div>
				<Text
					className='text-forgotpassword'
					text='Forgot your Password?'
				/>
				<div style={{ width: '90%' }}>
					<InputField
						className='input-email'
						placeholder='email@email.com'
						label='Email Address'
						labelClass='input-label'
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}
					/>
					<Button
						className='button-sendtempcode'
						label='Send Verification Code'
					/>
				</div>
				<div style={{ width: '90%' }}>
					<InputField
						className='input-VerifCode'
						placeholder=''
						label='Verification Code'
						labelClass='input-label'
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}
					/>
					{/* <Text className="text-password-label" text="Enter your pilot password" /> */}
					<InputField
						className='input-password'
						placeholder='********'
						label='New Password'
						labelClass='input-label'
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}
					/>
					<InputField
						className='input-password'
						placeholder='********'
						label='Confirm New Password'
						labelClass='input-label'
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}
					/>
					<Button
						className='button-submitNewPassword'
						label='Submit'
					/>
				</div>
			</CardForgotPassword>
		</div>
	)
}

export default ForgotPasswordPage
