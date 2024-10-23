"use client";

export default function MapElPage() {
  ["orange", "banana", "cherry"].forEach((el, index) => {
    console.log(el);
    console.log(index);
  });

  console.log("==============================");

  ["orange", "banana", "cherry"].forEach((qq, ww) => {
    console.log(qq);
    console.log(ww);
  });

  console.log("==============================");

  ["orange", "banana", "cherry"].forEach(function (qq, ww) {
    console.log(qq);
    console.log(ww);
  });

  console.log("==============================");

  ["orange", "banana", "cherry"].forEach((index, el) => {
    console.log("el: ", el);
    console.log("index: ", index);
  });

  return;
}
