import toast from "react-hot-toast";

const getCSSVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export const showToast = (message, type = "success") => {
  const primary = getCSSVar("--primary");
  const card = getCSSVar("--card-bg");
  const text = getCSSVar("--text-color");
  const border = getCSSVar("--border-color");

  const options = {
    style: {
      border: `1px solid ${border}`,
      padding: "16px",
      color: text,
      background: card,
      fontWeight: "bold",
    },
    iconTheme: {
      primary: primary,
      secondary: card,
    },
  };

  type === "error"
    ? toast.error(message, options)
    : toast.success(message, options);
};
