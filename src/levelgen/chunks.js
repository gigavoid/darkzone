export const getChunks = () => {
  return [
    {
      id: 'hut',
      weight: 1,
      width: 7,
      height: 6,
      floorLevel: 1,
      entrances: ['left', 'right'],
      tiles: [
        ['w', 'w', 'w', 'p', 'p', 'w'],
        ['w', 'p', 'p', 'p', 'p', 'w'],
        ['w', 'p', 'p', 'p', 'p', 'w'],
        ['w', 'p', 'p', 'p', 'p', 'w'],
        ['w', 'p', 'p', 'p', 'p', 'w'],
        ['w', 'p', 'p', 'p', 'p', 'w'],
        ['w', 'w', 'w', 'p', 'p', 'w']
      ]
    },
    {
      id: 'field',
      weight: 3,
      width: 8,
      height: 3,
      floorLevel: 1,
      entrances: ['left', 'right'],
      tiles: [
        ['p', 'p', 'w'],
        ['p', 'p', 'w'],
        ['p', 'p', 'w'],
        ['p', 'p', 'w'],
        ['p', 'p', 'w'],
        ['p', 'p', 'w'],
        ['p', 'p', 'w'],
        ['p', 'p', 'w']
      ]
    }
  ]
}
