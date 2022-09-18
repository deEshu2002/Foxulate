import { useSelector } from "react-redux";
import { RootState } from "./store";
import WordMatchLogic from "./WordMatchLogic";

const Writing = () => {
  const focusScenario = useSelector(
    (state: RootState) => state.focusScenario.focusScenarioState
  );

  return (
    <>
      <div className="flex justify-center mt-11">
        <div className="flex flex-col w-4/6 ">
          <div className="flex justify-end">
            <div className="pb-3">
              <svg
                className="h-5 w-5 fill-current text-slate-700 cursor-pointer hover:scale-110 duration-200"
                viewBox="0 0 23 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3489 1.06489e-05C9.2285 -0.00289552 7.14984 0.589092 5.34914 1.70869C3.54845 2.82828 2.09795 4.43058 1.16252 6.33345C0.227079 8.23633 -0.155777 10.3635 0.0574629 12.4731C0.270703 14.5827 1.07149 16.5902 2.3688 18.2674C3.6661 19.9446 5.40791 21.2242 7.39622 21.9608C9.38454 22.6974 11.5396 22.8615 13.6165 22.4343C15.6934 22.0071 17.6088 21.0059 19.1451 19.5444C20.6813 18.0829 21.7767 16.2197 22.3068 14.1667H19.3587C18.8392 15.636 17.9257 16.9343 16.7181 17.9195C15.5106 18.9047 14.0553 19.539 12.5116 19.7529C10.9679 19.9668 9.39502 19.7522 7.96503 19.1325C6.53503 18.5128 5.30294 17.5119 4.40344 16.2392C3.50395 14.9665 2.97168 13.4709 2.86483 11.9161C2.75798 10.3613 3.08066 8.807 3.7976 7.42319C4.51453 6.03939 5.59812 4.87933 6.9299 4.06985C8.26168 3.26036 9.79038 2.8326 11.3489 2.83334C12.4636 2.83497 13.5668 3.05882 14.5941 3.49179C15.6213 3.92477 16.5519 4.55819 17.3315 5.35501L12.7726 9.91668H22.6893V1.06489e-05L19.3587 3.32918C18.3092 2.27331 17.0612 1.43555 15.6865 0.864177C14.3118 0.292802 12.8376 -0.000893853 11.3489 1.06489e-05V1.06489e-05Z"
                  fill="#2D2E30"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-row space-x-6">
            <div className="pt-1">
              <svg
                className="cursor-pointer hover:scale-110 duration-200"
                width="13"
                height="18"
                viewBox="0 0 15 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 12L3 0L0.18 2.82L9.34 12L0.18 21.18L3 24L15 12Z"
                  fill="#2D2E30"
                />
              </svg>
            </div>
            <div className="w-full">
              {/* getScenario */}
              <textarea
                className={`resize-none bg-transparent w-11/12 text-xl ${
                  focusScenario
                    ? "placeholder:text-neutral-600/100"
                    : "placeholder:text-neutral-600/60"
                }`}
                disabled
                placeholder="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam
              in hendrerit urna. Pellentesque sit amet sapien."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      {/** Words come here */}
      <WordMatchLogic />

      {/** Writing comes here */}

      {/** Play and Save Icon Part */}
      <div className="flex justify-center mt-4">
        <div className="w-4/6">
          <div className="flex flex-row justify-end gap-2">
            <svg
              className="mt-0.5 cursor-pointer hover:scale-110 duration-200"
              width="16"
              height="18"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.1739 11C19.1739 10.712 19.0128 10.4645 18.7772 10.3346L2.02399 0.662293C1.89657 0.572965 1.74475 0.525009 1.58913 0.524933C1.38684 0.524933 1.19283 0.605269 1.04976 0.748278C0.906685 0.891288 0.826262 1.08526 0.826172 1.28755C0.826172 1.31713 0.831612 1.34501 0.835012 1.37357H0.826172V20.7981H0.835012C0.855501 20.9839 0.94374 21.1556 1.08286 21.2804C1.22198 21.4053 1.40222 21.4744 1.58913 21.4747C1.72276 21.474 1.85382 21.4379 1.96891 21.37L1.97571 21.3819L18.7976 11.6698L18.7908 11.6579C18.9069 11.5917 19.0035 11.496 19.0708 11.3804C19.1381 11.2649 19.1736 11.1337 19.1739 11Z"
                fill="#2D2E30"
              />
            </svg>

            <div className="mt-1">
              <svg
                className="cursor-pointer hover:scale-110 duration-200"
                width="22"
                height="18"
                viewBox="0 0 29 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H18V4.28571H0V0ZM0 8.57143H18V12.8571H0V8.57143ZM12 17.1429H0V21.4286H12V17.1429Z"
                  fill="#2D2E30"
                />
                <path
                  d="M20 9.57144H23V15.5714H29V18.5714H23V24.5714H20V18.5714H14V15.5714H20V9.57144Z"
                  fill="#2D2E30"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Writing;
