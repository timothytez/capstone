import{
    faHotel,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi
} from "@fortawesome/free solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./header.css"
import {DateRange} from 'react-date-range';
import {useState} from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns"

export const Header = () => {
    const[openDate, SetopenDate] = useState(false)
    const[date, setDate] = useState([
        {
            startDate: new Date(),
            endDate : new Date(),
            key: 'selection'
        }
    ]);
    const [openOption, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 2,
        children: 0,
        room: 1,
    });

// if i run this next function it will increase or decrease for adults.
const handleOption = (name, operation) => {
    setOptions((prev) => {
        return {
            ...prev,
            [name]: operation === "increase" ? option[name] + 1 : options[name] - 1,
        };
    });
};

  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active ">
                    <FontAwesomeIcon icon={faHotel} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faHiking} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rental</span>
                </div>
            </div>
            <h1 className="headingTitle">Booking.com Booking.Yeahhh</h1>
            <p className="headerDesc">
                Travel and save. Dreams come true!
            </p>
            <button className="headerBtn">Sign In / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faHotel} className="headerIcon" />
                    <input 
                        type="text" 
                        placeholder="where are you going?"
                        className="headerSearchInput"
                    />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                    <span onClick={()=>setOpenDate(!openDate)}className="headerSearchText">{`${format(
                        date[0].startDate, 
                        "mm/dd/yyyy"
                        )} to ${format(date[0].startDate, "mm/dd/yyyy")}`}</span>
                        {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => SVGMetadataElement([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={dates}
                        className="date"
                    />}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                            <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">

                                    <button className="optionCounterButton"onClick={()=>handleOption("Adult", "decrease")}>-</button>
                                    <span className="optionCounterNumber">{options.Adult}</span>
                                    <button className="optionCounterButton"onClick={()=>handleOption("Adult", "increase")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">

                                    <button className="optionCounterButton"onClick={()=>handleOption("Children", "decrease")}>-</button>
                                    <span className="optionCounterNumber">{options.Children}</span>                                    
                                    <button className="optionCounterButton"onClick={()=>handleOption("Children", "increase")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter">

                                    <button className="optionCounterButton"onClick={()=>handleOption("Room", "decrease")}>-</button>
                                    <span className="optionCounterNumber">{Options.Room}</span>                                   
                                    <button className="optionCounterButton"onClick={()=>handleOption("Room", "increase")}>+</button>
                                    </div>
                                </div>
                            </div>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <button className="headerBtn">Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}
