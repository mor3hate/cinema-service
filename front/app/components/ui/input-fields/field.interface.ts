import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IFieldProps {
	placeholder: string
	error?: FieldError | undefined
}

type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputProps {}
