import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    id: 1,
    title: "Enjoy on your TV",
    description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: "tv"
  },
  {
    id: 2,
    title: "Download your shows to watch offline",
    description: "Save your favorites easily and always have something to watch.",
    icon: "download"
  },
  {
    id: 3,
    title: "Watch everywhere",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: "devices"
  },
  {
    id: 4,
    title: "Create profiles for kids",
    description: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    icon: "kids"
  }
];

const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">More Reasons to Join</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;