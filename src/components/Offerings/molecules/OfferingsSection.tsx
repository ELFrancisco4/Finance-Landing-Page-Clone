import "../../../scss/components/offerings.scss";
import Button from "../../Home/atoms/Button";
import Account from "../atoms/Account";

const OfferingsSection = () => {
  return (
    <div className="container">
      <div className="container_services">
        <span>Our Services</span>
        <h1>
          Browse our offerings and <span>services</span>
        </h1>
        <Button />
      </div>
      <Account classname="account" />
      <Account classname="account" />
      <Account classname="account" />
      <Account classname="account" />
      <Account classname="account" />
    </div>
  );
};

export default OfferingsSection;
