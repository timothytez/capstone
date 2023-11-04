import {
    faHotel,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
    faHiking,
  } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import './header.css';
  import { DateRangePicker } from 'react-date-range';
  import { useState } from 'react';
  import 'react-date-range/dist/styles.css';
  import 'react-date-range/dist/theme/default.css';
  import { format } from 'date-fns';
  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  import{db} from '../../firebase';
  
  
  
  const Header = ({type}) => {
    const [destination, setDestination] = useState('');
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      },
    ]);
    const [openOption, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      room: 1,
    });

    const navigate = useNavigate()
  
    // if i run this next function it will increase or decrease for adults.
    const handleOption = (name, operation) => {
      setOptions((prev) => {
        return {
          ...prev,
          [name]:operation === 'increase' ? options[name] + 1 : options[name] - 1,
        };
      });
    };

    const handleSearch = async()=>{
      navigate('/hotels', {state:{destination,date,options}})
    }
    try {
      // Assuming 'options' and 'date' are the search parameters
      const searchRef = db.collection('searches'); // Reference to a 'searches' collection
  
      // Create a new document with the search parameters
       searchRef.add({
        options,
        date,
        timestamp: new Date() // You can include a timestamp to track when the search was made
      });
  
      // Optionally, you can add a success message or perform other actions upon successful upload.
      console.log('Search data saved successfully!');
    } catch (error) {
      // Handle the error if the upload fails
      console.error('Error saving search data:', error);
    }

    return (
      <div className='header'>
        <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
          <div className='headerList'>
            <div className='headerListItem active '>
              <FontAwesomeIcon icon={faHotel} />
              <span>Stays</span>
            </div>
            <div className='headerListItem'>
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className='headerListItem'>
              <FontAwesomeIcon icon={faHiking} />
              <span>Attractions</span>
            </div>
            <div className='headerListItem'>
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
            <div className='headerListItem'>
              <FontAwesomeIcon icon={faCar} />
              <span>Car Rental</span>
            </div>
          </div>
          { type !== "list" &&
            <>
            <h1 className='headerTitle'>Come book your rooms with BookingCrooms</h1>
            <p className='headerDesc'>Travel and Save. Dreams come True!</p>
            <button className='headerBtn'>Sign In / Register</button>
            <div className='headerSearch'>
                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faHotel} className='headerIcon' />
                <input
                    type='text'
                    placeholder='where are you going?'
                    className='headerSearchInput'
                    onClick={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                <span
                    onClick={() => setOpenDate(!openDate)}
                    className='headerSearchText'
                >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                    date[0].startDate,
                    'MM/dd/yyyy'
                )}`}</span>
                {openDate && (
                    <DateRangePicker
                      editableDateInputs={true}
                      onChange={(item) => {
                        console.log (item.selection)
                        setDate([item.selection])}}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className='date'
                      minDate={new Date()}
                    
                    />
                )}  
              </div>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <span onClick={()=>setOpenOptions(!openOption)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                {openOption && <div className='options'>
                    <div className='optionItem'>
                    <span className='optionText'>Adult</span>
                    <div className='optionCounter'>
                        <button
                            disabled={options.adult <= 1}
                            className='optionCounterButton'
                            onClick={() => handleOption('adult', 'decrease')}
                        >
                        -
                        </button>
                        <span className='optionCounterNumber'>{options.adult}</span>
                        <button
                        className='optionCounterButton'
                        onClick={() => handleOption('adult', 'increase')}
                        >
                        +
                        </button>
                    </div>
                    </div>
                    <div className='optionItem'>
                    <span className='optionText'>Children</span>
                    <div className='optionCounter'>
                        <button
                            disabled={options.children <= 0}
                            className='optionCounterButton'
                            onClick={() => handleOption('children', 'decrease')}
                        >
                        -
                        </button>
                        <span className='optionCounterNumber'>
                        {options.children}
                        </span>
                        <button
                        className='optionCounterButton'
                        onClick={() => handleOption('children', 'increase')}
                        >
                        +
                        </button>
                    </div>
                    </div>
                    <div className='optionItem'>
                    <span className='optionText'>Room</span>
                    <div className='optionCounter'>
                        <button
                            disabled={options.room <= 1}
                            className='optionCounterButton'
                            onClick={() => handleOption('room', 'decrease')}
                        >
                        -
                        </button>
                        <span className='optionCounterNumber'>{options.room}</span>
                        <button
                        className='optionCounterButton'
                        onClick={() => handleOption('room', 'increase')}
                        >
                        +
                        </button>
                    </div>
                    </div>
                </div>}
                </div>
                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <button className='headerBtn' onClick={handleSearch}>Search</button>
                </div>
          </div></>}
        </div>
      </div>
    );
  };
  
  export default Header;
  
