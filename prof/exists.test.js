'use strict';

import {forLodashes, it, expect} from './common.js';
var hrstart = process.hrtime();
forLodashes('exists', (_) => {
  it('slot 0', () => {
    var arr = [, 'b', , 'd', 'e'];
    expect(_.exists(arr, 0));
    expect(_.exists(arr, 1));
    expect(_.exists(arr, 2));
    expect(_.exists(arr, 3));
    expect(_.exists(arr, 4));
    arr = ['a', 'b', 'c', 'd', 'e'];
    delete arr[0];
    delete arr[2];
    expect(_.exists(arr, 0));
    expect(_.exists(arr, 1));
    expect(_.exists(arr, 2));
    expect(_.exists(arr, 3));
    expect(_.exists(arr, 4));
    arr = [arr];
    expect(_.exists(arr, '[0][0]'));
    expect(_.exists(arr, '[0][1]'));
    expect(_.exists(arr, '[0][2]'));
    expect(_.exists(arr, '[0][3]'));
    expect(_.exists(arr, '[0][4]'));
    expect(_.exists(arr, [0, 0]));
    expect(_.exists(arr, [0, 1]));
    expect(_.exists(arr, [0, 2]));
    expect(_.exists(arr, [0, 3]));
    expect(_.exists(arr, [0, 4]));
  });
});
const hrend = process.hrtime(hrstart);
console.info('✓ %ds %dms', hrend[0], hrend[1] / 1000000);
