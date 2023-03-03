import { Props } from "../../Home/molecules/Companies";
import { ReactComponent as ArrowUp } from "../../../assets/svg/arrowup.svg";
const Account = ({ classname }: Props) => {
  return (
    <div className={classname}>
      <div></div>
      <h2>Checking Accounts</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio fuga
        ipsum dolor ea sed sapiente inventore reprehenderit culpa, soluta
        molestiae.
      </p>
      <ArrowUp />
    </div>
  );
};

export default Account;
