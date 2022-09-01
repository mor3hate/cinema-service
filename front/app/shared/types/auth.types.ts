import { NextPage } from 'next'
import { PropsWithChildren } from 'react'

export type AuthRoles = {
	isAdmin?: boolean
	isUser?: boolean
}

export type NextPageAuth<P = {}> = NextPage<P> & AuthRoles

export type TypeComponentAuthFields = {
	Component: AuthRoles
} & PropsWithChildren
