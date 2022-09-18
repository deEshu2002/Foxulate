import { useEffect, useState } from "react";

interface props {
  prop: string[];
}
const WordMapper = (prop: props) => {
  const [pink, setpink] = useState<boolean>(false);
  const [red, setred] = useState<boolean>(false);
  const [orange, setorange] = useState<boolean>(false);
  const [yellow, setyellow] = useState<boolean>(false);
  const [green, setgreen] = useState<boolean>(false);
  const [blue, setblue] = useState<boolean>(false);
  const [purple, setpurple] = useState<boolean>(false);

  const words = [
    "laihflauifalafdfa",
    "alfhfuiilafsdfs",
    "faiuliuhgregiegu",
    "aoifuhilulirggre",
    "aiufhregherhghg",
    "aiufiluhfaaiuf",
    "lafuihdlfualfas",
  ];

  const dispatchClass = (idx: number): string => {
    switch (idx) {
      case 0:
        return pink ? "text-pink-500/100" : "text-pink-500/60";
      case 1:
        return red ? "text-red-500/100" : "text-red-500/60";
      case 2:
        return orange ? "text-orange-500/100" : "text-orange-500/60";
      case 3:
        return yellow ? "text-yellow-500/100" : "text-yellow-500/60";
      case 4:
        return green ? "text-green-500/100" : "text-green-500/60";
      case 5:
        return blue ? "text-blue-500/100" : "text-blue-500/60";
      case 6:
        return purple ? "text-purple-500/100" : "text-purple-500/60";
      default:
        break;
    }
    return "text-black";
  };

  const litColor = (idx: number): void => {
    switch (idx) {
      case 0:
        setpink(true);
        break;
      case 1:
        setred(true);
        break;
      case 2:
        setorange(true);
        break;
      case 3:
        setyellow(true);
        break;
      case 4:
        setgreen(true);
        break;
      case 5:
        setblue(true);
        break;
      case 6:
        setpurple(true);
      default:
        break;
    }
  };

  const dimColor = (idx: number): void => {
    switch (idx) {
      case 0:
        setpink(false);
        break;
      case 1:
        setred(false);
        break;
      case 2:
        setorange(false);
        break;
      case 3:
        setyellow(false);
        break;
      case 4:
        setgreen(false);
        break;
      case 5:
        setblue(false);
        break;
      case 6:
        setpurple(false);
      default:
        break;
    }
  };

  useEffect(() => {
    if (prop.prop != null) {
      for (let i = 0; i < words.length; i++) {
        dimColor(i);
      }

      for (let i = 0; i < prop.prop.length; i++) {
        for (let j = 0; j < words.length; j++) {
          if (prop.prop[i] === words[j]) {
            litColor(i);
          }
        }
      }
      console.log(prop.prop);
    }
  }, [prop.prop, words]);

  return (
    <div className="w-full flex flex-row gap-4 justify-around flex-wrap">
      {words.map((word, idx) => {
        return (
          <p
            key={idx}
            className={`cursor-pointer text-xl ${dispatchClass(idx)}`}
          >
            {word}
          </p>
        );
      })}
    </div>
  );
};

export default WordMapper;
