import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className='mailTitle'>Save time, Save money!</h1>
        <span className='mailDesc'>Sign up and you will get the best deals</span>
        <div className='mailInputContainer'>
            <input type='text'placeholder='Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList