// by Renaldy Pratama

function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var resultArr = [];
  
  var i = 0;
  while (i < arrPenumpang.length) {
    var j = 0;
    var counter1 = 0;
    while (j < rute.length) {
      if (arrPenumpang[i][1] === rute[j]) {
        break;
      }
      counter1++;
      j++;
    }
    j = 0;
    var counter2 = 0;
    while (j < rute.length) {
      if (arrPenumpang[i][2] === rute[j]) {
        break;
      }
      counter2++;
      j++;
    }

    var tempObj = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: (counter2 - counter1) * 2000
    };
    resultArr.push(tempObj);
    i++
  }
  return resultArr;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]