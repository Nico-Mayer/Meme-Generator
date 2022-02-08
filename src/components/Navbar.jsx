const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          {/* Logo */}
          <div>
            <a
              href="/"
              className="flex items-center text-gray-700 py-5 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
              <span className="font-bold ">Memefy</span>
            </a>
          </div>
          {/* Primary Nav */}
          <div className="flex items-center space-x-1 hidden md:flex">
            <a href="/" className="py-5 px-3 ">
              Login
            </a>
            <a
              href="/"
              className="py-2 px-3 bg-yellow-500 text-yellow-900 rounded hover:bg-yellow-400 hover:text-yellow-800 transition duration-300"
            >
              Signup
            </a>
          </div>
          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="hidden">
        <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Link1
        </a>
        <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Link2
        </a>
        <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Link3
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
