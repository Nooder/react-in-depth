function Cars() {
  const cars = ["Ford", "Tesla", "Volvo", "BMW", "Mercedes"];

  /*
    [
        <p>Ford</p>,
        <p>Tesla</p>,
        ...
    ]
    */

  const carPTags = cars.map((car) => <p>{car}</p>);

  return <>{carPTags}</>;
}

export default Cars;
