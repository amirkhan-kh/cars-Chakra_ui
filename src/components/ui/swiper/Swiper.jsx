import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { carsData } from "../../../mock/cars";
import "./_swiper.scss";
export const CardSwiper = ({ data, like, disLike, handleLike, likedItems }) => {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={4}
      pagination={{ clickable: true }}
      breakpoints={{
        430: {
          slidesPerView: 1, 
        },
        768: {
          slidesPerView: 2, 
        },
        1024: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation, Pagination, Scrollbar]}
      className="mySwiper"
    >
      {carsData.map((item, index) => (
        <SwiperSlide key={index} className='sw'>
          <div className="gridContainerTop">
            <div className="gridItemTop">
              <div className="cardIntro">
                <div>
                  <h3 className="text-[20px] font-bold">{item.name}</h3>
                  <p className="text-[14px] font-bold text-[#90A3BF]">
                    {item.type}
                  </p>
                </div>
                <span>
                  <button
                    onClick={() => handleLike(index)}
                    style={{
                      color: likedItems[index] ? "white" : "black",
                      borderRadius: "5px",
                      cursor: "pointer",
                      width: "22px",
                      height: "22px",
                    }}
                  >
                    {likedItems[index] ? (
                      <img src={like} alt="liked" />
                    ) : (
                      <img src={disLike} alt="disliked" />
                    )}
                  </button>
                </span>
              </div>
              <div className="img overflow-hidden">
                <img className="py-12 px-3 object-cover" src={item.img} alt={item.name} />
                <div className="hoverAction ms-3"></div>
              </div>

              <div className="status flex items-center justify-between w-full gap-2 mb-3">
                <div className="flex gap-1 text-[14px] text-[#90A3BF] font-medium items-center">
                  <i className="bi bi-fuel-pump-fill"></i>
                  <p>{item.oil}</p>
                </div>
                <div className="flex gap-1 text-[14px] text-[#90A3BF] font-medium items-center">
                  <i className="bi bi-vinyl"></i>
                  <p>{item.slinder}</p>
                </div>
                <div className="flex gap-1 text-[14px] text-[#90A3BF] font-medium items-center">
                  <i className="bi bi-people-fill"></i>
                  <p>{item.human}</p>
                </div>
              </div>
              <div  className="flex items-center w-full justify-between">
                <h2 id="h2">
                  {item.price}{" "}
                  <span className="text-[17px] text-[#90A3BF] font-medium">
                    day
                  </span>
                </h2>
                <button id="btn1" className="bg-[#3563E9] text-white text-[15px] font-semibold py-2 px-2 rounded">
                  {item.btn}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
