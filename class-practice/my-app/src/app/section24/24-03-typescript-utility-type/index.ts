interface IProfile {
  color: string;
  price: number;
  fruit: string;
  size?: string;
}

// 1. Partial Type
type TPartialProfile = Partial<IProfile>;

// 2. Required Type
type TRequiredProfile = Required<IProfile>;

// 3. Pick Type
type TPickProfile = Pick<IProfile, "color" | "price">;

// 4. Omit Type
type TOmitProfile = Omit<IProfile, "fruit">;

// 5. Record Type
type color = "red" | "blue" | "pink"; // => Union Type
const color1: color = "pink"; // "red", "blue", "pink" 만 됨.
const color2: string = "black"; // "red", "blue", "pink" 외에도 다 됨.

type TRecordProfile1 = Record<color, number>;
type TRecordProfile2 = Record<color, IProfile>;

// 6. 객체의 Key들로 Union Type 생성
type key = keyof IProfile; // "color" | "price" | "fruit" | "size"
const myProfile: key = "color";

//  7. type vs interface
// 선언 병합이 가능한가? => interface O, type X
interface IProfile {
  candy: number;
}

const box: IProfile = {
  candy: 12,
  color: "red",
  fruit: "apple",
  price: 3000,
  size: "S",
};

// =============================
const profile: Partial<IProfile> = {
  color: "white",
};
