'use strict';

const getVersionNum = version => {
  if (typeof version !== 'string') {
    return 0;
  }

  const vArr = version.split('.');
  return vArr[0] * 1000000 + vArr[1] * 1000 + vArr * 1;
};
module.exports = {
  isValid(version) {
    if (typeof version !== 'string' || !version) {
      return false;
    }

    const temp = version.split('.');
    if (temp.length !== 3 || temp.some(t => !t)) {
      return false;
    }

    if (!+temp[0] >= 0 && !+temp[1] >= 0 && !+temp[2] >= 0) {
      return true;
    }

    return false;
  },
  isLater(version1, version2) {
    return this.sort({ version: version1 }, { version: version2 }) === 1;
  },
  sort(vModel1, vModel2) {
    const version1 = getVersionNum(vModel1.version);
    const version2 = getVersionNum(vModel2.version);

    if (version1 > version2) {
      return 1;
    }
    return -1;
  },
};
