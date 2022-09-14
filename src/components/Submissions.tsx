const Submissions = () => {
  const PastSubmissions = ["afhsd"];
  const Status = ["failed"];
  return (
    <>
      <div className="shadow-md pb-4 pt-2 px-4 rounded-b-lg border w-11/12 max-h-[50rem] mb-10 overflow-y-scroll">
        {PastSubmissions.map((word, idx) => {
          return (
            <div className="flex justify-between p-1" key={word}>
              <p>{word}</p>
              <p>{Status[idx]}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Submissions;
