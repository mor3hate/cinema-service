import { CSSProperties, InputHTMLAttributes } from 'react'
import { EditorProps } from 'react-draft-wysiwyg'
import { FieldError } from 'react-hook-form'

export interface IFieldProps {
	placeholder: string
	error?: FieldError | undefined
}

type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputProps {}

type TypeTextEditorPropsField = EditorProps & IFieldProps

export interface ITextEditor
	extends Omit<TypeTextEditorPropsField, 'editorState'> {
	onChange: (...event: any[]) => void
	value: string
}

export interface IUploadField {
	folder?: string
	value?: string
	onChange: (...event: any[]) => void
	placeholder: string
	error?: FieldError | undefined
	style?: CSSProperties
	isNoImage?: boolean
}
