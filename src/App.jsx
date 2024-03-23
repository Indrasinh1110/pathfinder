import { useState } from 'react'
import LoginPage from './logins/LoginPage' // Import the LoginPage component
import EmailVerifPage from './logins/EmailVerification'
import ForgotPasswordPage from './logins/ForgotPassword'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			{/* Include the LoginPage here */}
			{/* <LoginPage /> */}
			{/* <EmailVerifPage /> */}
			<ForgotPasswordPage />
		</>
	)
}

export default App
