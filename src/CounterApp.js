 import React, {useState} from 'react';

 const CounterApp = () =>{
    const [counter, setCounter] = useState(0);

    const incrementCounter = () =>{
        setCounter(counter+1)
    }

     return(
         <div>
              <h1>Has hecho click {counter} veces</h1>
             <button onClick={incrementCounter}>
                 Hazme click
             </button>
         </div>
     );
 }

 export default CounterApp;