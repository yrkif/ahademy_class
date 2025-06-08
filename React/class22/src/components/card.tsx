import React from 'react';

type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  onCtaClick: () => void;
};

export function Card({
  imageUrl,
  title,
  description,
  features,
  ctaText,
  onCtaClick,
}: CardProps) {
  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden border max-w-sm w-full'>
      {/* Image */}
      <img src={imageUrl} alt={title} className='w-full h-48 object-cover' />

      {/* Content */}
      <div className='p-4'>
        {/* Title */}
        <h2 className='text-xl font-bold text-gray-800 mb-1'>{title}</h2>

        {/* Description */}
        <p className='text-gray-600 text-sm mb-3'>{description}</p>

        {/* Feature List */}
        <ul className='list-disc list-inside text-gray-700 text-sm mb-4'>
          {features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={onCtaClick}
          className='w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition'
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}
