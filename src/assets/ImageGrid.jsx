export default function ImageGrid({ images = [], columns = 4 }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "16px",
      }}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      ))}
    </div>
  );
}

// Usage example:
// <ImageGrid images={['https://example.com/image1.jpg', 'https://example.com/image2.jpg']} columns={3} />
// or from a parent component:
// const [images, setImages] = useState([]);
// <ImageGrid images={images} columns={4} />