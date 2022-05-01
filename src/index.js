import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
  const arr = goods.filter(item => item.brand === brand);
  return arr;
};

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
  const arr = goods.filter(item => item.color === color);
  return arr;
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  const arr = goods.filter(item => item.model === model);
  return arr;
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  const arr = goods.filter(item => item.memory === memory);
  return arr;
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  const arr = goods.filter(item => item.price === price);
  return arr;
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  const arr = goods.filter(item => item.country === country);
  return arr;
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
  const arr = goods.filter(item => item.os === os);
  return arr;
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  const arr = goods.filter((item) => item.price >= from && item.price <= to);
  return arr;
};

const minPriceReducer = () => {
  return goods.reduce((sum, item) => sum > item.price ? item.price: sum, 0);
 
 }

const maxPriceReducer = () => {
  return goods.reduce((sum, item) => sum < item.price ? item.price: sum, 0);
}

const toMaxSorter = () => { 
 return goods.sort((a, b) => {
    if (a.price < b.price) return 1;
    if (a.price > b.price) return -1;
    return 0;
  })
}
const toMinSorter = () => { 
  return goods.sort((a, b) => {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
  })
};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
