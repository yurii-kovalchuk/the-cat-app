import React from "react";

const BreedIdPage = ({ params }: { params: { breed_id: string } }) => {
  return <div>Page breed {params.breed_id}</div>;
};

export default BreedIdPage;
