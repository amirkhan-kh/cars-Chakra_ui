import { useState } from "react";
import { asideMock } from "../../mock/asideMock";
import { Box, Image} from "@chakra-ui/react";
import car1 from "../../assets/images/Car (1).png";
import fron from "../../assets/images/fon.jpg";
import v1 from '../../assets/images/View 1.png'
import v2 from '../../assets/images/View 2.png'
import v3 from '../../assets/images/Car (6).png'
import love from '../../assets/icons/favorite.png'
const Insight = () => {
  const [rangeValue, setRangeValue] = useState(100.0);
  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };
  return (
    <div className="container flex">
      <div className="">
        <aside className="bg-white w-[210px] h-[100vh]">
          <ul className="mb-2">
            <li>TYPE</li>
            {asideMock.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-2 text-black">
                  <input type="checkbox" />
                  {item.name} <h2 className="text-slate-400">{item.stat}</h2>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col">
            <input
              type="range"
              step="1"
              min="1"
              max="100.00"
              value={rangeValue}
              onChange={handleRangeChange}
            />
            <span>${rangeValue}.00</span>
          </div>
        </aside>
      </div>

      <div className=" w-full p-6">
        <div className="flex items-center pt-20">
          <Box w="100%" color="black" h="400px" display="flex" gap="32">

            <Box w="50%"  h="100%" className="rounded-lg flex flex-col text-white">
            <div className="relative ">
            <img className="w-[540px] h-[260px]" src={fron} alt="" />
            <div className="absolute mt-[-44%] ms-4 ">
              <h2 className="text-[26px] mb-2 font-semibold">
                The Best Platform <br />
                for Car Rental
              </h2>
              <p className="mb-4">
                Ease of doing a car rental safely and <br />
                reliably. Of course at a low price.
              </p>
              <img className="ms-[200px] mt-[-40px] " src={car1} alt="" />
            </div>
          </div>

              <Box display="flex" className="items-center justify-between text-black py-4">


                <Box w="100%" h="100%" className="rounded-md">
                  <Image src={v1} alt='Dan Abramov' className="w-36 h-28 object-cover"/>
                </Box>

                <Box w="100%" h="100%" className="rounded-md">
                  <Image src={v2} alt='Dan Abramov' className="w-36 h-28 object-cover"/>
                </Box>

                <Box w="100%" h="100%" bg="blue" className="rounded-md">
                  <Image src={v3} alt='Dan Abramov' className="w-36 h-28 object-contain"/>
                </Box>

              </Box>
            </Box>
            
            <Box w="50%" bg="white" h="100%" className="rounded-lg flex flex-col justify-between" p="15" >
              <div className="flex items-start justify-between w-full">
                <div>
                <h2 className="text-[32px] font-bold">Nissan GT - R</h2>
                <p className="text-[14px] font-light">440+ Reviewer</p>
                </div>
                <img className="w-6 h-6" src={love} alt="" />
              </div>
              <h3 className="text-[18px] font-normal text-[#596780] leading-8 mb-8">NISMO has become the embodiment of Nissan's <br />outstanding performance, inspired by the most <br />unforgiving proving ground, the "race track".
              </h3>
              <div className="flex items-center w-full justify-between text-[18px] font-normal text-[#596780]">
                <h3>Type Car</h3>
                <h3>Sport</h3>
                <h3>Capacity</h3>
                <h3>2 Person</h3>
              </div>
              <div className="flex items-center w-full justify-between text-[18px] font-normal text-[#596780]">
                <h3>Steering </h3>
                <h3>Manual</h3>
                <h3>Gasoline </h3>
                <h3>70L</h3>
              </div>
              <div className="flex items-center w-full justify-between">
                    <h2 className="text-[24px] font-bold">$80.00/ days <span className="text-[17px] text-[#90A3BF] font-medium ">day</span></h2>
                    <button className="bg-[#3563E9] text-white text-[15px] font-semibold py-2 px-3 rounded">Rent Now</button>
                  </div>
            </Box>

          </Box>
        </div>
      </div>
    </div>
  );
};

export default Insight;
