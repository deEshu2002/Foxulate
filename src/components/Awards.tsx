const Awards: React.FunctionComponent = () => {
  const Awards = [
    "Companyy",
    "asdfjaslf",
    "New Award",
    "Old Award",
    "this Award",
    "VeryNaicav asdf",
    "lkkhffhs",
    "Classic Award",
    "Best Awards",
    "Legendry Awards",
  ];

  return (
    <div className=" w-full border shadow-md">
      <table className="text-left w-full ">
        <tbody className="max-h-96 bg-white flex flex-col items-center justify-between overflow-y-scroll w-full">
          {Awards.map((award, idx) => {
            return (
              <tr key={idx} className={"w-full mb-1"}>
                <td className="pl-4 py-1">{award}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Awards;
