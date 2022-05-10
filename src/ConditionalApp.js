import React, {useState} from "react";

const ConditionalApp = () =>{
    const [condition, setCondition] = useState(true);

    return(
        <div>
        {
            condition
            ? <h1> El estado esta en True</h1>
            : <h1>El estado esta en False  </h1>
        }
        <button onClick={() => setCondition(!condition)}>
                Alterar
            </button>
        </div>
    )
}
export default ConditionalApp;