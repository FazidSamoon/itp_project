export const createRestaurantDetails = async (req, res) => {
  res.status(200).send("create restaurant details route");
};

export const getAllRestaurantDetails = async (req, res) => {
  res.status(200).send("get all restaurant details route");
};

export const getRestaurantDetailsByID = async (req, res) => {
  res.status(200).send("get RestaurantDetails by id route");
};

export const updateRestaurantDetails = async (req, res) => {
  res.status(200).send("update restaurant details route");
};

export const deleteRestaurantDetails = async (req, res) => {
  res.status(200).send("delete restaurant details route");
};
