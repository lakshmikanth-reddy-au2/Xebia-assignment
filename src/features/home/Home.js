import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Alert, Grid, Snackbar, Typography } from "@mui/material";
import { batch, useDispatch, useSelector } from "react-redux";
import { updateLoading, updateRestaurants } from "./homeSlice";
import ProductCard from "./ProductCard";
import Loader from "../loader/Loader";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useNavigation } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const restaurantsState = useSelector((state) => state.restaurants);
  const { loading, restaurants } = restaurantsState;

  const [resList, setResList] = useState(restaurants);
  const [snackObj, setSnackObj] = useState({
    open: false,
    severity: '',
    message: ''
  })
  const handleCardClick = (id) => {
    navigate(`/restaurant?id=${id}`);
  };

  const handleSearchInput = (input) => {
    const regEx = new RegExp(input.toLowerCase());
    const searchResults = restaurants.filter((item) => {
      if (item.data.name.toLowerCase().search(regEx) !== -1) {
        return item;
      }
    });
    setResList(searchResults);
  };

  useEffect(() => {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    headers.append("Access-Control-Allow-Credentials", "true");

    headers.append("GET", "POST", "OPTIONS");

    dispatch(updateLoading());
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result, "result");
        const { cards } = result.data;
        let list = cards.filter(
          (card) => card.cardType === "seeAllRestaurants"
        );
        console.log(list[0].data.data.cards);
        setResList(list[0]?.data?.data?.cards || []);
        batch(() => {
          dispatch(updateRestaurants(list[0]?.data?.data?.cards || []));
          dispatch(updateLoading());
        });
      })
      .catch((error) => {
        setSnackObj({
          open: true,
          message: error.message || "Something went wrong",
          severity: 'error'
        })
        console.log(error);
      });
  }, []);

  console.log(restaurants);
  return !loading ? (
    <div className={styles.home}>
      <div className={styles.header}>
        <Typography variant="h3">All restaurants</Typography>
        <Typography>Showing all restaurants</Typography>
      </div>
      <div className={styles.main}>
        <div className={styles.actionBar}>
          <Typography variant="h4">
            {resList?.length || 0} Restaurants
          </Typography>
          <div className={styles.actions}></div>
        </div>
        <div className={styles.restaurantsList}>
          <div className={styles.searchContainer}>
            <div className={styles.inputContainer}>
              <input
                name="Search"
                placeholder="Search Restaurant"
                onChange={(e) => handleSearchInput(e.target.value)}
              />
              <SearchIcon />
            </div>
          </div>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            {resList.length &&
              resList.map((item, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    {item.data && (
                      <ProductCard
                        restaurant={item.data}
                        handleCardClick={handleCardClick}
                      />
                    )}
                  </Grid>
                );
              })}
          </Grid>
        </div>
      </div>
      <Snackbar
        open={snackObj.open}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={snackObj.severity}>{snackObj.message}</Alert>
      </Snackbar>
    </div>
  ) : (
    <Loader />
  );
}
