import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const ReviewCard = () => {
  return (
    <div className="flex flex-col justify-between w-80 gap-5 px-4 py-3 bg-zinc-800 rounded-2xl">
      <header className="flex flex-col ">
        <Rating
          name="customized-10"
          value={7}
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
        <span className="text-xs">Date</span>
      </header>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold">
          There's a reason they're number one
        </h3>
        <p className="text-gray-200">
          There's not much to say about YETI stainless steel tumblers that
          hasn't been said. There's a reason they're so highly rated. I filled
          mine with ice and water at 8:30am last week and drove to work sipping
          it. I left it in my car when I went into the office.
        </p>
      </div>
      <span className="text- font-medium">Oussama Lamnaouer</span>
    </div>
  );
};
export default ReviewCard;
