const mongoose = require("mongoose");
const AirBNB = mongoose.model("airBNB");

module.exports = (app) => {
  app.get(`/api/bnbs`, async (req, res) => {
    let bnbs = await AirBNB.find();
    return res.status(200).send(bnbs);
  });

  //   app.post(`/api/sample`, async (req, res) => {
  //     let sample = await Sample.create(req.body);
  //     return res.status(201).send({
  //       error: false,
  //       sample,
  //     });
  //   });

  //   app.put(`/api/sample/:id`, async (req, res) => {
  //     const { id } = req.params;

  //     let sample = await Sample.findByIdAndUpdate(id, req.body);

  //     return res.status(202).send({
  //       error: false,
  //       sample,
  //     });
  //   });

  //   app.delete(`/api/sample/:id`, async (req, res) => {
  //     const { id } = req.params;

  //     let sample = await Sample.findByIdAndDelete(id);

  //     return res.status(202).send({
  //       error: false,
  //       sample,
  //     });
  //   });
};
