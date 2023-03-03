import "../../../scss/pages/home.scss";
import Button from "../atoms/Button";
import Companies from "./Companies";
import img from "../../../assets/images/Debit-Card.jpg";
const Home = () => {
  return (
    <div className="home">
      <div className="home_details">
        <div className="home_details_text">
          <span>Welcome! Future Platform!</span>
          <h1>
            The World's Most Modern Card <span>Platform</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            rerum ex corporis perferendis repudiandae illum. Provident rerum
            laudantium id amet.
          </p>
          <Button />
        </div>
        <div className="image_container">
          <img src={img} alt={img} />
          
        </div>
      </div>

      <Companies classname="companies" />
    </div>
  );
};

export default Home;
