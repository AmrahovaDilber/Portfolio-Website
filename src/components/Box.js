import "../assets/styles/Box.scss";

const Box = ({ id, title, content }) => {
  return (
    <section id={id}  >
      <h1>{title}</h1>
      <p className="box-content">{content}</p>
    </section>
  );
};

export default Box;
