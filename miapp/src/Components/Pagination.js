function Pagination({ prevPag, nextPag, prev, next }) {
  function handlePrevPag() {
    prevPag();
  }
  function handleNextPag() {
    nextPag();
  }

  return (
    <div className="btn-group d-flex sm-6 gap-2 mt-2">
      {prev ? (
        <button className="btn btn-danger btn-lg" onClick={handlePrevPag}>
          Prev
        </button>
      ) : null}
      {next ? (
        <button className="btn btn-success btn-lg" onClick={handleNextPag}>
          Next
        </button>
      ) : null}
    </div>
  );
}

export default Pagination;
