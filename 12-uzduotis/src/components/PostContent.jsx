export default function PostContent(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.newText}
      </p>
    </div>
  );
}
