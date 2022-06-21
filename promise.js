const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    let a = await promiseTheaterIXX();
    let b = await promiseTheaterVGC();
    let combine = a.concat(b);
    let result = 0;

    combine.map((a) => a.hasil === emosi && (result += 1));

    return result;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
