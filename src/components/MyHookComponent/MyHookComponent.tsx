import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export default function MyHookComponent() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timer>();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const countPlus5 = useMemo(() => count + 5, [count]);

  const handleStopClick = useCallback(() => {
    const intervalId = intervalRef.current;
    clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    intervalRef.current = intervalId;

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  return (
    <>
      <h2>Count</h2>
      <div>{count}</div>
      <h2>Count + 5</h2>
      <div>{countPlus5}</div>
      <button ref={buttonRef} onClick={handleStopClick}>
        Stop Interval
      </button>
    </>
  );
}
