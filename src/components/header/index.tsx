import { Link } from "react-router-dom";
import { FiUser, FiLogIn } from "react-icons/fi";
import logo from "../../assets/logo.svg";

export default function Header() {
  const signed = false;
  const loadingAuth = false;

  return (
    <>
    <div className="w-full flex items-center justify-center h-16 bg-white drop-shadow mb-4">
    <header className="flex w-full max-w-7xl items-center justify-between">
      <Link to="/"><img src={logo} alt="Web Carros business logotype featuring modern typography and automotive design elements" /></Link>

    {!signed && !loadingAuth && (
      <Link to="/dashboard">
        <div className="border-2 rounded-full p-1 border-gray-900">
        <FiUser size={24} color="#000" />
        </div>
      </Link>
      )}

      {signed && !loadingAuth && (
       <Link to="/login">
        <div className="border-2 rounded-full p-1 border-gray-900">
        <FiLogIn size={24} color="#000" />
        </div>
       </Link>
      )}
    </header>
    </div>
    </>
  )
}