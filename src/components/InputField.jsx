// InputField.jsx
import React from 'react'
import Text from './Text'

const InputField = ({
	className,
	placeholder,
	label,
	labelClass,
	icon,
	style,
}) => {
	const labelClasses = labelClass ? labelClass : className + 'label'
	return (
		<div style={style}>
			<Text className={labelClasses} text={label}></Text>
			<input className={className} placeholder={placeholder} />
		</div>
	)
}

export default InputField
