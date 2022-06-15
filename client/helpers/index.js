import { toast } from "react-toastify";

export const displaySuccessToast = (message ) => {
    toast.success(message, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "darkblue",
          color: "white",
        },
      });

}

export const displayFailToast = (message) => {
    toast.error(message, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "darkred",
          color: "white",
        },
      });
}