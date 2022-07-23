const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(list, name) {
    return list.filter((element) => {
        return element.toLowerCase() === name.toLowerCase();
    })
}

function fuzzyMatch(list, name) {
    return list.filter((element) => {
        return element.slice(0, 1) === name.slice(0, 1);
    })
}

function matchName(list, name) {
    return list.filter((element) => {
        return element.name === name;
    })

}
