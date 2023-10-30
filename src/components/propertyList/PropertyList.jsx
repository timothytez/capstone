import './propertyList.css'

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className='pListItem'>
            <img className='pListImg' src='https://media.cnn.com/api/v1/images/stellar/prod/190903131748-greek-luxury-seaside-hotels-grecotel-mykonos-blu-infinity-pool-1.jpg?q=w_1600,h_900,x_0,y_0,c_fill'></img>
        <div className='pListTitles'>
            <h1>Hotels</h1>
            <h2>40 hotels</h2>
        </div>
        </div>
        <div className='pListItem'>
            <img className='pListImg'src='https://media.timeout.com/images/105885914/750/422/image.jpg'></img>
        <div className='pListTitles'>
            <h1>Air BNB</h1>
            <h2>300 hotels</h2>
        </div>
        </div>
        <div className='pListItem'>
            <img className='pListImg'src='https://www.planetware.com/wpimages/2022/09/best-luxury-all-inclusive-resorts-world-conrad-maldives-rangali-island-the-maldives.jpg'></img>
        <div className='pListTitles'>
            <h1>Resorts</h1>
            <h2>150 hotels</h2>
        </div>
        </div>
        <div className='pListItem'>
            <img className='pListImg'src='https://images.rosewoodhotels.com/is/image/rwhg/three-bedroom-villa-plunge-pool'></img>
        <div className='pListTitles'>
            <h1>villas</h1>
            <h2>150 hotels</h2>
        </div>
        </div>
        <div className='pListItem'>
            <img className='pListImg'src='https://cdn.vox-cdn.com/uploads/chorus_asset/file/21396971/ows_151154278236473.jpg'></img>
        <div className='pListTitles'>
            <h1>cabins</h1>
            <h2>150 hotels</h2>
        </div>
        </div>

    </div>
  )
}

export default PropertyList