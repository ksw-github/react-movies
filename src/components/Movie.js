import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}){
  const navigate = useNavigate();
  const detailPage = () => {
    navigate(`/movie/${id}`);
  };

  return(
    <div className="text-center">
      <div className="flex flex-col items-center">
        <img src={coverImg} alt={title} className="rounded-lg cursor-pointer shadow-md border border-[#99999980]" onClick={detailPage} />
        <Link to={`/movie/${id}`} className="my-2">
          <h2 className="font-bold">{title}</h2>
        </Link>
      </div>
    </div>
)}

Movie.protoTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;