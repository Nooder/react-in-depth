function Table() {
  function handleClick(e) {
    console.log(e.target.textContent);
  }

  return (
    <table>
      <thead>
        <tr>
          <td>Subject</td>
          <td>Mark</td>
          <td>Grade</td>
        </tr>
      </thead>
      <tbody onClick={handleClick}>
        <tr>
          <td>Math</td>
          <td>74</td>
          <td>B+</td>
        </tr>
        <tr>
          <td>Science</td>
          <td>64</td>
          <td>C+</td>
        </tr>
        <tr>
          <td>Art</td>
          <td>94</td>
          <td>A+</td>
        </tr>
        <tr>
          <td>Woodworking</td>
          <td>70</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Dancing</td>
          <td>40</td>
          <td>F</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
