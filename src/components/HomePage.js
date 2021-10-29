import * as React from "react";
import Header from "./Header";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/middleWears/dataMiddleware";
import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const products = useSelector(({ data }) => data.items);

  dispatch(getData());

  const AddToCartHandler = (id) => {
    setCount(count + 1);
    console.log("id here", id);
  };

  return (
    <>
      <Header count={count} AddToCartHandler={AddToCartHandler} />
      <div className="container-fluid mb-4">
        <div className="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          {products &&
            products.map((item, index) => (
              <div className="col mt-4" key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={
                      item.image ? item.image : "/assets/tree-736885__480.jpg"
                    }
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ fontSize: 15 }}
                    >
                      {item.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      RS: {item.price}
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={(id) => AddToCartHandler()}
                    >
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
