const ResultsModal = ({ result, targetTime }) => {
  return (
    <dialog className="result-modal" open>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultsModal;
