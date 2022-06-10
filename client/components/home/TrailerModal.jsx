import { useState } from "react";
import ReactPlayer from "react-player/lazy";
import { FaPlay } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { GrVolumeMute, GrVolume } from "react-icons/gr";
import MuiModal from "@mui/material/Modal";

function TrailerModal({ state, movieLink, setShowModal }) {
  // const [showModal, setShowModal] = useState(state);
  const [muted, setMuted] = useState(true);
  const [addedToList, setAddedToList] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <MuiModal
      open={state}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        {/* <Toaster position="bottom-center" /> */}
        <button
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none "
          onClick={handleClose}
        >
          <AiFillCloseCircle className="h-10 w-10 text-black" />
        </button>

        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={movieLink}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
            muted={muted}
          />
          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            {/* <div className="flex space-x-2">
              <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                <FaPlay className="h-7 w-7 text-black" />
                Play
              </button>
              <button className="modalButton">
                {addedToList ? "check icon" : "plus icon"}
              </button>
              <button className="modalButton">"thumb up icon"</button>
            </div> */}
            <button
              className="modalButton justify-self-end self-end"
              onClick={() => setMuted(!muted)}
            >
              {muted ? (
                <GrVolumeMute className="h-8 w-8" />
              ) : (
                <GrVolume className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
        {/* <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">32% Match</p>
              <p className="font-light">2016</p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>
            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="w-5/6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                blanditiis numquam dolor consequuntur dolores iure facere fugit
                maxime reiciendis, soluta atque odit aliquid. Repudiandae amet
                necessitatibus aperiam doloremque iusto voluptas suscipit
                tempore?
              </p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Genres:</span> Animation
                </div>

                <div>
                  <span className="text-[gray]">Original language:</span>{" "}
                  Japanese
                </div>

                <div>
                  <span className="text-[gray]">Total votes:</span> 20
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </>
    </MuiModal>
  );
}

export default TrailerModal;
