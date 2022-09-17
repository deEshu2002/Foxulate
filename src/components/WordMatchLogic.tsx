import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleFocusScenario } from "./Redux/FocusScenario";
import WordMapper from "./WordMapper";

const WordMatchLogic = () => {
  const paraRef = useRef<HTMLTextAreaElement>(null);

  const dispatch = useDispatch();

  const [Para, setPara] = useState("");

  const [wordArr, setwordArr] = useState<string[]>([""]);

  useEffect(() => {
    const tempArr = Para.match(/\w+/g) as RegExpMatchArray;
    setwordArr(tempArr);
  }, [Para]);

  return (
    <>
      <div className="flex justify-center w-full -ml-3 mt-6">
        <div className="w-4/6 flex flex-row space-x-5">
          <div className="-mt-2">
            <svg
              className="cursor-pointer hover:scale-110 duration-200"
              width="27"
              height="35"
              viewBox="0 0 35 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.8958 27V15H21.1458"
                stroke="#2D2E30"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.375 37L11.9131 24.5L19.0932 30.5L29.8958 15"
                stroke="#2D2E30"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="w-full">
            {/* getWords */}
            <WordMapper prop={wordArr} />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="w-4/6 pl-9">
          <textarea
            // focus:outline focus:outline-1 focus:outline-neutral-300
            className="
            rounded-md resize-none bg-transparent w-full outline-none p-2 text-lg placeholder:text-black/30 text-neutral-700"
            rows={12}
            placeholder="hello"
            onFocus={() => {
              dispatch(toggleFocusScenario());
            }}
            onBlur={() => dispatch(toggleFocusScenario())}
            ref={paraRef}
            onChange={(e) => {
              setPara(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default WordMatchLogic;
