type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name}! You Have {props.messageCount} Unread Message
        </h2>
      ) : (
        <h2>Welcome Guest</h2>
      )}
    </div>
  );
};
