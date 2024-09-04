import React from 'react';
import './PhotoGallery.css'; // Import the CSS file
import cat1 from './a.jpg';
import cat2 from './b.jpg';
import cat3 from './c.jpg';
import cat4 from './d.jpg';
import cat5 from './e.jpg';
import cat6 from './f.jpg';
import cat7 from './g.jpg';
import cat8 from './h.jpg';
// Define the photos with local file paths
const photos = [
  { img:cat1, id: 1,  alt: 'Cat 1' },
  { id: 2, img:cat2, alt: 'Cat 2' },
  { id: 3, img:cat3, alt: 'Cat 3' },
  { id: 4, img:cat4, alt: 'Cat 4' },
  { id: 5, img:cat5, alt: 'Cat 5' },
  { id: 6, img:cat6, alt: 'Cat 6' },
];

const PhotoGallery = () => {
  return (
    <div className="photo-gallery">
      <h1>Photo Gallery</h1>
      <p>See our adorable cats!</p>
      <div className="photo-grid">
        {photos.map(photo => (
          <div key={photo.id} className="photo-item">
            <img src={photo.img} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
