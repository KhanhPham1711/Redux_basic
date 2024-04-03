
import Stack from "@mui/material/Stack";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../action/actions";
import { useEffect } from "react";
function Blog()
{
        const dispatch = useDispatch();
    const  listBlog = useSelector((state) => state.blog.blog);

    useEffect(() => {
        dispatch(fetchBlog());
      }, []);

      function fectchData()
      {
        if(listBlog.lenght > 0)
        {
            return listBlog.map((value,key) => (
                <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Grid container spacing={2} sx={{ maxWidth: 1000 }}>
                  {/* Avatar */}
                  <Grid item xs={6} sx={{ marginTop: "70px" }}>
                    <Stack data-aos="fade-right" direction="row" spacing={2}>
                   <a href>
                  <img
                    src={
                      "http://localhost:8080/laravel8/public/upload/Blog/image/" +
                      value.image
                    }
                  />
                </a>
                    </Stack>
                  </Grid>
      
                  {/* User Info */}
                  <Grid item xs={6}>
                    <Box
                      data-aos="fade-left"
                      sx={{ maxWidth: 1000, marginLeft: "-36%" }}>
                      <h2
                        data-aos="zoom-in"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: "20px", // Khoảng cách dưới cùng của tiêu đề
                          color: "rgb(19, 183, 136)",
                          fontWeight: "bold",
                          fontSize: "30px",
                          marginTop: "70px",
                          marginRight: "200px",
                        }}>
                        Phim hay nhất tuần
                      </h2>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}>
                        <Typography
                          variant="h5"
                          gutterBottom
                          style={{
                            marginTop: "10px",
      
                            color: "white",
                            fontStyle: "italic",
                            textAlign: "left",
                            fontSize: "20px",
                            marginRight: "250px",
                          }}>
                          Tên phim:{" "}
                          <span
                            style={{
                              fontSize: "20px",
                              color: "green",
                              padding: "3px 4px",
                              borderRadius: "7px",
                              fontweight: "700",
                              marginRight: "7px",
                            }}>
                            Mai
                          </span>
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          gutterBottom
                          style={{
                            marginTop: "10px",
      
                            fontSize: "15px",
                            marginRight: "320px",
                            color: "white",
                            textAlign: "left",
                          }}>
                          Đạo diễn:
                          <span
                            style={{
                              fontSize: "15px",
                              color: "skyblue",
                              padding: "3px 4px",
                              borderRadius: "7px",
                              fontweight: "500 bold",
                              marginRight: "7px",
                            }}>
                            Trấn Thành
                          </span>
                        </Typography>
      
                        <Typography
                          variant="subtitle3"
                          gutterBottom
                          style={{
                            fontSize: "14px",
                            marginRight: "79px",
                            color: "white",
                            marginTop: "10px",
      
                            textAlign: "left",
                          }}>
                          Diễn viên:{" "}
                          <span
                            style={{
                              fontSize: "15px",
                              color: "skyblue",
                              padding: "3px 4px",
                              borderRadius: "7px",
                              fontweight: "500 bold",
                              marginRight: "7px",
                            }}>
                            Trấn Thành , Tuấn Trần, Phương Anh Đào
                          </span>
                        </Typography>
      
                        <Typography
                          variant="subtitle4"
                          gutterBottom
                          style={{
                            fontSize: "15px",
                            marginRight: "288px",
                            color: "white",
                            marginTop: "10px",
      
                            textAlign: "left",
                          }}>
                          Thời gian chiếu: 120 phút
                        </Typography>
      
                        <Typography
                          variant="subtitle4"
                          gutterBottom
                          style={{
                            fontSize: "15px",
                            marginRight: "284px",
                            color: "white",
                            marginTop: "10px",
                            textAlign: "left",
                          }}>
                          Thể loại: Tâm lý, hài hước
                        </Typography>
      
                        <Typography
                          variant="subtitle5"
                          gutterBottom
                          style={{
                            color: "white",
                            fontSize: "15px",
                            marginRight: "-10px",
                            marginTop: "10px",
                            textAlign: "left",
                          }}>
                          Phân loại:{" "}
                          <span
                            style={{
                              color: "white",
                              backgroundColor: "red",
                              padding: "3px 4px",
                              borderRadius: "7px",
      
                              marginRight: "7px",
                            }}>
                            C13{" "}
                          </span>
                          Phim phổ biến đến người xem từ 16 tuổi trở lên
                        </Typography>
                        <Typography
                          variant="subtitle5"
                          gutterBottom
                          style={{
                            color: "white",
                            fontSize: "15px",
                            marginRight: "350px",
                            marginTop: "10px",
                            textAlign: "left",
                          }}>
                          Định dạng:{" "}
                          <span
                            style={{
                              color: "white",
                              backgroundColor: "green",
                              padding: "3px 4px",
                              borderRadius: "7px",
      
                              marginRight: "7px",
                            }}>
                            2D{" "}
                          </span>
                        </Typography>
                        <Typography
                          variant="subtitle6"
                          gutterBottom
                          style={{
                            fontSize: "15px",
                            marginRight: "295px",
                            color: "white",
                            marginTop: "10px",
                            textAlign: "left",
                          }}>
                          Khởi chiếu: 01/03/2024
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

            ))
        }
      }
    return(
        <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <div>
            <div>
              <h3
                data-aos="zoom-in"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "20px", // Khoảng cách dưới cùng của tiêu đề
                  color: "rgb(19, 183, 136)",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}>
                Phim bán chạy
              </h3>
            
            </div>
          </div>
        </Box>

                {fectchData()}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Grid container spacing={2} sx={{ maxWidth: 1000 }}>
            {/* Avatar */}

            {/* User Info */}
            <Grid sx={{ marginTop: "50px" }} item xs={6}>
              <Box
                data-aos="fade-left"
                sx={{ maxWidth: 1000, marginLeft: "-3%" }}>
                <Box
                  sx={{
                    marginTop: "70px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{
                      marginTop: "10x",

                      color: "white",
                      fontStyle: "italic",
                      textAlign: "left",
                      fontSize: "20px",
                      marginRight: "250px",
                    }}>
                    Tên phim:{" "}
                    <span
                      style={{
                        fontSize: "15px",
                        color: "green",
                        padding: "3px 4px",
                        borderRadius: "7px",
                        fontweight: "700",
                        marginRight: "7px",
                      }}>
                      Gặp Lại Chị Bầu
                    </span>
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    style={{
                      marginTop: "10px",

                      fontSize: "15px",
                      marginRight: "320px",
                      color: "white",
                      textAlign: "left",
                    }}>
                    Đạo diễn:
                    <span
                      style={{
                        fontSize: "15px",
                        color: "skyblue",
                        padding: "3px 4px",
                        borderRadius: "7px",
                        fontweight: "500 bold",
                        marginRight: "7px",
                      }}>
                      Johny Dang
                    </span>
                  </Typography>

                  <Typography
                    variant="subtitle3"
                    gutterBottom
                    style={{
                      fontSize: "14px",
                      marginRight: "79px",
                      color: "white",
                      marginTop: "10px",

                      textAlign: "left",
                    }}>
                    Diễn viên:{" "}
                    <span
                      style={{
                        fontSize: "15px",
                        color: "skyblue",
                        padding: "3px 4px",
                        borderRadius: "7px",
                        fontweight: "500 bold",
                        marginRight: "7px",
                      }}>
                      Diệu Nhi , Anh Tú , Lê Giang , Ngọc Phước
                    </span>
                  </Typography>

                  <Typography
                    variant="subtitle4"
                    gutterBottom
                    style={{
                      fontSize: "15px",
                      marginRight: "288px",
                      color: "white",
                      marginTop: "10px",

                      textAlign: "left",
                    }}>
                    Thời gian chiếu: 120 phút
                  </Typography>

                  <Typography
                    variant="subtitle4"
                    gutterBottom
                    style={{
                      fontSize: "15px",
                      marginRight: "284px",
                      color: "white",
                      marginTop: "10px",
                      textAlign: "left",
                    }}>
                    Thể loại: Tâm lý, hài hước
                  </Typography>

                  <Typography
                    variant="subtitle5"
                    gutterBottom
                    style={{
                      color: "white",
                      fontSize: "15px",
                      marginRight: "-10px",
                      marginTop: "10px",
                      textAlign: "left",
                    }}>
                    Phân loại:{" "}
                    <span
                      style={{
                        color: "white",
                        backgroundColor: "red",
                        padding: "3px 4px",
                        borderRadius: "7px",

                        marginRight: "7px",
                      }}>
                      C13{" "}
                    </span>
                    Phim phổ biến đến người xem từ 16 tuổi trở lên
                  </Typography>
                  <Typography
                    variant="subtitle5"
                    gutterBottom
                    style={{
                      color: "white",
                      fontSize: "15px",
                      marginRight: "350px",
                      marginTop: "10px",
                      textAlign: "left",
                    }}>
                    Định dạng:{" "}
                    <span
                      style={{
                        color: "white",
                        backgroundColor: "green",
                        padding: "3px 4px",
                        borderRadius: "7px",

                        marginRight: "7px",
                      }}>
                      2D{" "}
                    </span>
                  </Typography>
                  <Typography
                    variant="subtitle6"
                    gutterBottom
                    style={{
                      fontSize: "15px",
                      marginRight: "295px",
                      color: "white",
                      marginTop: "10px",
                      textAlign: "left",
                    }}>
                    Khởi chiếu: 01/03/2024
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "100px" }}>
              <Stack data-aos="fade-right" direction="row" spacing={2}>
                {/* <Avatar
                  src={chibau}
                  sx={{ width: 350, height: 350, borderRadius: "0%" }} // Loại bỏ góc cong
                /> */}
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Grid container spacing={2} sx={{ maxWidth: 1000 }}>
            {/* Avatar */}

            <Grid item xs={12} sx={{ marginTop: "100px", marginLeft: "200px" }}>
              <Stack data-aos="fade-right" direction="row" spacing={2}>
                {/* <Avatar
                  src={thanhguom}
                  sx={{ width: 350, height: 350, borderRadius: "0%" }} // Loại bỏ góc cong
                /> */}
              </Stack>
            </Grid>
            {/* User Info */}
            <Grid item xs={12}>
              <Box
                data-aos="fade-left"
                sx={{ maxWidth: 1000, marginLeft: "-3%" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{
                      marginTop: "10px",

                      color: "white",
                      fontStyle: "italic",
                      textAlign: "left",
                      fontSize: "20px",
                      marginRight: "250px",
                    }}>
                    Tên phim:{" "}
                    <span
                      style={{
                        fontSize: "18px",
                        color: "green",
                        padding: "3px 4px",
                        borderRadius: "7px",
                        fontweight: "700",
                        marginRight: "7px",
                      }}>
                      Thanh Gươm Diệt Quỷ
                    </span>
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    style={{
                      marginTop: "10px",

                      fontSize: "15px",
                      marginRight: "330px",
                      color: "white",
                      textAlign: "left",
                    }}>
                    Đạo diễn:
                    <span
                      style={{
                        fontSize: "15px",
                        color: "skyblue",
                        padding: "3px 4px",
                        borderRadius: "7px",
                        fontweight: "500 bold",
                        marginRight: "7px",
                      }}>
                      Shynichy
                    </span>
                  </Typography>

                  <Typography
                    variant="subtitle3"
                    gutterBottom
                    style={{
                      fontSize: "14px",
                      marginRight: "295px",
                      color: "white",
                      marginTop: "10px",

                      textAlign: "left",
                    }}>
                    Diễn viên:{" "}
                    <span
                      style={{
                        fontSize: "15px",
                        color: "skyblue",
                        padding: "3px 4px",
                        borderRadius: "7px",
                        fontweight: "500 bold",
                        marginRight: "7px",
                      }}>
                      Loading.......
                    </span>
                  </Typography>

                  <Typography
                    variant="subtitle4"
                    gutterBottom
                    style={{
                      fontSize: "15px",
                      marginRight: "288px",
                      color: "white",
                      marginTop: "10px",

                      textAlign: "left",
                    }}>
                    Thời gian chiếu: 120 phút
                  </Typography>

                  <Typography
                    variant="subtitle4"
                    gutterBottom
                    style={{
                      fontSize: "15px",
                      marginRight: "284px",
                      color: "white",
                      marginTop: "10px",
                      textAlign: "left",
                    }}>
                    Thể loại: Tâm lý, hài hước
                  </Typography>

                  <Typography
                    variant="subtitle5"
                    gutterBottom
                    style={{
                      color: "white",
                      fontSize: "15px",
                      marginRight: "-10px",
                      marginTop: "10px",
                      textAlign: "left",
                    }}>
                    Phân loại:{" "}
                    <span
                      style={{
                        color: "white",
                        backgroundColor: "red",
                        padding: "3px 4px",
                        borderRadius: "7px",

                        marginRight: "7px",
                      }}>
                      C10{" "}
                    </span>
                    Phim phổ biến đến người xem từ 16 tuổi trở lên
                  </Typography>
                  <Typography
                    variant="subtitle5"
                    gutterBottom
                    style={{
                      color: "white",
                      fontSize: "15px",
                      marginRight: "350px",
                      marginTop: "10px",
                      textAlign: "left",
                    }}>
                    Định dạng:{" "}
                    <span
                      style={{
                        color: "white",
                        backgroundColor: "green",
                        padding: "3px 4px",
                        borderRadius: "7px",

                        marginRight: "7px",
                      }}>
                      2D{" "}
                    </span>
                  </Typography>
                  <Typography
                    variant="subtitle6"
                    gutterBottom
                    style={{
                      fontSize: "15px",
                      marginRight: "295px",
                      color: "white",
                      marginTop: "10px",
                      textAlign: "left",
                    }}>
                    Khởi chiếu: 01/03/2024
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Grid container spacing={2} sx={{ maxWidth: 1000 }}>
            {/* Avatar */}
            <Grid item xs={4} sx={{ marginTop: "100px", marginLeft: "-100px" }}>
              <Stack
                data-aos="fade-right"
                direction="column" // Change direction to "column"
                spacing={2}
                alignItems="center">
                {/* <Avatar
                  src={thanhguom}
                  sx={{ width: 350, height: 350, borderRadius: "0%" }} // Loại bỏ góc cong
                /> */}
                {/* Feedback rating */}
                <Rating
                  name="feedback-rating"
                  value={4}
                  precision={0.5}
                  readOnly
                />
                {/* Customer comment */}
                <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    color: "skyblue", // Set text color
                    fontSize: "13px", // Set font size
                    marginTop: "10px", // Add top margin
                  }}>
                  "Great product! Highly recommended."
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={3} sx={{ marginTop: "100px", marginLeft: "100px" }}>
              <Stack
                data-aos="fade-right"
                direction="column" // Change direction to "column"
                spacing={2}
                alignItems="center">
                {/* <Avatar
                  src={thanhguom}
                  sx={{ width: 350, height: 350, borderRadius: "0%" }} // Loại bỏ góc cong
                /> */}
                {/* Feedback rating */}
                <Rating
                  name="feedback-rating"
                  value={4}
                  precision={0.5}
                  readOnly
                />
                <Typography
                  variant="body2"
                  align="center"
                  sx={{
                    color: "skyblue", // Set text color
                    fontSize: "13px", // Set font size
                    marginTop: "10px",
                  }}>
                  "Great product! Highly recommended."
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={3} sx={{ marginTop: "100px", marginLeft: "150px" }}>
              <Stack
                data-aos="fade-right"
                direction="column" // Change direction to "column"
                spacing={2}
                alignItems="center">
                {/* <Avatar
                  src={panda}
                  sx={{ width: 350, height: 350, borderRadius: "0%" }} // Loại bỏ góc cong
                /> */}
                {/* Feedback rating */}
                <Rating
                  name="feedback-rating"
                  value={4}
                  precision={0.5}
                  readOnly
                />
                <Typography
                  variant="body2"
                  align="center"
                  sx={{
                    color: "skyblue", // Set text color
                    fontSize: "13px", // Set font size
                    marginTop: "10px",
                  }}>
                  "Great product! Highly recommended."
                </Typography>
              </Stack>
            </Grid>

            {/* User Info */}
          </Grid>
        </Box>

        <section
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="section"
          id="section_82365801">
          <div class="bg section-bg fill bg-fill bg-loaded"></div>

          <div className="section-content relative">
            <div
              className="gap-element clearfix"
              style={{
                display: "block",
                height: "auto",
                paddingTop: "30px",
              }}></div>

            <div className="row align-middle align-center card-member-row">
              <div className="col-12 col-md-12">
                <div className="col-inner text-center">
                  <div className="text mx-auto">
                    <p>
                      <img
                        decoding="async"
                        loading="lazy"
                        className="aligncenter wp-image-74"
                        src="https://demo.bhdstar.vn/wp-content/uploads/2023/08/bhdstarmember.png"
                        alt=""
                        width="322"
                        height="62"
                        srcSet="https://bhdstar.vn/wp-content/uploads/2023/08/bhdstarmember.png 530w, https://bhdstar.vn/wp-content/uploads/2023/08/bhdstarmember-300x58.png 300w"
                        sizes="(max-width: 322px) 100vw, 322px"
                      />
                    </p>
                  </div>
                </div>
              </div>

              <div className="cangiua">
                <div className="col-12 col-md-4 order-md-last">
                  <div className="col-inner">
                    <div className="text">
                      <a href="#" title="Star">
                        <img
                          src="https://bhdstar.vn/wp-content/uploads/2023/08/image-16.png"
                          alt="Star"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 order-md-last">
                  <div className="col-inner">
                    <div className="text">
                      <a href="#" title="Gold">
                        <img
                          src="https://bhdstar.vn/wp-content/uploads/2023/08/image-17.png"
                          alt="Gold"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4 order-md-last">
                  <div className="col-inner">
                    <div className="text">
                      <a href="#" title="Gold">
                        <img
                          src="https://bhdstar.vn/wp-content/uploads/2023/08/image-17.png"
                          alt="Gold"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4 order-md-last">
                  <div className="col-inner">
                    <div className="text">
                      <a href="#" title="Gold">
                        <img
                          src="https://bhdstar.vn/wp-content/uploads/2023/08/image-17.png"
                          alt="Gold"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-12">
                <div className="col-inner text-center">
                  <div className="text mx-auto">
                    <a
                      href="#"
                      target="_self"
                      className="button primary is-outline">
                      <span>Đăng ký ngay</span>
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </div>
    )
}
export default Blog;    