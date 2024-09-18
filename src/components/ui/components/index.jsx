import { Select } from "@chakra-ui/react";
import car1 from "../../../assets/images/image 7 (1).png";
import car2 from "../../../assets/images/image 8.png";
import "./_slider.scss";
export const CarRentTop = () => {
  return (
    <>
      <div className="carRientTopParent">
        <div className="carRientTopChild">
          <div className="leftText">
            <div className="leftCard">
              <div className="leftImg">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </div>
            <div className="text">
              <h2>
                The Best Platform
                for Car Rental
              </h2>
              <p>
                Ease of doing a car rental safely and <br />
                reliably. Of course at a low price.
              </p>
              <button>Rental Car</button>
              <img src={car1} alt="" />
            </div>
          </div>
          <div className="rightText">
            <div className="rightCard">
              <div className="rightImg">
                <div className="p ms-1">
                  <div className="corner"></div>
                  <div className="corner"></div>
                  <div className="corner"></div>
                  <div className="corner"></div>
                  <div className="corner"></div>
                  <div className="corner"></div>
                  <div className="corner"></div>
                  <div className="corner"></div>
                </div>
                <div className="p ms-5">
                  <div className="corner"></div>
                  <div className="corner"></div>
                  <div className="corner"></div>
                  <div className="corner"></div>
                  <div className="corner"></div>
                  <div className="corner"></div>
                  <div className="corner"></div>
                  <div className="corner"></div>
                </div>
                <div className="p ms-1">
                  <div className="corner"></div>
                  <div className="corner"></div>
                  <div className="corner"></div>
                  <div className="corner"></div>
                  <div className="corner"></div>
                  <div className="corner"></div>
                  <div className="corner"></div>
                  <div className="corner"></div>
                </div>
              </div>
            </div>

            <div className="text2">
              <h2>
                Easy way to rent <br />a car at a low price
              </h2>
              <p>
                Providing cheap car rental services <br />
                and safe and comfortable facilities.
              </p>
              <button>Rental Car</button>
              <img src={car2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const CarRentSelect = () => {
  return (
    <>  
      <div className="parentSelect">
      <div className="action bg-white">
        <div className="flex items-center gap-2 rounded-[50%]">
          <div className="bg-[#3563E94D] w-4 h-4 rounded-[50%] flex items-center justify-center ">
            <div className="bg-[#3563E9] w-2 h-2 rounded-[50%]"></div>
          </div>
          <h2 className="text-[16px] font-semibold mb-4">Pick - Up</h2>
        </div>
        <div className="select">
          <div className="selectCard">
            <Select placeholder="Locations" color='#879ddf'>
              <option value="option1">England</option>
              <option value="option3">France</option>
              <option value="option3">Germany</option>
              <option value="option3">Italy</option>
              <option value="option3">Poland</option>
              <option value="option3">Russia</option>
              <option value="option3">Uzbekistan</option>
              <option value="option3">USA</option>
            </Select>
            <Select placeholder="Date" color='#879ddf'>
              <option value="option1">1</option>
              <option value="option2">2</option>
              <option value="option3">3</option>
              <option value="option3">4</option>
              <option value="option3">5</option>
            </Select>
            <Select placeholder="Time" color='#879ddf'>
              <option value="option1">09:00</option>
              <option value="option2">13:00</option>
              <option value="option3">15:00</option>
            </Select>
          </div>
        </div>
      </div>
      <button className=" w-14 h-14 bg-[#3563E9] rounded-[10px] text-[#fff] hidden max-[430px]:block">
            <i className="bi bi-arrow-down-up"></i>
      </button>
      <div className="action bg-white ">
        <div className="flex items-center gap-2 rounded-[50%]">
          <div className="bg-[#3563E94D] w-4 h-4 rounded-[50%] flex items-center justify-center ">
            <div className="bg-[#3563E9] w-2 h-2 rounded-[50%]"></div>
          </div>
          <h2 className="text-[16px] font-semibold mb-4">Pick - Up</h2>
        </div>
        <div className="select">
          <div className="selectCard">
            <Select placeholder="Locations" color='#879ddf'>
              <option value="option1">England</option>
              <option value="option3">France</option>
              <option value="option3">Germany</option>
              <option value="option3">Italy</option>
              <option value="option3">Poland</option>
              <option value="option3">Russia</option>
              <option value="option3">Uzbekistan</option>
              <option value="option3">USA</option>
            </Select>
            <Select placeholder="Date" color='#879ddf'>
              <option value="option1">1</option>
              <option value="option2">2</option>
              <option value="option3">3</option>
              <option value="option3">4</option>
              <option value="option3">5</option>
            </Select>
            <Select placeholder="Time" color='#879ddf'>
              <option value="option1">09:00</option>
              <option value="option2">13:00</option>
              <option value="option3">15:00</option>
            </Select>
          </div>
          
        </div>
      </div>
      </div>
    </>
  );
};
