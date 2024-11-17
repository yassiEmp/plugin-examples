import background from "./assets/background.svg";
import "./App.css";
import { useRef, useState } from "react";

function SvgChevron(props: { rotate: string; handler: any }) {
  return (
    <div
      className={`${props.rotate} w-[24px] h-[18px] grid place-items-center`}
      onClick={props.handler}
    >
      <svg
        height="16px"
        width="10px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 185.343 185.343"
        xmlSpace="preserve"
        strokeWidth={70}
      >
        <g>
          <g>
            <path
              style={{ stroke: "#010002", strokeWidth: 30 }}
              d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
			l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
			c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Option(props: { content: string; key: string }) {
  return (
    <label
      className="w-[292px] h-[50px] gap-5 bg-slate-300 rounded-xl flex justify-start items-center p-4 m-4 border-gray-200 border"
      key={props.key}
    >
      <input type="radio" name="options" id={props.key} className="simple" />
      <p className="text-3xl">{props.content}</p>
    </label>
  );
}

function SelectOption(props: { content: string; options: string[] }) {
  return (
    <div className="w-[292px] h-[50px] gap-3 bg-slate-300 rounded-xl flex justify-start items-center p-4 border-gray-200 border ">
      <div className="w-[20px] h-[20px] rounded-full bg-[#4D7298] flex justify-center items-center">
        1
      </div>
      <p className="w-28 text-left">{props.content}</p>
      <select name="type" id="paragraph" className="rounded text-red-600">
        {props.options.map((option) => {
          return <option>{option}</option>;
        })}
      </select>
    </div>
  );
}

function SimpleOption(props: {
  content: string;
  unit: string;
  position: number;
  default: number;
}) {
  const counter = useRef<HTMLInputElement>(null);

  const updateCouter = (arrow: number) => {
    if (!counter.current) {
      return;
    }
    switch (arrow) {
      case 1:
        counter.current.stepUp();
        break;
      case 2:
        counter.current.stepDown();
        break;
    }
  };

  return (
    <div className="w-[292px] h-[50px] gap-3 bg-slate-300 rounded-xl flex justify-start items-center p-4 border-gray-200 border">
      <div className="w-[20px] h-[20px] rounded-full bg-[#4D7298] flex justify-center items-center">
        {props.position}
      </div>
      <p className="text-nowrap w-28">{props.content}</p>
      <div className="flex flex-row-reverse justify-center items-center">
        <p>{props.unit}</p>
        <div className="z-20 flex flex-col justify-center items-center">
          <SvgChevron rotate={"-rotate-90"} handler={() => updateCouter(1)} />
          <SvgChevron rotate={"rotate-90"} handler={() => updateCouter(2)} />
        </div>
        <input
          ref={counter}
          type="number"
          className="w-8 h-6 customInput rounded-md text-center text-red-600 font-extrabold"
          defaultValue={props.default ? props.default : 10}
          min={1}
          max={100}
        />
      </div>
    </div>
  );
}

const PluginUI = () => {
  const [tab, setTab] = useState(1);
  const [advance,setAdvance] = useState(false) 
  return (
    <>
      <img
        src={background}
        alt="Background"
        className="absolute -z-10 w-[360px] rounded-[10px]"
      />
      <div className="w-[360px] h-[640px] border-gray-700 border rounded-[10px] font-[grotesk] relative flex flex-col items-center justify-around overflow-hidden">
        <div className="">
          <h2 className="text-2xl capitalize p-4 underline">data type</h2>
          <Option content="name" key={"name"} />
          <Option content="User name" key={"full name"} />
          <Option content="paragraph" key={"paragraph"} />
        </div>
        <div className="flex flex-col h-24 justify-around">
          <h2 className="h-[29px] text-[24px] relative text-center ">
            welcome to <span className="text-[#54428E]">genName</span>
          </h2>
          <p className="relative w-[300px] font-[grotesk] text-[12px] text-[#505050] text-xs">
            “generate random user name ,age ,location ,qrcode ,sentences
            ,Qranverse ,BibleVerse ,Q&Aquestion ”
          </p>
        </div>
        <div className=" w-[360px] h-[130px] bg-white bottom-0 border-t-2 shad flex flex-col justify-end items-center">
          <button className="w-2/3 bg-[#4D7298] p-2 rounded-[6px] flex justify-center border-gray-500 border">
            <p className="text-xl">generate</p>
          </button>
          <p className="text-[#444444]">OR</p>
          <button className="w-2/3 bg-[#54428E] p-2 rounded-[6px] flex justify-center border-gray-500 border"
          onClick={()=>{setAdvance(!advance)}}>
            <p className="text-xl">advance</p>
          </button>
        </div>
        <div className="absolute w-[360px] h-[640px] bg-black clip translate-x-full"></div>
        <div className={`absolute w-[360px] h-[640px] top-0 bg-slate-50 flex flex-col justify-center items-center transition-transform ${advance?"translate-x-0":"translate-x-full"}`}>
          <button className="absolute top-2 left-2" 
          onClick={()=>{setAdvance(!advance)}}
          >
            <div className="w-[25px] h-[25px] grid place-items-center relative top-0 left-0">
              <div className="absolute w-full h-1 rounded bg-black origin-center rotate-45"></div>
              <div className="absolute w-full h-1 rounded bg-black origin-center -rotate-45"></div> 
            </div>
          </button>
          <div className="w-[90%] h-[90%] bg-slate-50 flex flex-col justify-around items-center ">
            <h2 className="h-[29px] text-[24px] relative text-center text-[#54428E] font-semibold">
              genName
            </h2>
            <p className="relative w-[300px] font-[grotesk] text-[12px] text-[#505050] text-xs text-center">
              select the type of fill you want to generate
            </p>
            <div className="w-[90%] bg-[#4d73981f] h-11 gap-2 flex justify-center items-center rounded-[5px] relative">
              <button
                className="min-w-1/4 w-[48%] h-[90%] rounded-[5px] flex justify-center items-center z-20 overflow-hidden relative"
                onClick={() => {
                  setTab(1);
                }}
              >
                <div
                  className={`absolute bg-white w-full h-full transition-transform ${
                    tab == 1 ? "translate-x-0" : "translate-x-full"
                  }`}
                ></div>
                <p className="z-20">paragraph</p>
              </button>
              <button
                className="min-w-1/4 w-[48%] bg-gray-200 h-[90%] rounded-[5px] flex justify-center items-center z-20 overflow-hidden relative"
                onClick={() => {
                  setTab(2);
                }}
              >
                <div
                  className={`absolute bg-white w-full h-full transition-transform ${
                    tab == 2 ? "translate-x-0" : "-translate-x-full"
                  }`}
                ></div>
                <p className="z-20">name & detail</p>
              </button>
            </div>

            {tab == 1 ? (
              <div className="w-[304px] h-[269px] p-2 border-2 rounded-lg">
                <div className="flex flex-col justify-center items-center gap-2">
                  <SelectOption
                    content="Paragraph type"
                    options={["verse", "lorem", "bible", "quran"]}
                  />
                  <SimpleOption
                    content="max word size"
                    unit="letters"
                    position={2}
                    default={10}
                  />
                  <SimpleOption
                    content="min word size"
                    unit="letters"
                    position={3}
                    default={1}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}

            {tab == 2 ? (
              <div className="w-[304px] h-[269px] p-2 border-2 rounded-lg">
                <div className="flex flex-col justify-center items-center gap-2">
                  <SelectOption
                    content="detail type"
                    options={[
                      "name",
                      "userName",
                      "pseudo",
                      "film actor",
                      "film name",
                      "serie name",
                    ]}
                  />
                  <SimpleOption
                    content="detail size"
                    unit="letters"
                    position={2}
                    default={10}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}

            {/* exemple */}
            <div className="w-[304px] ">
              <p className="font-bold font-[grotesk] underline">Exemple</p>
              <div>
                <p className="p-2 text-wrap truncate w-full h-28 rounded text-[#4d4d4d] border-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore, corporis! Adipisci, quisquam deleniti explicabo quos
                  dolores delectus molestiae sequi quis ipsum, numquam iusto
                  provident incidunt minima voluptatum mollitia est voluptatem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PluginUI;
