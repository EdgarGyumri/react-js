import { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)
    const [multiply, setMultiply] = useState(0);

    useEffect(() => {
        setMultiply(count * 2)
    }, [count])

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <h1>multiply={multiply}</h1>
        </div>
    )
}