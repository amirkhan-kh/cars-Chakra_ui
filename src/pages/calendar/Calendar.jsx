import { carsData } from "../../mock/cars";
import { Grid, GridItem } from '@chakra-ui/react'
import { useState } from 'react';
import { asideMock } from '../../mock/asideMock'
const Calendar = () => {
  const [rangeValue, setRangeValue] = useState(100.0);
  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };
  return (
    <div className="container ">
      <div className="flex items-start gap-6">
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
      <div className="container  pt-28 mx-auto w-full h-[100vh]">
        <Grid templateColumns="repeat(3, 1fr)" gap={6} >
          {
            carsData.map((item,index)=>{
              return(
                <GridItem key={index} w="100%" h="368" bg="white" className="shadow-md rounded-lg p-6  flex flex-col justify-between">
                  <div className="flex items-start justify-between w-full">
                    <div>
                      <h3 className="text-[20px] font-bold">{item.name}</h3>
                      <p className="text-[14px] font-bold text-[#90A3BF]">{item.type}</p>
                    </div>
                    <span><button><img className="w-6 h-6" src={item.stat} alt="" /></button></span>
                  </div>
                  <img className="py-12 px-3 object-cover" src={item.img} alt="" />
                  <div className="flex items-center justify-between w-full gap-2 mb-3">
                    <div className="flex gap-1 text-[14px] text-[#90A3BF] font-medium items-center"> <i className="bi bi-fuel-pump-fill"></i>{item.oil}</div>
                    <div className="flex gap-1 text-[14px] text-[#90A3BF] font-medium items-center"> <i className="bi bi-vinyl"></i>{item.slinder}</div>
                    <div className="flex gap-1 text-[14px] text-[#90A3BF] font-medium items-center"> <i className="bi bi-people-fill"></i>{item.human}</div>
                  </div>
                  <div className="flex items-center w-full justify-between">
                    <h2 className="text-[24px] font-bold">{item.price} <span className="text-[17px] text-[#90A3BF] font-medium ">day</span></h2>
                    <button className="bg-[#3563E9] text-white text-[15px] font-semibold py-2 px-2 rounded">{item.btn}</button>
                  </div>
                </GridItem>
              )
            })
          }
        </Grid>
      </div>
      <button>fqfqwfqwqf</button>
      </div>
    </div>
  );
};

export default Calendar;
