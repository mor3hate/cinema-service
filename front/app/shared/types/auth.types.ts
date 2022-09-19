import { NextPage } from 'next'
import { PropsWithChildren } from 'react'

export type AuthRoles = {
	isOnlyAdmin?: boolean
	isOnlyUser?: boolean
}

export type NextPageAuth<P = {}> = NextPage<P> & AuthRoles

export type TypeComponentAuthFields = {
	Component: AuthRoles
} & PropsWithChildren
