import {useRef, useEffect, MutableRefObject } from 'react'
/*
  Custom Hook
*/
export function useOuterClick(callback:Function) {
    const innerRef = useRef<HTMLElement>(null) 
    const callbackRef = useRef() as MutableRefObject<Function | null>;
  
    // set current callback in ref, before second useEffect uses it
    useEffect(() => { // useEffect wrapper to be safe for concurrent mode
        // if (callbackRef.current) {
            callbackRef.current = callback;
        // }
    });
  
    useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
  
      // read most recent callback and innerRef dom node from refs
      function handleClick(e:MouseEvent) {
        if (e.target instanceof HTMLElement &&
          callbackRef.current &&
          !innerRef.current?.contains(e.target)
        ) {
          callbackRef.current(e);
        }
      }
    }, []); // no need for callback + innerRef dep
    
    return innerRef; // return ref; client can omit `useRef`
  }
  
  // Sample usage
  /*
  Usage 
*/
// const Client = () => {
//     const [counter, setCounter] = useState(0);
//     const innerRef = useOuterClick(e => {
//       // counter state is up-to-date, when handler is called
//       alert(`Clicked outside! Increment counter to ${counter + 1}`);
//       setCounter(c => c + 1);
//     });
//     return (
//       <div>
//         <p>Click outside!</p>
//         <div id="container" ref={innerRef}>
//           Inside, counter: {counter}
//         </div>
//       </div>
//     );
//   };