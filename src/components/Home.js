import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { Carousel } from "react-responsive-carousel";
import page2 from "../images/page3_img1.jpg";
import page3 from "../images/page3_img2.jpg";
import page4 from "../images/page3_img3.jpg";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Đặt chiều cao của Box là 100% của viewport
      }}
    >
      <Grid container spacing={0} sx={{ maxWidth: 1000, width: "100%" }}>
        {/* Banner Carousel */}
        <Grid item xs={12} sx={{ marginTop: "-150px" }}>
          <Carousel
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={false}
            showStatus={false}
            dynamicHeight={true} // Tự động thay đổi chiều cao của ảnh để nó toàn màn hình
            centerMode={true} // Hiển thị ảnh hiện tại ở giữa
            centerSlidePercentage={100} // Chiều rộng của ảnh hiện tại là 100%
            emulateTouch={true} // Cho phép chạm màn hình
          >
            <div>
              <img src={page2} alt="page1" style={{ width: "60%" }} />
            </div>
            <div>
              <img src={page3} alt="page3" style={{ width: "60%" }} />
            </div>
            <div>
              <img src={page4} alt="page4" style={{ width: "60%" }} />
            </div>
          </Carousel>
        </Grid>

        {/* User Info */}
        {/* Add your user info here */}
      </Grid>
    </Box>
  );
}

export default Home;
