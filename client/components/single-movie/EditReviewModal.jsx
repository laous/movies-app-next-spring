import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

import { useRouter } from "next/router";

import * as api from "../../services";
import { displayFailToast, displaySuccessToast } from "../../helpers";
import { AiFillEdit } from "react-icons/ai";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
};

const EditReviewModal = ({ review }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [reviewText, setReviewText] = React.useState(review?.reviewText);
  const [rating, setRating] = React.useState(review?.rating);

  const router = useRouter();

  const handleEditReview = async (e) => {
    e.preventDefault();
    const review = {
      movieId: movie.id,
      rating: rating,
      reviewText: reviewText,
      userId: user.userId,
    };
    console.log("Review ", review);
    const res = await api.addReview(review);
    if (res) {
      setOpen(false);
      displaySuccessToast("Review edited succesfully!");
      router.reload(window.location.pathname);
    } else {
      displayFailToast("Not edit!!");
    }
  };

  const handleDelete = async (e) => {};

  return (
    <div>
      <span
        className="cursor-pointer flex items-center justify-center gap-1 text-lg hover:text-yellow-400"
        onClick={handleOpen}
      >
        <AiFillEdit className="h-6 w-6 text-white" />
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box
          sx={style}
          className="bg-zinc-800 flex flex-col  items-stretch justify-center gap-4 rounded-3xl"
        >
          <div className="flex flex-col gap-1">
            <h3>Edit your rating</h3>
            <Rating
              name="customized-10"
              defaultValue={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              max={10}
              emptyIcon={
                <StarIcon
                  fontSize="inherit"
                  style={{ color: "black" }}
                  className="w-7 h-auto"
                />
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3>Add your review{"(optional)"}</h3>
            <textarea
              className="p-2 text-black rounded-xl"
              rows="7"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              className="bg-gray-900 text-white max-w-[100px]  px-6 py-1"
              onClick={handleEditReview}
            >
              Edit
            </button>
            <button
              className="bg-white text-gray-900 max-w-[100px] px-6 py-1"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default EditReviewModal;
