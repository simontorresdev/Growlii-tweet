import { useRouter } from 'next/router'
import styles from './Styles.module.css'
import { LoginForm } from '../LoginForm'
import { useAuth } from '../../context/authContext'
import Link from 'next/link'

export const LoginComp = () => {
  const router = useRouter()
  const { user, loginWithEmailPassword, signinWithGoogle, siginWithFacebook, singinWithGitBub } = useAuth()

  user && router.push('/')

  return (
    <div className={styles.containerLogin}>
      <img src='/Logo.png' />
      {user === null &&
        <LoginForm
          handleClickGitHub={singinWithGitBub}
          handleClickGoogle={signinWithGoogle}
          handleClickFacebook={siginWithFacebook}
          loginWithEmailPassword={loginWithEmailPassword}
        />}
      <Link href='/signup'><a>¿No tienes una cuenta? Regístrate</a></Link>
    </div>
  )
}
