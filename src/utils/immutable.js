import { curry, lensPath, set } from 'ramda';

export const immutableSet = curry((path, value, obj) => set(lensPath(path), value, obj));

