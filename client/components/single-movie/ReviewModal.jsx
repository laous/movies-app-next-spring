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
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textColor: "black",
};

const ReviewModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <span
        className="cursor-pointer flex items-center justify-center gap-1 text-lg"
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
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <p className="text-gray-800">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium atque illo debitis excepturi quaerat consequuntur
            placeat voluptatibus est minima velit repellendus nemo molestias
            reiciendis fugiat, officiis consequatur dolores iure eos nobis
            corrupti?
          </p>
          <p>
            <Rating
              name="customized-10"
              defaultValue={2}
              max={10}
              emptyIcon={
                <StarIcon fontSize="inherit" style={{ color: "black" }} />
              }
            />
          </p>
        </Box>
      </Modal>
    </div>
  );
};
export default ReviewModal;
