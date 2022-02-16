import "./style.css";

export default function Search({ onChange }) {
  return (
    <div className="search">
      <img src="/images/Filter.png" alt="" />
      <input
        onChange={onChange}
        type="text"
        placeholder="Search for a service"
      />

      <img src="/images/Voice.png" alt="" />
    </div>
  );
}
