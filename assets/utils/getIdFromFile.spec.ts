import getIdFromFile from './getIdFromFile';

describe('getIdFromFile', () => {
  it('should extract id from filename in pattern P<id> or N<id>', () => {
    const mockFileName = 'PK1A.txt';
    const expectedId = 'K1A';
    const id = getIdFromFile(mockFileName);

    expect(id).toBe(expectedId);
  });
});
