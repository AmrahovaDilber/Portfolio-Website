const Box = ({ id, title, children }) => {
  return (
    <section id={id} className="box">
      <h1>{title}</h1>
      <div className="box-content">{children}</div>
    </section>
  );
};

export default Box;
