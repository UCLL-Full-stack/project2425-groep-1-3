const getAllOrders = async () => {
    const token = JSON.parse(
      localStorage.getItem("loggedInUser") as string,
    )?.token;
    return await fetch(process.env.NEXT_PUBLIC_API_URL + "/orders", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
  };
  const orderService = {
    getAllOrders,
  };
  export default orderService;