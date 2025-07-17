import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="backdrop-blur-md bg-gradient-to-r from-[#0f0120]/90 via-[#050446]/90 to-[#02277e]/90 shadow-lg rounded-b-2xl mx-2 mt-2 px-6 py-4 font-serif">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-widest">
          <span className="text-pink-400">AI</span>
          <span className="text-white-400">ris</span>
          <span className="text-blue-400">Mail</span>
        </h1>
        <ul className="flex space-x-8 text-lg">
          {['/', '/projects', '/about'].map((path, index) => {
            const labels = ['Home', 'Extension', 'About'];
            const isActive = location.pathname === path;
            return (
              <li key={path}>
                <Link
                  to={path}
                  className={`relative transition font-semibold ${
                    isActive ? 'text-pink-400' : 'text-white'
                  } group`}
                >
                  {labels[index]}
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-0.5 rounded bg-gradient-to-r from-pink-400 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : ''
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
