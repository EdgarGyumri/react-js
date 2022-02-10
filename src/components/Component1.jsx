import Component2 from "./Component2";

export default function Component1({color}) {
    return (
        <div>
            <h1>Component 1</h1>
            <Component2 color={color} name="James" />
        </div>
    )
}