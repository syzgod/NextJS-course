import React from 'react';

const UserIdPage = (props) => {
  return <div>{props.id}</div>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const userId = params.uid;

  return {
    props: {
      id: 'userid-' + userId,
    },
  };
};

export default UserIdPage;
