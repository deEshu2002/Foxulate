const Related = () => {
  const Related = [
    "asdfihasf",
    "asioadfffjlfsa",
    "aiusdafliu",
    "asififuhi",
    "lidfiuh",
    "lsiafiuhf",
    "asflihui",
    "asioadfffjlfsa",
    "aiusdafliu",
    "asififuhi",
    "lidfiuh",
    "lsiafiuhf",
    "asioadfffjlfsa",
    "aiusdafliu",
    "asififuhi",
    "lidfiuh",
    "lsiafiuhf",
    "asioadfffjlfsa",
    "aiusdafliu",
    "asififuhi",
    "lidfiuh",
    "lsiafiuhf",
    "asioadfffjlfsa",
    "aiusdafliu",
    "asififuhi",
    "lidfiuh",
    "lsiafiuhf",
  ];

  return (
    <>
      <div className="shadow-md pb-4 pt-2 px-4 rounded-b-lg border w-11/12 h-[70vh] mb-10 overflow-y-scroll">
        {Related.map((related) => {
          return <p key={related}>{related}</p>;
        })}
      </div>
    </>
  );
};

export default Related;
