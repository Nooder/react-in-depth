import Card from "./Card.jsx";

function Profile({ profileText, cardText, buttonText, handleClick }) {
  return (
    <>
      <h1>{profileText}</h1>
      <Card
        cardText={cardText}
        buttonText={buttonText}
        handleClick={handleClick}
      />
    </>
  );
}

export default Profile;
