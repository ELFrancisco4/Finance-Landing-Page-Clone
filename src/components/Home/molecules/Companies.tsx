import { ReactComponent as Adobe } from "../../../assets/svg/adobe.svg";
import { ReactComponent as WebFlow } from "../../../assets/svg/webflow.svg";
import { ReactComponent as Google } from "../../../assets/svg/google.svg";
import { ReactComponent as Amazon } from "../../../assets/svg/amazon.svg";
import { ReactComponent as PayPal } from "../../../assets/svg/paypal.svg";

export type Props = {
  classname: string
}

const Companies = ({ classname }: Props) => {
  return (
    <div className={classname}>
      <PayPal />
      <WebFlow />
      <Google />
      <Amazon />
      <Adobe />
    </div>
  );
};

export default Companies;
