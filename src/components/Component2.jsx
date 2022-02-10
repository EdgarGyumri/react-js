import { useReducer } from "react"

export default function Component2({ color, name }) {
    const data = useContext(ColorContext)
    return (
        <div>
            <h1>Component 2</h1>
            Data: {data}
        </div>
    )
}