import React from "react";

type personProps = {
  name: {
    first: string;
    second: string;
  };
};

const Person = ({ name }: personProps) => {
  return (
    <div>
      <p>
        {name.first} {name.second}
      </p>
    </div>
  );
};

export default Person;
