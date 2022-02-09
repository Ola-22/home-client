export default function Group({ src, title }) {
  return (
    <>
      <div className="Group">
        <div>
          <div className="Rectangle" />
          <img src={src} alt="" />
        </div>
        <h4>{title}</h4>
      </div>
    </>
  );
}
