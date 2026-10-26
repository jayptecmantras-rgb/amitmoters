'use client';

import { useEffect, useState } from 'react';

const banners = [
  { src: '/banners/seat-covers.webp', alt: 'Custom seat covers with a free steering wheel cover offer' },
  { src: '/banners/car-body-cover.webp', alt: 'Premium car body cover available for 500 or more car models' },
  { src: '/banners/steering-wheel-cover.webp', alt: 'Premium tan leather steering wheel covers' },
];

export default function HomeBannerSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex(index => (index + 1) % banners.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const showBanner = index => setActiveIndex((index + banners.length) % banners.length);

  return (
    <section className="home-slider" aria-label="Featured products">
      <div className="home-slider-image-wrap">
        <img
          className="home-slider-image"
          src={banners[activeIndex].src}
          alt={banners[activeIndex].alt}
          key={banners[activeIndex].src}
        />
      </div>
      <div className="home-slider-controls">
        <button type="button" aria-label="Previous banner" onClick={() => showBanner(activeIndex - 1)}>‹</button>
        <div className="home-slider-dots" aria-label="Choose a banner">
          {banners.map((banner, index) => (
            <button
              type="button"
              aria-label={`Show banner ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              className={index === activeIndex ? 'is-active' : ''}
              key={banner.src}
              onClick={() => showBanner(index)}
            />
          ))}
        </div>
        <button type="button" aria-label="Next banner" onClick={() => showBanner(activeIndex + 1)}>›</button>
      </div>
    </section>
  );
}
