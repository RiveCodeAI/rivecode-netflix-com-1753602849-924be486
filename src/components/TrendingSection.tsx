import React from 'react';

const trendingItems = [
  { id: 1, image: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZV4NmkRBbtoq8O_5Aro81rbq4CRwiku0decuhWlpXGKK4pGsQ9LDCWu_Yf0jv8z5goKbOMQxZ-7ZJDxzXDBbkQcobG_TzvyQsNq6FqbmzhZ-z2jB5kKb1mk6-4mwpXXdznp.jpg?r=609", title: "Squid Game" },
  { id: 2, image: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVUf4bSnz8w1CVd3WFMaasjpYYQdILcccmXBEc7kxxAQOStobeTltMVjQwIPlfDM15ybPtJFJ09u0C04w4Z6FiSgEVx2yUUg4rxg8pFCYXEl-RtkqJ-qFSzHJlTdmr75ymGb.jpg?r=b67", title: "UNTAMED" },
  // Add remaining items with their respective images from the provided list
];

const TrendingSection: React.FC = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-bold mb-8">Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trendingItems.map((item) => (
            <div key={item.id} className="relative aspect-video rounded overflow-hidden hover:scale-105 transition-transform">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black">
                <span className="text-white text-sm">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;