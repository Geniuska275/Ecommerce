
import product from "./product";
import banner from "./banner";


export default {
    name: 'default',
    title: 'Schema',
    type: 'document',
    types: [
      product,
      banner,
    ],
  };