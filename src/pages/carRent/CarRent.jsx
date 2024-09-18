import { CarRentTop } from "../../components/ui/components/index";
import { CarRentSelect } from "../../components/ui/components/index";
import { Footer } from "../../components/layout/Footer";
import { Grid, GridItem } from "@chakra-ui/react";
import { carsData } from "../../mock/cars";
import like from "../../assets/images/love (1).png";
import disLike from "../../assets/images/love (2).png";
import "./_carRient.scss";
import { useState } from "react";
import { CardSwiper } from "../../components/ui/swiper/Swiper";
const CarRent = () => {
  const dataPopular = carsData.slice(-4);
  const [likedItems, setLikedItems] = useState(
    Array(dataPopular.length).fill(false)
  );

  const handleLike = (index) => {
    const updatedLikes = [...likedItems];
    updatedLikes[index] = !updatedLikes[index];
    setLikedItems(updatedLikes);
  };
  return (
    <div className="container ">
      <CarRentTop />
      <CarRentSelect />
      <div className="mb-[40px] min-h-min">
        <div className="flex items-center justify-between px-4 mb-8  ">
          <h2 className="text-[18px] text-[#8d8c8c] font-semibold hover:text-indigo-600">
            Popular Car
          </h2>
          <h2 className="text-[18px] text-[#888585] font-semibold hover:text-indigo-600">
            View All
          </h2>
        </div>

        <CardSwiper
          data={dataPopular}
          like={like}
          disLike={disLike}
          handleLike={handleLike}
          likedItems={likedItems}
        />
        <div className="flex items-center justify-between px-4 mb-8 mb-7">
          <h2 className="text-[18px] text-[#949191] font-semibold hover:text-indigo-600">
            Recomendation Car
          </h2>
        </div>
        <Grid className="gridContainer">
          {carsData.map((item, index) => {
            return (
              <GridItem
                key={index}
                w="100%"
                h="368"
                bg="white"
                className="gridItem"
              >
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
                        backgroundColor: likedItems[index],
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
                <div className="body">
                  <div className="img overflow-hidden">
                    <img
                      className=""
                      src={item.img}
                      alt={item.name}
                    />
                    <div className="hoverAction ms-3"></div>
                  </div>
                  <div className="func">
                    <div className="flex gap-1 text-[14px] text-[#90A3BF] font-medium items-center">
                      <i className="bi bi-fuel-pump-fill"></i>
                      {item.oil}
                    </div>
                    <div className="flex gap-1 text-[14px] text-[#90A3BF] font-medium items-center">
                      <i className="bi bi-vinyl"></i>
                      {item.slinder}
                    </div>
                    <div className="flex gap-1 text-[14px] text-[#90A3BF] font-medium items-center">
                      <i className="bi bi-people-fill"></i>
                      {item.human}
                    </div>
                  </div>
                  </div>
                  <div className="flex items-center w-full justify-between">
                    <h2 className="text-[24px] font-bold">
                      {item.price}{" "}
                      <span className="text-[17px] text-[#90A3BF] font-medium ">
                        day
                      </span>
                    </h2>
                    <button className="bg-[#3563E9] text-white text-[15px] font-semibold py-2 px-2 rounded">
                      {item.btn}
                    </button>
                  </div>
              </GridItem>
            );
          })}
        </Grid>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CarRent;
