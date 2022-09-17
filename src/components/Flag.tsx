import Image from "next/image";
import india from "../Assets/india.png";

interface Props {
  prop: string;
}

const Flag = (prop: Props) => {
  return (
    <div className="ml-4 pt-1 -z-10">
      <Image alt={""} src={india} width={30} height={30} />
    </div>
  );
};

export default Flag;
