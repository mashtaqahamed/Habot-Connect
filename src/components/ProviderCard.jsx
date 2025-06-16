import { Link } from 'react-router-dom';

const ProviderCard = ({ provider }) => (
  <Link
    to={`/providers/${provider.id}`}
    className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
  >
    <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300">{provider.name}</h2>
    <p className="text-sm text-gray-700 dark:text-gray-300">{provider.specialization}</p>
    <p className="text-sm text-gray-500 dark:text-gray-400">📍 {provider.location}</p>
    <p className="text-yellow-500">{'★'.repeat(provider.rating)}</p>
  </Link>
);

export default ProviderCard;