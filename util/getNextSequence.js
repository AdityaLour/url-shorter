const Counter = require("../model/counter.schema");

const getNextSequence = async (CounterName) => {
  const counter = await Counter.findOneAndUpdate(
    {
      _id: CounterName,
    },
    {
      $inc: { seq: 1 },
    },
    {
      new: true,
      upsert: true,
    },
  );
  return counter.seq;
};

module.exports = getNextSequence;
