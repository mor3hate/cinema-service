import { FC } from 'react'
import ReduxToastr from 'react-redux-toastr'

const ReduxToast: FC = () => {
	return (
		<ReduxToastr
			newestOnTop={false}
			preventDuplicates
			progressBar
			timeOut={4000}
			transitionIn='bounceIn'
			transitionOut='bounceOut'
			closeOnToastrClick
			position='top-center'
		/>
	)
}

export default ReduxToast
