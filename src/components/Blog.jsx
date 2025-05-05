import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: '5 трендов мужской моды в 2025',
      date: '04 мая 2025',
      image: '#',
      summary: 'От классики до стритвира — что будет в топе этим летом.',
    },
    {
      title: 'Обзор новых ароматов весны',
      date: '01 мая 2025',
      image: '#',
      summary: 'Топ-5 ароматов, которые сведут с ума в 2025 году.',
    },
    {
      title: 'Как выбрать аксессуары к любому образу',
      date: '29 апреля 2025',
      image: '#',
      summary: 'Секреты стилистов: как подбирать сумки, очки и бижутерию.',
    },
  ];

  return (
    <div className="page-section px-4">
      <h2 className="text-2xl font-bold mb-4">Блог</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="mt-2 text-sm text-gray-700">{post.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
