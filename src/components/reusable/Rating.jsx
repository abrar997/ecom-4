import { FaStar } from "react-icons/fa6";
import halfStarImage from "../../assets/icons/halfStar.svg";
const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex gap-0.5 items-center">
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <FaStar
            key={`full-${i}`}
            kernelMatrix={`full-${i}`}
            className="text-[#FFAD33]"
          />
        ))}
      {halfStar && <img src={halfStarImage} />}

      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <FaStar key={`empty-${i}`} className="black opacity-25" />
        ))}
    </div>
  );
};

export default Rating;
