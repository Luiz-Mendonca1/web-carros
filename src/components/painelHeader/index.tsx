import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseconection";

export default function PainelHeader() {
  async function handleLogout() {
    await signOut(auth);
  }
    return (
        <header className="w-full bg-white shadow-md h-16 flex items-center px-8">
            <nav className="w-full">
                <div className="flex items-center justify-between w-full">
                    <ul className="flex items-center gap-6">
                        <li>
                            <Link to='/dashboard' className="text-black font-medium cursor-pointer">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/new' className="text-black font-medium cursor-pointer ">
                                Cadastrar carro
                            </Link>
                        </li>
                    </ul>
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors cursor-pointer">
                        Sair da conta
                    </button>
                </div>
            </nav>
        </header>
    )
}