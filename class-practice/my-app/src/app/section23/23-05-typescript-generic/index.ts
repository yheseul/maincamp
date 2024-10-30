// 1. string/number/boolean => primitive type
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result = getPrimitive("orange", 123, true);

// 2. any type
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 * 1000); // NaN

  return [arg3, arg2, arg1];
};

const resulT2 = getAny("orange", 123, true);

// 3. unknown type
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  console.log(arg1 * 1000); // 'arg1' is of type 'unknown'.
  if (typeof arg1 === "number") console.log(arg1 * 1000);

  return [arg3, arg2, arg1];
};

const resulT3 = getUnknown("orange", 123, true);

// 4. generic type
const getGeneric = <type1, type2, type3>(arg1: type1, arg2: type2, arg3: type3): [type3, type2, type1] => {
  return [arg3, arg2, arg1];
};

const result4 = getGeneric("orange", 123, true);

// 5. generic type => simple
const getGeneric2 = <T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] => {
  return [arg3, arg2, arg1];
};

const result5 = getGeneric2("orange", 123, true);

// 6. generic type => more simple
const getGeneric3 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const result6 = getGeneric3("orange", 123, true);

// 7. generic type => 함수선언식
function getGeneric4<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const result7 = getGeneric4<string, number, boolean>("orange", 123, true);
