import fron from "../../assets/images/fon.jpg";
import fon2 from "../../assets/images/fon2.jpg";
import car1 from "../../assets/images/Car (1).png";
import car2 from "../../assets/images/Car (2).png";
import { Footer } from '../../components/layout/Footer'
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { carsData } from "../../mock/cars";
const CarRent = () => {
  return (
    <div className=" h-[100vh] container ">
      <div className="container  flex justify-center translate-y-24">
        <div className="flex items-center gap-[100px] text-white mb-4 ">
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
              <button className="bg-indigo-700 px-3 py-2">Rental Car</button>
              <img className="ms-[200px] mt-[-50px]" src={car1} alt="" />
            </div>
          </div>

          <div className="relative">
            <img className="w-[540px] h-[260px]" src={fon2} alt="" />
            <div className="absolute mt-[-44%] ms-4 ">
              <h2 className="text-[26px] mb-2 font-semibold">
                Easy way to rent a <br />
                car at a low price
              </h2>
              <p className="mb-4">
                Ease of doing a car rental safely and reliably. <br />
                Of course at a low price.
              </p>
              <button className="bg-indigo-400 px-3 py-2">Rental Car</button>
              <img className="ms-[200px] mt-[-50px]" src={car2} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex  pt-[120px] w-full justify-between px-2 mb-8">
        <div className="flex shadow-md w-[46%] p-6 rounded-lg bg-white">
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
        <div className="flex items-center">
          <div className="flex justify-center text-[20px] rounded-lg items-center text-white bg-indigo-700 p-6">
            <i className="bi bi-arrow-down-up"></i>
          </div>
        </div>
        <div className="flex bg-white shadow-md w-[46%] p-6 rounded-lg">
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
      </div>

      <section className="mb-[40px] min-h-min">
        <div className="flex items-center justify-between px-4 mb-8">
          <h2 className="text-[18px] font-semibold hover:text-indigo-600">
            Popular Car
          </h2>
          <h2 className="text-[18px] font-semibold hover:text-indigo-600">
            View All
          </h2>
        </div>

        <Grid templateColumns="repeat(4, 1fr)" gap="32">
          {
            carsData.map((item,index)=>{
              return(
                <GridItem key={index} w="100%" h="368" bg="white" className="shadow-md rounded-lg p-6 flex flex-col justify-between">
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
      </section>

     <div >
      <Footer/>
     </div>
    </div>
  );
};

export default CarRent;
