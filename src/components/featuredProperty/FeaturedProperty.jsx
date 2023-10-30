import './featuredProperty.css'

const FeaturedProperty = () => {
return (
<div className='imgContainer'>
    <div className='fp'>
        <div className='fpItem'>
            <img 
                src='https://bookyourluxuryhotelsuite.com/wp-content/uploads/2018/11/Sydney_Suite_Bedroom_Park_Hyatt_Sydney-1024x576.jpg'
                alt=''
                className='fpImg'
            />
            <span className='fpName'>Hotel Name</span>
            <span className='fpCity'>Greece</span>
            <span className='fpPrice'>Starting from $80</span>    
            <div className='fpRating'>
                <button>9.2</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
        
        <div className='fp'>
            <div className='fpItem'>
                <img 
                    src='https://bookyourluxuryhotelsuite.com/wp-content/uploads/2018/11/Sydney_Suite_Bedroom_Park_Hyatt_Sydney-1024x576.jpg'
                    alt=''
                    className='fpImg'
                />
                <span className='fpName'>Hotel Name</span>
                <span className='fpCity'>Greece</span>
                <span className='fpPrice'>Starting from $80</span>    
                <div className='fpRating'>
                    <button>9.2</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>

        <div className='fp'>
            <div className='fpItem'>
                <img 
                    src='https://bookyourluxuryhotelsuite.com/wp-content/uploads/2018/11/Sydney_Suite_Bedroom_Park_Hyatt_Sydney-1024x576.jpg'
                    alt=''
                    className='fpImg'
                />
                <span className='fpName'>Hotel Name</span>
                <span className='fpCity'>Greece</span>
                <span className='fpPrice'>Starting from $80</span>    
                <div className='fpRating'>
                    <button>9.2</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    </div>

  );
};

export default FeaturedProperty