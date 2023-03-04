import "../../../scss/components/benefits.scss";
import bg from "../../../assets/images/worldmap.svg";
const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefits_details">
        <span>Benefits</span>
        <h2>
          We have many users all over the <span>world</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam
          maxime, doloremque nesciunt perferendis hic debitis quisquam
          consequuntur blanditiis tempora!
        </p>

        <div className="benefits_metrics">
          <div>
            <h3>10M+</h3>
            <span>Active Users</span>
          </div>
          <div>
            <h3>30+</h3>

            <span>Countries</span>
          </div>
          <div>
            <h3>$50M+</h3>

            <span>Transactions</span>
          </div>
        </div>
      </div>

      <img src={bg} alt={bg} />
    </div>
  );
};

export default Benefits;
