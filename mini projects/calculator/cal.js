let con = (value) => {
  console.log(value);
};
let add = () => {
  fstno = Number(document.getElementById("fstno").value);
  sndno = Number(document.getElementById("scndno").value);
  result = fstno + sndno;
  document.getElementById("result").value = result;
};
let sub = () => {
  fstno = Number(document.getElementById("fstno").value);
  sndno = Number(document.getElementById("scndno").value);
  result = fstno - sndno;
  document.getElementById("result").value = result;
};

let div = () => {
  fstno = Number(document.getElementById("fstno").value);
  sndno = Number(document.getElementById("scndno").value);
  result = fstno / sndno;
  document.getElementById("result").value = result;
};
let mul = () => {
  fstno = Number(document.getElementById("fstno").value);
  sndno = Number(document.getElementById("scndno").value);
  result = fstno * sndno;
  document.getElementById("result").value = result;
};
let remove = () => {
  document.getElementById("result").value = "";
  document.getElementById("fstno").value = "";
  document.getElementById("scndno").value = "";
};
