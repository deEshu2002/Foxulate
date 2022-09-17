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
      {Related.map((related) => {
        return (
          <p key={related} className="py-1">
            {related}
          </p>
        );
      })}
    </>
  );
};

export default Related;
