import { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ProviderCard from '../components/ProviderCard';
import data from '../data/providers.json';

const Home = () => {
  const [providers, setProviders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(data), 500);
      });
    };
    fetchData().then((res) => setProviders(res));
  }, []);

  const filteredProviders = providers.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <div className="container mx-auto mt-6 px-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProviders.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;