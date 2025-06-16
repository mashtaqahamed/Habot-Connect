
const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <input
    type="text"
    placeholder="Search by name or specialization..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="border border-gray-600 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 p-2  rounded-md mb-6 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

export default SearchBar; 