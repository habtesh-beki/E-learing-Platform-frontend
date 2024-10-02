import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faOutdent,faFile ,faCalendarDays ,faHouse ,faHouseLaptop ,faChartLine } from '@fortawesome/free-solid-svg-icons'; // Combined import
//  relative
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <div className="h-screen w-2/12 bg-bg_nav text-color_font pl-8 pt-6 relative">
            <h1 className="text-2xl mb-14">Bekisen Course</h1>
            <div className="flex flex-col gap-2">
                <NavLink to='/' className="hover:border p-2">
                <FontAwesomeIcon icon={faHouse} className="pr-3" />  Dashboard
                </NavLink>
                <NavLink to='/course' className="hover:border p-2">
                <FontAwesomeIcon icon={faFile} className="pr-3"/>  Course
                </NavLink>
                <NavLink to='/mycourse' className="hover:border p-2">
                <FontAwesomeIcon icon={faHouseLaptop} className="pr-3"/> My Course
                </NavLink> 
                <NavLink to='/progress' className="hover:border p-2">
                <FontAwesomeIcon icon={faChartLine} className="pr-3"/> Progress</NavLink>
                <NavLink to='/schedule' className="hover:border p-2">
                <FontAwesomeIcon icon={faCalendarDays}  className="pr-3"/> Schedule</NavLink>
            </div>
            <div className="absolute bottom-7 border-t w-1/2 pt-2">
                <FontAwesomeIcon icon={faOutdent} className="pr-3"/> Log Out
            </div>
        </div>
    );
}
