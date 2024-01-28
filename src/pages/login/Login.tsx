import { useNavigate } from 'react-router-dom'
import Form from '../../components/form/Form'
import { useAuthentication } from '../../context/AuthContext'
import './Login.css'
import Logo from '../../components/logo/Logo'

export default function Login() {
  const { signIn } = useAuthentication()

  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('/dashboard')
    signIn({
      name: 'John',
      surname: 'Doe',
      email: 'jonh.doe@example.com',
      password: '1234'
    })
  }

  return (
    <div className="login">
      <section className="login__aside">
        <img
          className="login__aside--image"
          src="https://anasaci.com/blog/creativos/big1031.jpg"
          alt="Website image"
        />
      </section>
      <section className="login__login-section">
        <div className="login__form">
          <Logo className="login__form--logo" />
          <Form onSubmit={handleSubmit}>
            <input placeholder="Email" type="text" name="email" />
            <input placeholder="Password" type="password" name="password" />
          </Form>
        </div>
      </section>
    </div>
  )
}
