import { globalActions } from '@/store/rootActions'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(globalActions, dispatch), [dispatch])
}
