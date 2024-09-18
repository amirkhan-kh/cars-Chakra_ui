import { AiFillHeart } from "react-icons/ai";
import { Container } from "./Container";
import avatar from "../../assets/icons/Profil.svg";
import "./_header.scss";
const Header = () => {
  return (
    <>
      <header>
        <Container>
          <div className="top">
          <nav>
            <h2>MORENT</h2>
          </nav>
          <div className="navigate">
            <form>
              <i className="bi bi-search"></i>
              <input type="text" placeholder="Search something here" />
              <i className="bi bi-sliders"></i>
            </form>

            <ul>
              <li>
                <AiFillHeart className=" border-solid  border-[1px] border-gray-300 rounded-[50%] w-[33px] h-[35px] p-1" />
              </li>
              <li>
                <i className="bi bi-bell-fill   border-solid border-[1px] border-gray-300 rounded-[50%] px-3  py-2"></i>
              </li>
              <li>
                <i className="bi bi-gear-fill   border-solid border-[1px] border-gray-300 rounded-[50%]  px-3 py-2"></i>
              </li>
              
            </ul>
          </div>
          <img className=" border-solid border-[1px] border-gray-300 rounded-[50%] p-[2px]" src={avatar} alt=""/>
          </div>
        </Container>
      </header>
      <div className="headerbottom ">
        <Container>
        <div className="bottomParent">
          <form>
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Search something here" />
          </form>
          <button>  <i className="bi bi-sliders"></i></button>
        </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
