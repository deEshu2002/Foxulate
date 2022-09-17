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
    <>
      <div className="">
        {Awards.map((award) => {
          return (
            <p key={award} className="py-1">
              {award}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Awards;
