//|||||||||||||||| Props initialisation ||||||||||||||||||||||||||||

type StatusProps = {
  status: "loading" | "success" | "error";
};

//|||||||||||||||| Status Component ||||||||||||||||||||||||||||

const Status = ({ status }: StatusProps) => {
  //Variables
  let message;

  //functions
  switch (status) {
    case "loading":
      message = "Loading...";
      break;
    case "success":
      message = "Data fetch successfully !!";
      break;
    case "error":
      message = "Error occured: no data fetch";
      break;
  }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

export default Status;
