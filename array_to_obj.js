function transformEmployeeData(array) {
  var result = [];

  for(let i = 0; i < array.length; i++){
      let obj = {};

      for(var j = 0; j < array[i].length; j++){
        obj[array[i][j][0]] = array[i][j][1];
      }
      result.push(obj)
  }

  return result;
}

array1 = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];
transformEmployeeData(array1)
