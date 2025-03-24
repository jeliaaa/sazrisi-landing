import { BiExit } from "react-icons/bi";
import { FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function UnderConstruction() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-900 text-white text-center">
            <div className="animate-spin text-main-color mb-4">
                <FaCog size={80} />
            </div>
            <h1 className="text-4xl font-bold mb-2">პლატფორმა მზადების პროცესშია</h1>
            <p className="text-lg text-gray-400 mb-4">ჩვენ ვმუშაობთ იმისთვის, რომ შევქმნათ ღირებული პროდუქტი.</p>
            <Link to={'/'} className="flex space-x-4 items-center text-main-color animate-pulse">
                <BiExit size={70} />
                დაბრუნდით ვებ-გვერდზე.
            </Link>
        </div>
    );
}