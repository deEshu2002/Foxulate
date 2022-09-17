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
      <div className="">
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
