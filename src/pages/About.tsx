import { useEffect, useMemo, useState } from "react";

const About = () => {
  console.log("Rendering about page");
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    // Dont' get called when number doesn't change
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    // when you want the same object instead of re-rendering and create a new referrence of themeStyles
    console.log("Theme style", dark);
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme styles changed");
  }, [themeStyles]);

  function slowFunction(num: number) {
    console.log("Calling slow function");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }
  return (
    <div className="custom-body">
      <pre className="text-gray-700 md:hover:text-primary-700 dark:text-gray-200">
        Usage of useMemo (open devtools for proper visualization)
      </pre>
      <div>
        <label
          htmlFor="counter"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Counter
        </label>
        <input
          type="number"
          id="counter"
          value={number}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button
          type="button"
          className="custom-button"
          onClick={() => setDark((prev) => !prev)}
        >
          Change Theme
        </button>
        <div style={themeStyles}>{doubleNumber}</div>
      </div>
    </div>
  );
};
export default About;
