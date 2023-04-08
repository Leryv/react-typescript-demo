type GreetProps = {
  name: string;
  messageCount?: number; // => add ? if you want to opsionally add a number
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name}! You Have {messageCount} Unread Message
          {/* Welcome {props.name}! You Have {props.messageCount} Unread Message */}
        </h2>
      ) : (
        <h2>Welcome Guest</h2>
      )}
    </div>
  );
};
