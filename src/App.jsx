import { useState } from "react";
import { FaLightbulb  } from "react-icons/fa";

const App = () => {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark" : "" }>
      <div className="bg-white dark:bg-primary-dark min-h-screen "> 
        <h1 className=" dark:text-white text-4xl text-center pt-32 pb-10">
          Counter App
        </h1>
        <p className="text-xl dark:text-white text-center">
          Counter Value : {count}
        </p>

        <div className="text-center py-10">
          <button
            className="px-4 mx-2 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200"
            type="button"
            onClick={() => setCount(0)}
          >
            Reset
          </button>

          <button
            className="px-4 mx-2 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200"
            type="button"
            onClick={() => setCount(prev => prev + 1)}
          >
            Increment
          </button>

          <button
            className="px-4 mx-2 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200"
            type="button"
            onClick={() => setCount(prev => prev - 1)}
          >
            Decrement
          </button>
        </div>

        <div className="text-center">
          <button type="button" onClick={() => setIsDark(prev => !prev)}>
            <FaLightbulb className="dark:text-white text-5xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
