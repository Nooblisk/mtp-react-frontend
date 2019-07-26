import {
    complement,
    equals,
    find,
    isEmpty,
    isNil,
    map,
} from 'ramda';

const noop = () => {
    // do nothing
};

const isNotNil = complement(isNil);
const isNotEmpty = complement(isEmpty);
const isNilOrEmpty = value => isNil(value) || isEmpty(value);
const isNotNilAndNotEmpty = complement(isNilOrEmpty);
const isNotEquals = complement(equals);
const buildFindById = targetId => find(item => item.id === targetId);
const normalizeStrings = map(item => item.toLowerCase().trim());

export {
    noop,
    isNotNil,
    isNotEmpty,
    isNilOrEmpty,
    isNotNilAndNotEmpty,
    isNotEquals,
    buildFindById,
    normalizeStrings,
};
