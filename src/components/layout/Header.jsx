import { AiFillHeart } from "react-icons/ai";
import { Container } from "./Container";
import avatar from '../../assets/icons/Profil.svg'
import "./_header.scss";
const Header = () => {
  return (
    <header className="py-4 px-10 flex absolute bg-white">
      <Container className=" flex items-center gap-[64px] ">
        <nav>
          <h2 className="text-[#3563E9] text-[32px] font-bold">MORENT</h2>
        </nav>
        <div className="flex items-center justify-between w-[100%]">
          <form>
            <div className="flex items-center gap-4">
              <i className="bi bi-search"></i>
              <input type="text" placeholder="Search something here" />
            </div>
            <i className="bi bi-sliders"></i>
          </form>

          <ul className="flex items-center gap-5">
            <li>
              <AiFillHeart className=" border-solid border-[1px] border-gray-300 rounded-[50%] w-7 h-7 p-1" />
            </li>
            <li>
              <i className="bi bi-bell-fill border-solid border-[1px] border-gray-300 rounded-[50%] w-10  p-[2px]"></i>
            </li>
            <li>
              <i className="bi bi-gear-fill border-solid border-[1px] border-gray-300 rounded-[50%]  p-[2px]"></i>
            </li>
            <li><img className=" border-solid border-[1px] border-gray-300 rounded-[50%] p-[2px]" src={avatar} alt=""/></li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
