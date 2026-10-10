import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery4 from '../assets/images/gallery-4.jpg';
import gallery5 from '../assets/images/gallery-5.jpg';

const galleryImages = [
  { src: gallery1, alt: 'Gallery image 1' },
  { src: gallery2, alt: 'Gallery image 2' },
  { src: gallery3, alt: 'Gallery image 3' },
  { src: gallery4, alt: 'Gallery image 4' },
  { src: gallery5, alt: 'Gallery image 5' },
];

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <p className="section-subtitle">Visual Memories</p>
        <h2 className="h2 section-title">Moments From Our Expeditions</h2>
        <p className="section-text">
          A glimpse into genuine travel stories, breathtaking vistas, and
          treasured memories captured by travelers exploring with Passion Tour.
        </p>

        <ul className="gallery-list">
          {galleryImages.map((img, index) => (
            <li className="gallery-item" key={index}>
              <figure className="gallery-image">
                <img src={img.src} alt={img.alt} />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Gallery;
