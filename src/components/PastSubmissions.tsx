const Submissions = () => {
  const PastSubmissions = ["afhsd"];
  const Status = ["failed"];
  return (
    <>
      {PastSubmissions.map((word, idx) => {
        return (
          <div className="flex justify-between p-1" key={word}>
            <p>{word}</p>
            <p>{Status[idx]}</p>
          </div>
        );
      })}
    </>
  );
};

export default Submissions;
