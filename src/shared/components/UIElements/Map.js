import "./Map.css";

function Map(props) {
  return (
    <div className={`map ${props.className}`} style={props.style}>
      <iframe
        src={`https://www.google.com/maps?q=${props.title} ${props.address}&output=embed`}
        title="location"
        width="100%"
        height="250"
      ></iframe>
    </div>
  );
}

export default Map;
