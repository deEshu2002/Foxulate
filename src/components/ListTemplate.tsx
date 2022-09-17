interface Props {
  title: string;
  component: React.ReactNode;
  extraClass?: string;
}

const ListTemplate = ({ title, component, extraClass }: Props) => {
  return (
    <>
      <div className="w-11/12">
        <div className="shadow-md bg-white mb-1 rounded-t-xl  border">
          <p className="text-xl py-1 ml-3">{title}</p>
        </div>
        <div
          className={`shadow-md pb-4 pt-2 px-4 rounded-b-lg border ${extraClass}`}
        >
          {component}
        </div>
      </div>
    </>
  );
};

export default ListTemplate;
