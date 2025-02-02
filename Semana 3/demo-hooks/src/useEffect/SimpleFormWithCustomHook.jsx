import { Message } from './Message'
import useForm from '../hooks/useForm'

export default function SimpleFormWithCustomHook() {

  const {username, password, email, onChangeValue, onReset}=useForm({
    username:"",
    email:"",
    password:""
  })



/*     useEffect(() => {
      console.log('Componente montado')
    }, [])

    useEffect(() => {
      console.log('Username changed')
    }, [username]) */




  return (
    <>
    <div className='container'>
        <h1>Simple Form</h1>
        <input type="text" name='username' placeholder='username' className='form-control my-2' value={username} onChange={onChangeValue}/>
        <input type="email" name='email' placeholder='email' className='form-control my-2' value={email} onChange={onChangeValue}/>
        <input type="password" name='password' placeholder='password' className='form-control my-2' value={password} onChange={onChangeValue}/>
        <button className='btn btn-primary' onClick={onReset}>Reset</button>
        {(username == 'chris') && <Message/>}

    </div>
    </>
  )
}
