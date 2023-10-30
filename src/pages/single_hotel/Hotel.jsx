
import { FontAwesomeIcon, faLocationDot} from '@fortawesome/react-fontawesome'
import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'


const Hotel = () => {

  const photos = [
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/319762184.jpg?k=8b40cdad25c57cdae55354c5157aba6bfd006fd4193a93f7217e7aa50a2ddb4c&o=&hp=1'
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/319634640.jpg?k=07c0623004c61c4aa9c68afef89044839599801274093aff375ab142e243d3c8&o=&hp=1'
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/319762147.jpg?k=5235665b90c0e9b1627d2019c08c6cfafb23aa7193c804b61ba3792d11114a98&o=&hp=1'
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/319634544.jpg?k=dd9b017b91ba27e1e2700ecede56931cb1f9b412f2e868ded35bc5f6bc934647&o=&hp=1'
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/319634655.jpg?k=f39bb51705fe42d6801b8f81ca43f1a63af3db0d9f76f65f9ff7f0a9aec9a164&o=&hp=1'
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/319762153.jpg?k=70cb827ff6b5a41e65b41f4b4fe866c81a60bd674fa6a578a7fb9f5c4289e14e&o=&hp=1'
    },
  ]
  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className='hotelContainer'>
        <div className='hotelWrapper'>
          <button className='bookNow'>Reserve or Book Now</button>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className='hotelAddress'>
            <span>Sesame St 123 La La Land</span>
          </div>
          <span className='hotelDistance'>
            Excellent location. 5 miles from Downtown
          </span>
          <span className='hotelPriceHighlight'>
            Book 3 nights get 4th night for free!
          </span>
          <div className='hotelImages'>
            {photos.map(photo=>(
              <div className='hotelImgWrapper'>
                <img src={photo.src} alt='' className='hotelImg'/>
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h1 className='hotelTitle'>Stay in the center of Miami</h1>
              <p className='hotelDesc'>
                Details will be added later... but the room is awesome...
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Perfect for any nights stay</h1>
              <span>
                Located downtown Miami. See the night life from above!
              </span>
              <h2>
                <b>$400</b> (7 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel