function People() {
  const people = [
    { name: "Iron Man", age: 30 },
    { name: "Godzilla", age: 9000 },
    { name: "Goku", age: 300 },
  ];

  /*
        <h1>Iron Man</h1>
        <p>30</p>
    */

  const peopleCards = people.map((person) => {
    return (
      <>
        <h1>{person.name}</h1>
        <p>{person.age}</p>
      </>
    );
  });

  return <>{peopleCards}</>;
}

export default People;
