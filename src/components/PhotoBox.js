import photo from "../assets/images/myimage.jpeg";

const PhotoBox = ({ name, title, description, className, className2 }) => {
  return (
    <section className="photo-box">
      <img src={photo} alt="img" className={className} />
      <h2 className={className2}>{name}</h2>
      {title && <h2 className="photo-box__class2">{title}</h2>}
      {description && <p>{description}</p>}
    </section>
  );
};

export default PhotoBox;
