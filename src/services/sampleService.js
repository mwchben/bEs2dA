import axios from "axios";

export default {
  getAll: async () => {
    let res = await axios.get(`/api/product`);
    console.log(res);

    return res.data || [];
  },
};
