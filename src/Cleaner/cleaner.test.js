import { cleanPlaces } from './cleaner.js'
describe('cleanPlaces', () => {

  it('should return a places object', () => {
    const mockPlaces = [
      {
        name: 'court',
        opening_hours: '5',
        rating: 5,
        vicinity: '1800 s broadway'
      }, 
      {
        name: 'court',
        opening_hours: '5',
        rating: 5,
        vicinity: '1800 s broadway'
      }];
      const expected = [
        {
          name: 'court',
          hours: '5',
          rating: 5,
          location: '1800 s broadway'
        },
        {
          name: 'court',
          hours: '5',
          rating: 5,
          location: '1800 s broadway'
        }
      ]
      const result = cleanPlaces(mockPlaces);
      expect(result).toEqual(expected)
  })
})