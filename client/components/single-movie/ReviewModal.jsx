import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
};

const ReviewModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <span
        className="cursor-pointer flex items-center justify-center gap-1 text-lg hover:text-yellow-400"
        onClick={handleOpen}
      >
        Rate
        <StarIcon
          style={{ opacity: 0.55 }}
          fontSize="inherit"
          className="w-6 h-auto"
        />
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
            <h3>Add your rating</h3>
            <Rating
              name="customized-10"
              defaultValue={0}
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
            <textarea className="p-2 text-black rounded-xl" rows="7"></textarea>
          </div>
          <button className="bg-gray-900 text-white max-w-[100px] self-center px-6 py-1">
            Add
          </button>
        </Box>
      </Modal>
    </div>
  );
};
export default ReviewModal;
