import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass,faBell , faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    return (
        <div className="flex justify-between text-color_text p-4 border-b ">
            <h3 className="text-color_main text-2xl">Course</h3>
            <div>
                <input className="outline-0 bg-bg_com p-1 rounded-md text-color_main mr-1 text-black" type="text" placeholder="Search"/>
                <FontAwesomeIcon className="mr-4 text-xl cursor-pointer" icon={faMagnifyingGlass} />
                <FontAwesomeIcon className="bg-color_com text-xl cursor-pointer"  icon={faArrowDownWideShort} />
                <FontAwesomeIcon icon={faBell} className="ml-14 text-xl cursor-pointer"/>
            </div>
            <div className="flex">
                <h3 className="text-xl">Habtemariam</h3>
                <img className="w-10 h-10 ml-4 rounded-full" src="/images/images.png" />
            </div>
        </div>
    )
} 