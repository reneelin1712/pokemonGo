import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const getUserQuery = gql`
  {
    profile {
      name
    }
  }
`;

const UserProfile = () => {
  const { data, loading, error } = useQuery(getUserQuery);

  console.log(data);
  return (
    <div>
      <h2>test </h2>
      {data ? data.profile.map(user => <p>User Name: {user.name}</p>) : null}
    </div>
  );
};

export default UserProfile;
