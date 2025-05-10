import { useRef, useState } from "react";

const Service = () => {
  const [myNum, setMyNum] = useState(0);
  const inputRef = useRef<HTMLInputElement>();
  console.log(inputRef);
  const handleInputRef = () => {
    inputRef.current.className = "bg-blue-50 border";
  };

  // Usage of ref variable as a value placeholder
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const intervalRef = useRef(0);
  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };
  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  return (
    <div className="custom-body">
      <pre className="text-gray-700 md:hover:text-primary-700 dark:text-gray-200">
        Usage of useRef (used to store reference and doesn't re-render)
      </pre>
      <input
        ref={inputRef}
        type="number"
        value="{myNum}"
        onChange={(e) => setMyNum(parseInt(e.target.value))}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <pre className="text-gray-700 md:hover:text-primary-700 dark:text-gray-200">
        MyNum:{myNum}
      </pre>
      <button onClick={handleInputRef} className="custom-button">
        Click Me
      </button>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Time passed:{secondsPassed.toFixed(3)}
        </p>
      </div>
      <button onClick={handleStart} className="custom-button">
        Start
      </button>
      <button onClick={handleStop} className="custom-button">
        Stop
      </button>
    </div>
  );
};
export default Service;
