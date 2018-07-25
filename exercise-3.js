// by Renaldy Pratama

function highestScore (students) {
  var resultObj = {};
  var arrResult = [];
  var i = 0;
  
  while (i < students.length) {
    var counter = 0;
    while (counter < arrResult.length) {
      if (students[i].class !== arrResult[counter][0][2]) {
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
          arrTemp.push(students[j].name, students[j].score, students[j].class);
          arrClass.push(arrTemp);
        } 
        j++;
      }
      arrResult.push(arrClass);
    }
    i++;
  }
  
  var maxName;
  i = 0;

  while (i < arrResult.length) {
    j = 0;
    var maxScore = 0;
    while (j < arrResult[i].length) {
      if (maxScore < arrResult[i][j][1]) {
        maxScore = arrResult[i][j][1];
        maxName = arrResult[i][j][0];
      }
      j++
    }
    var tempObj = {
      name: maxName,
      score: maxScore
    };
    var namaClass = arrResult[i][0][2];
    resultObj[namaClass] = tempObj;
    i++;
  }
  return resultObj;
}

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}