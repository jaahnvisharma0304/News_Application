import image from '../alt.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px", minHeight: "400px" }}>
      <img src={src ? src : image} style={{ height: "200px", width: "100%", objectFit: "cover" }} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) + "..." : "Major Event Unfolding Now! Something significant just happened, and you won't want to miss it."}</p>
        <a href={url} className="btn btn-primary mt-auto">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;
