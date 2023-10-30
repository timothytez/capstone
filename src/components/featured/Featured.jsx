import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img 
                src='https://images.lucentcms.com/iyc_website/2020/12/5febac0df0ff1-yacht-charter-greece.jpg'
                alt=''
                className='featuredImg'
            />
            <div className='featuredTitles'>
                <h1>Greece</h1>
                <h2>40 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img 
                src='https://lawsreporting.com/wp-content/uploads/2020/12/credit-comcast-business.jpg'
                alt=''
                className='featuredImg'
            />
            <div className='featuredTitles'>
                <h1>Miami</h1>
                <h2>300 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img 
                src='https://www.tastingtable.com/img/gallery/20-best-restaurants-in-chicago-ranked/l-intro-1677774493.jpg'
                alt=''
                className='featuredImg'
            />
            <div className='featuredTitles'>
                <h1>Chicago</h1>
                <h2>150 properties</h2>
            </div>
        </div>

    </div>

  )
}

export default Featured