import Swal from "sweetalert2";

export const successAlert = () => {
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
  });
};

export const errorAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>',
  });
};
