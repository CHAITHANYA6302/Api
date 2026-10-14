import { useState, useEffect } from "react";

function LifecycleExample() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Component mounted");

    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup when the component is removed
    return () => {
      clearInterval(timer);
      console.log("Component unmounted");
    };
  }, []);

  return (
    <div>
      <h2>Stopwatch</h2>
      <h1>{seconds} seconds</h1>
    </div>
  );
}

export default LifecycleExample;