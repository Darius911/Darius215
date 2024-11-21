
import Child from "./Child";
export default function Parent() {
    const itemsMasyvas = ["react", "JavaScript", "Css"];


return (
    <div>
        <h1>Items list</h1>
        
        <Child itemsPropsas={itemsMasyvas} />
    </div>
);
}
