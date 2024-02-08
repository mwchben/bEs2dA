import axios from "axios";

export default {
  getAll: async () => {
    let res = await axios.get(`/api/bnbs`);
    return res.data || [];
  },
};
