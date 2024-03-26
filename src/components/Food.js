import page3_img1 from "../images/page3_img1.jpg";
import page3_img2 from "../images/page3_img2.jpg";
import page3_img3 from "../images/page3_img3.jpg";
import logo from "../images/logo.png";
import bg_body from "../images/bg_body.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllproduct } from "../action/actions";
function Food() {
  const dispatch = useDispatch();

  const listProduct = useSelector((state) => state.products.listProduct);

  console.log(listProduct);
  useEffect(() => {
    dispatch(fetchAllproduct());
  }, []);

  return (
    <>
      <div className="content">
        <div className="grid_5 alpha">
          <div className="block1">
            {" "}
            <img src={page3_img1} alt="" className="img_inner fleft" />
            {listProduct.map((product, index) => (
              <li key={index}>
                <h2>{product.title}</h2>
                <p>Author: {product.author}</p>
                <p>Description: {product.description}</p>
                <p>Published At: {product.publishedAt}</p>
                <p>Source: {product.source.name}</p>
                <p>
                  <a href={product.url}>Read More</a>
                </p>
                <img src={product.urlToImage} alt={product.title} />
              </li>
            ))}
            <div className="clear" />
          </div>
        </div>

        <div className="clear" />
        <div className="alright">
          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </div>
    </>
  );
}
export default Food;
