/*
Build a pile of Cubes


Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45
findNb(91716553919377) --> -1
mov rdi, 1071225
call find_nb            ; rax <-- 45

mov rdi, 91716553919377
call find_nb            ; rax <-- -1
*/

function findNb(m) {
  // create an endless loop that increments n, the cube number, starting with a value of 1
  for ( var n = 0;;n++ ) {

    if ( m > 0 ) {
      // if m, the total volume, is not 0, we will subtract the volume of the current cube from it

      // first calculate the volume of the current cube
      var currCubeVol = Math.pow( n+1, 3);

      // subtract the current cube volume from the total volume
      m = m - currCubeVol;
    } else if ( m == 0 ) {
      // if m is zero then we've found our n, so return n
      return n;
    } else if ( m < 0 ) {
      // if we've gone below zero there is no such n!
      return (-1);
    }
  }
}
