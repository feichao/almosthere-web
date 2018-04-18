'use strict';

const { assert } = require('egg-mock/bootstrap');
const version = require('../../../app/utils/version');

describe('test/app/utils/version.js', () => {

  it('isValid should return false if version is 0', function* () {
    assert(!version.isValid(0));
  });

  it('isValid should return false if version is 1.0', function* () {
    assert(!version.isValid('1.0'));
  });

  it('isValid should return false if version is 1.0.', function* () {
    assert(!version.isValid('1.0.'));
  });

  it('isValid should return false if version is 1.0.-1', function* () {
    assert(!version.isValid('1.0.-1'));
  });

  it('isValid should return false if version is 1.0.8989', function* () {
    assert(!version.isValid('1.0.8989'));
  });

  it('isValid should return true if version is 0.0.0', function* () {
    assert(version.isValid('0.0.0'));
  });

  it('isLater should return true if versions are 1.5.0 and 1.4.9', function* () {
    assert(version.isLater('1.5.0', '1.4.9'));
  });

  it('versions sort should return ["1.5.1", "1.5.0", "1.0.1", "1.0.0"] if versions are ["1.5.0", "1.0.1", "1.5.1", "1.0.0"]', function* () {
    const versions = [{ version: '1.5.0' }, { version: '1.0.1' }, { version: '1.5.1' }, { version: '1.0.0' }];
    const sortVersions = versions.sort(version.sort);
    assert(sortVersions[0].version === '1.5.1');
    assert(sortVersions[1].version === '1.5.0');
    assert(sortVersions[2].version === '1.0.1');
    assert(sortVersions[3].version === '1.0.0');
  });
});
