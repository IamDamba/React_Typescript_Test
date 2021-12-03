//|||||||||||||||| Props initialisation ||||||||||||||||||||||||||||

type GreetProps = {
  name: string;
  unreadMessage?: number;
  isLoggedIn: Boolean;
};

//|||||||||||||||| Greet Component ||||||||||||||||||||||||||||

const Greet = ({ name, unreadMessage, isLoggedIn }: GreetProps) => {
  // Variables
  unreadMessage = 0;

  // Return
  return (
    <div>
      <h2>
        {isLoggedIn ? (
          <h2>
            Welcome {name} !! You have {unreadMessage} message unreaded !!
          </h2>
        ) : (
          <h2>Welcome Guest !!</h2>
        )}
      </h2>
    </div>
  );
};

export default Greet;
