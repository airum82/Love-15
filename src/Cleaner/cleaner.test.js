import { cleanPlaces } from './cleaner.js'
describe('cleanPlaces', () => {

  it('should return a places object', () => {
    const mockPlaces = [
      {
        name: 'court',
        opening_hours: '5',
        rating: 5,
        vicinity: '1800 s broadway',
        geometry: {
          location: {
            lat: jest.fn().mockImplementation(() => 5.483),
            lng: jest.fn().mockImplementation(() => 5.483)
          }
        }
      }, 
      {
        name: 'court',
        opening_hours: '5',
        rating: 5,
        vicinity: '1800 s broadway',
        geometry: {
          location: {
            lat: jest.fn().mockImplementation(() => 5.483),
            lng: jest.fn().mockImplementation(() => 5.483)
          }
        }
      }];
      const expected = [
        {
          name: 'court',
          id: 0,
          rating: 5,
          location: '1800 s broadway',
          coord: {
            lat: 5.483,
            lng: 5.483
          }
        },
        {
          name: 'court',
          id: 1,
          rating: 5,
          location: '1800 s broadway',
          coord: {
            lat: 5.483,
            lng: 5.483
          }
        }
      ]
      const result = cleanPlaces(mockPlaces);
      expect(result).toEqual(expected)
  })
})