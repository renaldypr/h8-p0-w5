// by Renaldy Pratama

function graduates (students) {
  var i = 0;
  var resultObj = {};
  var arrResult = [];
  
  while (i < students.length) {
    var counter = 0;
    while (counter < arrResult.length) { 
      if (arrResult[counter][0][2] !== students[i].class) {
        counter++;
      } else {
        break;
      }
    }
    if (counter === arrResult.length) {
      var j = 0;
      var arrClass = [];
      while (j < students.length) {
        var arrTemp = [];
        if (students[i].class === students[j].class) {
          if (students[j].score > 75) {
            arrTemp.push(students[j].name, students[j].score, students[j].class);
            arrClass.push(arrTemp);
          }
        }
        j++;
      }
      arrResult.push(arrClass);
    }   
    i++;
  }
  
  i = 0;

  while (i < arrResult.length) {
    j = 0;
    arrTemp = [];
    while (j < arrResult[i].length) {
      var objTemp = {
        name: arrResult[i][j][0],
        score: arrResult[i][j][1],
      };
      arrTemp.push(objTemp);
      j++;
    }
    var namaClass = arrResult[i][0][2];
    resultObj[namaClass] = arrTemp;
    i++;
  }
  return resultObj;
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}