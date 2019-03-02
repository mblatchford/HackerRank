let strToArr = Array.from(s);
let curStep = 0;
let prevStep = 0;
let valleys = 0;
for (let i = 0; i < n; i++) {
    prevStep = curStep;
    strToArr[i] == 'U' ? curStep++ : curStep--;
    if (curStep == 0 && prevStep == -1) {
        valleys++;
    }
}
return valleys;
