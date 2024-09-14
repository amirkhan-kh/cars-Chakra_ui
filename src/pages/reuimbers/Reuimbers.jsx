import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Footer } from "../../components/layout/Footer";
import visa from '../../assets/images/Visa.png';
import star from '../../assets/images/Review Star.png';
import auto from '../../assets/images/Car (1).png'
const Reuimbers = () => {
  return (
    <div className="container  w-full translate-y-[420px] px-6">
      <div className="flex items-start justify-between  w-full  ">
        <div className="w-[60%]">
          <div className="bg-white h-[320px] rounded-lg p-6 mb-5">
            <div className="flex items-end justify-between w-full mb-16">
              <h2 className="text-[20px] font-medium">
                Billing Info <br />
              </h2>
              <p className="text-[12px] font-semibold">Step 1 of 4</p>
            </div>
            <div className="flex w-full items-center  justify-between gap-6">
              <form className="flex flex-col w-full  gap-8">
                <label>
                  <input
                    className="bg-slate-300 rounded-md px-4 py-2 w-full"
                    type="text"
                    placeholder="Your name..."
                  />
                </label>
                <label className="w-full">
                  <input
                    className="bg-slate-300 rounded-md px-4 py-2 w-full"
                    type="text"
                    placeholder="Your adress"
                  />
                </label>
              </form>
              <form className="flex flex-col w-full gap-8">
                <label className="w-full">
                  <input
                    className="bg-slate-300 rounded-md px-4 py-2 w-full"
                    type="text"
                    placeholder="Phone number"
                  />
                </label>
                <label className="w-full">
                  <input
                    className="bg-slate-300 rounded-md px-4 py-2 w-full"
                    type="text"
                    placeholder="Town or city"
                  />
                </label>
              </form>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 mb-5">
            <div className="flex items-center justify-between gap-4 w-[100%] mb-5">
              <div className="w-[50%]">
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h1 className="mb-6 text-[20px] font-semibold">Locations</h1>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Section 1 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h1 className="mb-6 text-[20px] font-semibold">Time</h1>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Section 2 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="w-[50%] flex flex-col justify-between">
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h1 className="mb-6 text-[20px] font-semibold">Date</h1>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Section 1 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h1 className="mb-6 text-[20px] font-semibold">Date</h1>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Section 2 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 mb-6">
                  <div className="bg-indigo-500 rounded-[50%] p-1 w-4 h-4 flex items-center justify-center">
                    <div className="bg-indigo-800 rounded-[50%] p-1 w-3 h-2"></div>
                  </div>

                  <h2 className="text-[18px] font-semibold text-black">
                  Credit Card
                  </h2>
                </div>
                <img src={visa} alt="" className="mb-6"/>
              </div>
              <div className="flex justify-between w-full h-28 py-8 gap-3 bg-slate-300 rounded-md p-3">
                <form className="  w-[100%] py-4">
                  <label>
                    <input
                      type="text"
                      placeholder="Card number"
                      className="w-full rounded-md px-2 py-1"
                    />
                  </label>
                </form>
                <form className=" w-[100%] py-4">
                  <label>
                    <input
                      type="text"
                      placeholder="DD / MM / YY"
                      className="w-full rounded-md px-2 py-1"
                    />
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 flex flex-col justify-between shadow-md rounded-md">
          <h2 className="text-[20px] font-semibold mb-6">Rental Summary <br /><span className="text-[14px] font-bold text-slate-500">
          Prices may change depending on the length of the <br />rental and the price of your rental car.
            </span></h2>
          <div className="flex gap-8 items-center">
            <img className="w-[142px] h-[58px]" src={auto} alt="" />
            <div>
            <h1>NissanGT-R</h1>
            <span><img src={star} alt="" />440+ Reviewer</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-[15px] font-[600] text-gray-500">
              <h2>Subtotal</h2>
              <h2>Tax</h2>
            </div>
            <div className="text-[20px] font-semibold ">
              <h2>$80.00</h2>
              <h2>$0</h2>
            </div>
          </div>
          <form className="bg-slate-300 rounded-md px-3 p-1 flex justify-between">
            <input type="text" placeholder="Apply promo code" className="bg-transparent" />
            <span>Apply now</span>
          </form>
          <div className="flex items-center justify-between">
            <h1 className="text-[21px] font-semibold">Total Rental Price <br /><span className="text-[12px] text-gray-500">Overall price and includes rental discount</span></h1>
            <h1 className="text-[21px] font-semibold">$80.00</h1>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Reuimbers;
