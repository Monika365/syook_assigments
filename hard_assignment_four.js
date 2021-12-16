// / var readline = () => '5 1 3 2';
// // var print = r => console.log(r);

function chai(n, h, g, b) {
    var fg = 0, fb = 0;
    var res = '';
    for (var i = 0; i < Math.floor(h); i++) {
      res += g;
      fg++;
      n--;
    }
    for (var i = 0; i < n; i++) {
      if (fg/fb > h) {
        res += b;
        fb++;
      } else {
        res += g;
        fg++;
      }
    }
    return res;
  }
  
  var a = readline().split(' ');
  
  var n = parseInt(a[0]), k = parseInt(a[1]), g = parseInt(a[2]), b = parseInt(a[3]);
  
  if (g<b) {
    max = b; min= g;
  } else {
    max = g; min = b;
  }
  
  var h = min ? max / min : max;
  max -= k;
  
  if (max/min > k) {
    print('NO');
  } else {
    if (g > b) {
      print(chai(n, h, 'G', 'B'));
    } else {
      print(chai(n, h, 'B', 'G'));
    }
  }

