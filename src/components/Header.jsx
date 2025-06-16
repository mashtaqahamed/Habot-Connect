import { useState } from 'react';

const Header = () => {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setDark(!dark);
  };

  return (
    <header className="flex justify-between items-center bg-blue-600 dark:bg-gray-800 text-white px-6 py-4 shadow-md">
      <h1 className="text-xl font-bold">Learning Support Providers</h1>
      <button
        onClick={toggleDark}
        className="bg-white dark:bg-gray-700 text-blue-600 dark:text-white px-3 py-1 rounded shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition"
      >
        {dark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;