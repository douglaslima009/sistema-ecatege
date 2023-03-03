import React from "react";
import Link from 'next/link';

function Header(){
      const [navbarOpen, setNavbarOpen] = React.useState(false);
    return( 
           
        <div className="flex bg-gray-700">
        <Link href="/">
            <a
              href="/"
              className="font-medium text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
            Index
            </a>
        </Link>
        <Link href="/registrarAssociado">
            <a
              href="/"
              className="font-medium text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
            Registrar Associado
            </a>
        </Link>
        <Link href="/editAssociate">
            <a
              href="/"
              className="font-medium text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
            Editar Associado
            </a>
        </Link>
        <Link href="/showAssociados">
            <a
              href="/"
              className="font-medium text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
            Ver
            </a>
        </Link>
        <Link href="/loginUser">
            <a
              href="/"
              className="font-medium text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
            Login
            </a>
        </Link>
        <Link href="/registerUser">
            <a
              href="/"
              className="font-medium text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
            Register
            </a>
        </Link>

        </div>

    )

}

export default Header;