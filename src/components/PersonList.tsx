type PropsList = {
  names: {
    first: string;
    last: string;
  }[]; //Jika data nya berupa array atau banyak maka menggunakan array di ujung
};

export const PersonList = (props: PropsList) => {
  return (
    <div>
      {props.names.map((name, key) => {
        return (
          <h2 key={key}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
