import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const HintMenu = ({ hints }) => {
  const [swiper, setSwiper] = useState(null);
  const [value, setValue] = useState(0);

  const slideChange = (index) => {
    setValue(index);
  };

  const tabChange = (event, newValue) => {
    setValue(newValue);
    swiper.slideTo(newValue);
  };

  return (
    <>
      <Box sx={{ width: "25%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={tabChange} centered>
          <Tab label="ヒント１" value={0} />
          <Tab label="ヒント２" value={1} />
          <Tab label="ヒント３" value={2} />
        </Tabs>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(index) => slideChange(index.activeIndex)}
          onSwiper={(swiper) => {
            const swiperInstance = swiper;
            setSwiper(swiperInstance);
          }}
        >
          {/* ヒント１の内容 */}
          <SwiperSlide>
            <div className="hint 1">{hints[0]}</div>
          </SwiperSlide>
          {/* ヒント２の内容 */}
          <SwiperSlide>
            <div className="hint 2">{hints[1]}</div>
          </SwiperSlide>
          {/* ヒント３の内容 */}
          <SwiperSlide>
            <div className="hint 3">{hints[2]}</div>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};
