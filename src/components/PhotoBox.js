import photo from "../assets/images/myimage.jpeg";
import "../assets/styles/PhotoBox.scss";

const PhotoBox = ({ name, title, description, className }) => {
  return (
    <section className="photo-box">
      <img src={photo} alt="img" className={className} />
      <h2 className="photo-box__class1">{name}</h2>
      {title && <h2 className="photo-box__class2">{title}</h2>}
      {description && <p>{description}</p>}
    </section>
  );
};

export default PhotoBox;
