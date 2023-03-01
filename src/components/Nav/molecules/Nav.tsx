import "../../../scss/components/nav.scss";
import {ReactComponent as Logo} from '../../../assets/svg/logo.svg'
import {ReactComponent as ArrowRight} from '../../../assets/svg/arrowright.svg'
const Nav = () => {
  return (
    <nav className="nav">
      <Logo/>
      <ul>
        <li>
          <a href="#">Why FinanceX</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Update</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <div className="signup">
        <input type="button"value={"Sign Up"} /> <ArrowRight/>
      </div>
        
    </nav>
  );
};

export default Nav;
