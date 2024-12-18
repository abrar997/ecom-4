import { useState } from "react";

const ProductImages = ({ singleProduct }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(
    singleProduct.image
  );
  const images = singleProduct.productsImages || [];
  const selectedImage = images[selectedImageIndex]
    ? images[selectedImageIndex].image
    : singleProduct.image;
  return (
    <div className="lg:flex grid lg:gap-16 gap-7 lg:col-span-2">
      <div className="lg:flex flex-col grid gap-4 grid-cols-2 order-2">
        {images.map((image, index) => (
          <button
            className="bg-secondary2 lg:w-[170px] h-[138px] flex items-center justify-center"
            key={index}
            onClick={() => setSelectedImageIndex(index)}
          >
            <img src={image.image} alt={`image-${index + 1}`} />
          </button>
        ))}
      </div>
      <div className="bg-secondary2 h-[600px] flex items-center justify-center w-full  lg:order-2">
        <img src={selectedImage} className="lg:p-12" />
      </div>
    </div>
  );
};

export default ProductImages;
