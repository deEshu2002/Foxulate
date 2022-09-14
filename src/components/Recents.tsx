const Recents = () => {
  const recents = [
    "asdfa",
    "asdfas",
    "afafas",
    "asdfas",
    "afasfas",
    "afdas",
    "afsf",
    "aslfdja",
    "sfalaj",
    "saadfnf",
    "lhliu",
    "lfasuidf",
    "afliuf",
    "hliah",
    "lisafis",
    "laifaui",
    "lsfafahasauif",
    "laifsdif",
    "afjaosoi",
    "asfoasfi",
    "alifshu",
    "laifsdlfius",
    "fdlaisdf",
    "asdfdlafs",
    "asdfas",
    "afasfas",
    "afdas",
    "afsf",
    "aslfdja",
    "sfalaj",
    "saadfnf",
    "lhliu",
    "lfasuidf",
    "afliuf",
    "hliah",
    "lisafis",
  ];

  return (
    <>
      <div className="shadow-md pb-4 pt-2 px-4 rounded-b-lg border w-11/12 max-h-[50rem] mb-10 overflow-y-scroll">
        {recents.map((word) => {
          return (
            <p key={word} className="py-1">
              {word}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Recents;
