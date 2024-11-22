export default function IncrementButton({total, increment}) {
    
  return <button onClick={() => total(increment + 1)}>Increment</button>;
}
