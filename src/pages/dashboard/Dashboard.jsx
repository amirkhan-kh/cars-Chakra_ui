import { Box } from "@chakra-ui/react";
import { carsData } from "../../mock/cars";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import "./_dash.scss";
import Example from '../../components/layout/char'; 

const Dashboard = () => {
  const data = carsData.slice(0, 1);
  return (
    <div className=" w-[100%]  flex  mt-[-95px] " id="Dashboard">
      <Box
        bg="white"
        w="50%"
        h="82vh"
        p="15"
        color="black"
        boxShadow="sm"
        rounded="lg"
        className="rounded-xl flex flex-col justify-between"
      >
        <div className="mb-4">
          <h2 className="text-[20px] font-semibold mb-1">Details Rental</h2>
          <iframe
            className="w-[100%] h-[130px] rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.337730891518!2d69.20999407519955!3d41.279753602665956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a3e8934c255%3A0xc859c550a6c5c35f!2sMilliy%20stadioni!5e0!3m2!1sru!2s!4v1726174026767!5m2!1sru!2s"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        {data.map((item, index) => {
          return (
            <div
              className="flex gap-3 items-center justify-between mb-2"
              key={index}
            >
              <div className="flex gap-3 ">
                <div className="bg-indigo-600 py-6 px-2 rounded-lg">
                  <img
                    className="w-[150px] h-[40px] object-cover"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-[26px] font-bold">{item.name}</h2>
                  <p>{item.type}</p>
                </div>
              </div>
              <h2>#9761</h2>
            </div>
          );
        })}
        <div className="flex items-center gap-2">
          <div className="bg-indigo-500 rounded-[50%] p-1 w-4 h-4 flex items-center justify-center">
            <div className="bg-indigo-800 rounded-[50%] p-1 w-3 h-2"></div>
          </div>

          <h2 className="text-[20px] font-semibold text-black">Pick-Up</h2>
        </div>
        <div className="flex mb-2">
          <Accordion
            allowToggle
            className="flex w-full items-center justify-between gap-1"
          >
            <AccordionItem>
              <h1 className="text-[17px] font-semibold text-black">
                Locations
              </h1>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <h3 className="text-[14px] text-neutral-400">
                      Kota Semarang
                    </h3>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h1 className="text-[17px] font-semibold text-black">Date</h1>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <h3 className="text-[14px] text-neutral-400">
                      20 July 2022
                    </h3>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1 className="text-[17px] font-semibold text-black">Time</h1>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <h3 className="text-[14px] text-neutral-400">07.00</h3>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-indigo-500 rounded-[50%] p-1 w-4 h-4 flex items-center justify-center">
            <div className="bg-indigo-800 rounded-[50%] p-1 w-3 h-2"></div>
          </div>

          <h2 className="text-[20px] font-semibold text-black">Drop - Off</h2>
        </div>
        <div className="flex mb-2">
          <Accordion
            allowToggle
            className="flex w-full items-center justify-between gap-1"
          >
            <AccordionItem>
              <h1 className="text-[17px] font-semibold text-black">
                Locations
              </h1>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <h3 className="text-[14px] text-neutral-400">
                      Kota Semarang
                    </h3>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h1 className="text-[17px] font-semibold text-black">Date</h1>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <h3 className="text-[14px] text-neutral-400">
                      20 July 2022
                    </h3>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1 className="text-[17px] font-semibold text-black">Time</h1>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <h3 className="text-[14px] text-neutral-400">07.00</h3>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[20px] font-semibold">Total Rental Price</h2>
            <p className="text-[14px] text-[#6b6a6a] font-normal">
              Overall price and includes rental discount
            </p>
          </div>
          <h1 className="text-[28px] font-bold">$80.00</h1>
        </div>
      </Box>


      <div className="flex flex-col gap-4 w-[50%]">
        <Box bg="white" h="41vh" p="15"  color="black" boxShadow="sm" rounded="md" className="rounded-lg">
          <Example/>
        </Box>
        <Box bg="white" h="38.5vh" p="5" color="black" boxShadow="sm" rounded="md">
        <h1 className="text-[20px] font-semibold text-black absolute">Recent Transaction</h1>
          <div id="scroll" >
          {
            carsData.map((item, index)=>{
              return(
                <div key={index} className="flex my-3 p-2 border-[1px] border-l-neutral-500">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <img className="w-[140px] h-[50px]" src={item.img} alt="" />
                      <div><h2 className="text-[18px] font-bold text-black" >{item.name}</h2><p>{item.type}</p></div>
                    </div>
                    <div>
                      <p className="text-[14px] font-normal text-black">22 May</p>
                      <h2 className="text-[14px] font-normal text-black">{item.price}</h2>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </Box>
        </div>
    </div>
  );
};

export default Dashboard;
