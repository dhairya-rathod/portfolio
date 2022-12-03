import { toast } from "react-toastify";

const notificationStyles = {
  style: {
    borderRadius: "10px",
    background: "#333",
  },
};

export const warning = (message: string) =>
  toast.warning(message, {
    ...notificationStyles,
  });

export const error = (message: string) =>
  toast.error(message, {
    ...notificationStyles,
  });

export const success = (message: string) =>
  toast.success(message, {
    ...notificationStyles,
  });
