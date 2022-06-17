import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { AiFillEdit } from "react-icons/ai";
import { useSelector } from "react-redux";
const ReviewCard = ({ review }) => {
  const { user, status, message } = useSelector((state) => state.auth);
  const handleEdit = () => {};
  return (
    <div className="flex flex-col justify-between w-80 gap-5 px-4 py-3 bg-zinc-800 rounded-2xl">
      <header className="flex flex-col items-center">
        <Rating
          name="customized-10"
          value={review?.rating}
          readOnly
          max={10}
          emptyIcon={
            <StarIcon
              fontSize="inherit"
              style={{ color: "black" }}
              className="w-7 h-auto"
            />
          }
        />
        <span className="text-xs">{review?.reviewDate.split("T")[0]}</span>
      </header>
      <div className="flex flex-col gap-1">
        {/* <h3 className="text-lg font-semibold">
          There's a reason they're number one
        </h3> */}
        <p className="text-gray-200">{review?.reviewText}</p>
      </div>
      <div className="flex items-center justify-between">
        {user?.id == review?.user.id ? (
          <>
            <span className="text-sm font-medium  text-gray-400">
              By {review?.user?.fullname} : @{review?.user?.username}
            </span>
            <AiFillEdit className="h-6 w-6 text-white" onClick={handleEdit} />
          </>
        ) : (
          <span className="text-sm font-medium self-center text-gray-400">
            By {review?.user?.fullname} : @{review?.user?.username}
          </span>
        )}
      </div>
    </div>
  );
};
export default ReviewCard;
