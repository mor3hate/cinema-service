import {useAuth} from '@/hooks/useAuth'
import {FC, useState} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {IAuthInput} from './auth.interface'
import {useAuthRedirect} from './useAuthRedirect'

import styles from './Auth.module.scss'
import Meta from '@/utils/meta/Meta'
import ButtonAuth from '@/components/ui/button/ButtonAuth'
import AuthFields from './AuthFields'
import {useActions} from '@/hooks/useActions'

const Auth: FC = () => {
    useAuthRedirect()

    const {isLoading} = useAuth()

    const [type, setType] = useState<'login' | 'register'>('login')

    const {
        register: registerInput,
        handleSubmit,
        formState,
        reset,
    } = useForm<IAuthInput>({
        mode: 'onChange',
    })

    const {register, login} = useActions()

    const onSubmit: SubmitHandler<IAuthInput> = data => {
        if (type === 'login') login(data)
        else if (type === 'register') register(data)

        reset()
    }

    return (
        <Meta title='Auth'>
            <section className={styles.wrapper}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Authorization</h1>

                    <AuthFields
                        formState={formState}
                        register={registerInput}
                        isPasswordRequired
                    />

                    <div className={styles.buttons_wrapper}>
                        <ButtonAuth
                            onClick={() => setType('login')}
                            disabled={isLoading}
                            text='Login'
                        />
                        <ButtonAuth
                            onClick={() => setType('register')}
                            disabled={isLoading}
                            text='Register'
                        />
                    </div>
                </form>
            </section>
        </Meta>
    )
}




export default Auth
