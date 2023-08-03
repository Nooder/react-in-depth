import Profile from "./Profile.jsx";

function Card({ fname, lname }) {
  //   return undefined;
  console.log(fname, lname);
  return (
    <>
      <h1>
        {fname} {lname}
      </h1>
      <Profile first={fname} last={lname} />
    </>
  );
}

export default Card;
