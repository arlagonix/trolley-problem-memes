// Probably there is some way to avoid that monstrous imports...
// Though I couldn't find it... So sad...
import photo001 from "./assets/gallery/2019_01_19.jpg";
import photo002 from "./assets/gallery/2020_02_23.jpg";
import photo003 from "./assets/gallery/2020_04_02.jpg";
import photo004 from "./assets/gallery/2020_04_28.jpg";
import photo005 from "./assets/gallery/2020_05_30.jpg";
import photo006 from "./assets/gallery/2020_06_04.jpg";
import photo007 from "./assets/gallery/2020_12_26.jpg";
import photo008 from "./assets/gallery/2020_12_30.jpg";
import photo009 from "./assets/gallery/2021_01_02.jpg";
import photo010 from "./assets/gallery/2021_01_15.jpg";
import photo011 from "./assets/gallery/2021_01_28.jpg";
import photo012 from "./assets/gallery/2021_02_19.jpg";
import photo013 from "./assets/gallery/2021_03_23.jpg";
import photo014 from "./assets/gallery/2021_05_09.jpg";
import photo015 from "./assets/gallery/2021_05_22.jpg";
import photo016 from "./assets/gallery/2021_05_23(1).jpg";
import photo017 from "./assets/gallery/2021_05_23.jpg";
import photo018 from "./assets/gallery/2021_05_27.jpg";
import photo019 from "./assets/gallery/2021_06_14.jpg";
import photo020 from "./assets/gallery/2021_09_01.jpg";
import photo021 from "./assets/gallery/2021_10_09.jpg";
import photo022 from "./assets/gallery/2021_10_18.jpg";
import photo023 from "./assets/gallery/2021_11_22.jpg";
import photo024 from "./assets/gallery/2021_12_04.jpg";
import photo025 from "./assets/gallery/2021_12_07.jpg";
import photo026 from "./assets/gallery/2021_12_24(1).jpg";
import photo027 from "./assets/gallery/2021_12_24.jpg";
import photo028 from "./assets/gallery/2022_02_02(2).jpg";
import photo029 from "./assets/gallery/2022_02_02.jpg";
import photo030 from "./assets/gallery/2022_03_06.jpg";
import photo031 from "./assets/gallery/2022_04_15.jpg";
import photo032 from "./assets/gallery/2022_05_20.jpg";
import photo033 from "./assets/gallery/2022_06_04.jpg";
import photo034 from "./assets/gallery/2022_07_06.jpg";
import photo035 from "./assets/gallery/2022_08_16(1).jpg";
import photo036 from "./assets/gallery/2022_08_16(2).jpg";
import photo037 from "./assets/gallery/2022_09_03.jpg";
import photo038 from "./assets/gallery/2022_09_07.jpg";
import photo039 from "./assets/gallery/2022_10_01.jpg";
import photo040 from "./assets/gallery/2022_10_26.jpg";
import photo041 from "./assets/gallery/2022_11_04.jpg";
import photo042 from "./assets/gallery/2022_12_06.jpg";
import photo043 from "./assets/gallery/2022_12_11.jpg";
import photo044 from "./assets/gallery/2023_02_01.jpg";
import photo045 from "./assets/gallery/2023_04_01(1).jpg";
import photo046 from "./assets/gallery/2023_04_01(2).jpg";
import photo047 from "./assets/gallery/2023_04_01(3).jpg";
import photo048 from "./assets/gallery/2023_05_03.jpg";
import photo049 from "./assets/gallery/2023_05_23.jpg";
import photo050 from "./assets/gallery/2023_05_31.jpg";

export interface ImageInfoInterface {
  src: string;
  date: Date;
  width: number;
  height: number;
  blurHash?: string;
}

// I calculated blurhash manually for all the images, using this service:
// https://blurha.sh/
// Tried to automate the process... but it didn't work
const imagesList: ImageInfoInterface[] = [
  {
    src: photo001,
    width: 1080,
    height: 616,
    date: new Date("2019-01-19"),
    blurHash: "L4S6Pl00Rjxu9FIURPIU?b~q_3IU",
  },
  {
    src: photo002,
    width: 1080,
    height: 604,
    date: new Date("2020-02-23"),
    blurHash: "L5R{#?00_3~q9FM{?b%M_3~q_3of",
  },
  {
    src: photo003,
    width: 500,
    height: 306,
    date: new Date("2020-04-02"),
    blurHash: "LHRC_DNFRjRj~qM{oft7%MD%M{t7",
  },
  {
    src: photo004,
    width: 2560,
    height: 1534,
    date: new Date("2020-04-28"),
    blurHash: "LFRW6r~WIU9Z4.IAofE1x]IAM{tR",
  },
  {
    src: photo005,
    width: 1352,
    height: 817,
    date: new Date("2020-05-30"),
    blurHash: "L8Ss50%M~qt7M{t7t7ofxuxuM{WB",
  },
  {
    src: photo006,
    width: 1080,
    height: 652,
    date: new Date("2020-06-04"),
    blurHash: "L4S$ovof~qxu4nM{-;t7D%t7t7Rj",
  },
  {
    src: photo007,
    width: 680,
    height: 486,
    date: new Date("2020-12-26"),
    blurHash: "LASF;LM{xuD%WBM{xuWB~q%Mt7t7",
  },
  {
    src: photo008,
    width: 700,
    height: 421,
    date: new Date("2020-12-30"),
    blurHash: "LGQ,L1-;t7WB009FofRj~qD%9Fj[",
  },
  {
    src: photo009,
    width: 700,
    height: 525,
    date: new Date("2021-01-02"),
    blurHash: "LFRMb$s:D%oL?bD%WBWB~q?bIURj",
  },
  {
    src: photo010,
    width: 870,
    height: 524,
    date: new Date("2021-01-15"),
    blurHash: "LMSFz^.TVrMxV?%NIUfk%$r:t9tR",
  },
  {
    src: photo011,
    width: 999,
    height: 988,
    date: new Date("2021-01-28"),
    blurHash: "L1R:HG_3~q00R*00_3?b9FWB%Mof",
  },
  {
    src: photo012,
    width: 576,
    height: 233,
    date: new Date("2021-02-19"),
    blurHash: "L3SF;L9F00j[0000M{IU~q9F~qD%",
  },
  {
    src: photo013,
    width: 1638,
    height: 764,
    date: new Date("2021-03-23"),
    blurHash: "L3SPX_RjD%D%4n004nWB~q4n9FRj",
  },
  {
    src: photo014,
    width: 769,
    height: 407,
    date: new Date("2021-05-09"),
    blurHash: "L3Rp8-4n%Mj@00j[%MM{00_3_3%M",
  },
  {
    src: photo015,
    width: 749,
    height: 659,
    date: new Date("2021-05-22"),
    blurHash: "L9RW0b-;%MRj~q-;D%j[RjD%j[fQ",
  },
  {
    src: photo016,
    width: 960,
    height: 800,
    date: new Date("2021-05-23"),
    blurHash: "LER{x%~qx]8__ND$oLx]%MxuWBof",
  },
  {
    src: photo017,
    width: 1352,
    height: 817,
    date: new Date("2021-05-23"),
    blurHash: "L8Ss50%M~qt7M{t7t7ofxuxuM{WB",
  },
  {
    src: photo018,
    width: 2346,
    height: 1512,
    date: new Date("2021-05-27"),
    blurHash: "LTRC[6Rj%MRjoffQt7M{~qxuIURj",
  },
  {
    src: photo019,
    width: 1170,
    height: 851,
    date: new Date("2021-06-14"),
    blurHash: "LDRC[6-;-;Rj~qt7t7IUD%xuxufQ",
  },
  {
    src: photo020,
    width: 409,
    height: 610,
    date: new Date("2021-09-01"),
    blurHash: "LAR{#=bH?bt6~qt7t7ay9FM{t7of",
  },
  {
    src: photo021,
    width: 1280,
    height: 820,
    date: new Date("2021-10-09"),
    blurHash: "L6SY{qD%xu-;xu~q-;M{xuay9FIU",
  },
  {
    src: photo022,
    width: 498,
    height: 506,
    date: new Date("2021-10-18"),
    blurHash: "LJQ].*t7?bt7-;M{xuWB~qt7tQay",
  },
  {
    src: photo023,
    width: 1026,
    height: 540,
    date: new Date("2021-11-22"),
    blurHash: "L3SF;L%MRj9F9F00ay?b~qIUM{Rj",
  },
  {
    src: photo024,
    width: 1752,
    height: 1312,
    date: new Date("2021-12-04"),
    blurHash: "LsMQx4of%gs:~qj[%2t7IURjflWq",
  },
  {
    src: photo025,
    width: 943,
    height: 1024,
    date: new Date("2021-12-07"),
    blurHash: "LESY{qayofRjofWBofj[~qxuRjt7",
  },
  {
    src: photo026,
    width: 600,
    height: 495,
    date: new Date("2021-12-24"),
    blurHash: "L5SigQ%M_3Rj~q00D%?bWBxu00IU",
  },
  {
    src: photo027,
    width: 1229,
    height: 864,
    date: new Date("2021-12-24"),
    blurHash: "LeLN*{xu4nRj~qf6M{fQ00Rj%Moz",
  },
  {
    src: photo028,
    width: 1000,
    height: 556,
    date: new Date("2022-02-02"),
    blurHash: "L9QvwR_3D%4n~qD%ay-;%MRj4n-;",
  },
  {
    src: photo029,
    width: 600,
    height: 437,
    date: new Date("2022-02-02"),
    blurHash: "LUQcn{WB~qofWBRj-;t7M{WBxu%M",
  },
  {
    src: photo030,
    width: 784,
    height: 414,
    date: new Date("2022-03-06"),
    blurHash: "L4SF;LV@D%IoD%00M{_3~qM{WBof",
  },
  {
    src: photo031,
    width: 1280,
    height: 909,
    date: new Date("2022-04-15"),
    blurHash: "LGRDG:M_+}jF=|ofkWfk}[kCgMWW",
  },
  {
    src: photo032,
    width: 1080,
    height: 570,
    date: new Date("2022-05-20"),
    blurHash: "L1SPX_00?b000000-;0000~qWB00",
  },
  {
    src: photo033,
    width: 1600,
    height: 656,
    date: new Date("2022-06-04"),
    blurHash: "L8SiT^_N.St6hzJ7.8RP?H%g9Frr",
  },
  {
    src: photo034,
    width: 1080,
    height: 1292,
    date: new Date("2022-07-06"),
    blurHash: "L3R{#?-;-;IU_3RjIUt7ay00_3xu",
  },
  {
    src: photo035,
    width: 980,
    height: 980,
    date: new Date("2022-08-16"),
    blurHash: "LESF;LofayayxuRjoffQ~qxuRjt7",
  },
  {
    src: photo036,
    width: 900,
    height: 600,
    date: new Date("2022-08-16"),
    blurHash: "L8RfkB9F?bay~qRjIURj~q?bWBay",
  },
  {
    src: photo037,
    width: 640,
    height: 289,
    date: new Date("2022-09-03"),
    blurHash: "LCRW0bt7%MIU%MD%WBIU~qM{IUWB",
  },
  {
    src: photo038,
    width: 1280,
    height: 937,
    date: new Date("2022-09-07"),
    blurHash: "L6Rp8--;M{IU_39F%M%M_3~qt7of",
  },
  {
    src: photo039,
    width: 600,
    height: 520,
    date: new Date("2022-10-01"),
    blurHash: "L6RW0b~qj[9F-:00-;-;%M%M-;IU",
  },
  {
    src: photo040,
    width: 1080,
    height: 1114,
    date: new Date("2022-10-26"),
    blurHash: "LNQvtH00M{-=_N?bxuM{xvxvoLV@",
  },
  {
    src: photo041,
    width: 720,
    height: 1186,
    date: new Date("2022-11-04"),
    blurHash: "LARp8-?b~qIU%MIUM{%M-;j[M{M{",
  },
  {
    src: photo042,
    width: 640,
    height: 585,
    date: new Date("2022-12-06"),
    blurHash: "L7Ss50WB?b%M~qt7IUM{%Mof%May",
  },
  {
    src: photo043,
    width: 1388,
    height: 1306,
    date: new Date("2022-12-11"),
    blurHash: "L6SPX_D%~q?b9FD%_3-;IURj-;%M",
  },
  {
    src: photo044,
    width: 680,
    height: 876,
    date: new Date("2023-02-01"),
    blurHash: "LCRysg00IAD%~q?v.8tRD%D%IAWB",
  },
  {
    src: photo045,
    width: 1200,
    height: 600,
    date: new Date("2023-04-01"),
    blurHash: "LyNdH]WB%MjY~qWBaxayRkoeRjbI",
  },
  {
    src: photo046,
    width: 868,
    height: 1080,
    date: new Date("2023-04-01"),
    blurHash: "L8GSuw}PogjEXAE.i_$0-nwHayNH",
  },
  {
    src: photo047,
    width: 1476,
    height: 1080,
    date: new Date("2023-04-01"),
    blurHash: "L6Rp8--;IUIU?b9Fxu%M?b~qj[of",
  },
  {
    src: photo048,
    width: 1080,
    height: 1080,
    date: new Date("2023-05-03"),
    blurHash: "L6Qvzdxu_4M{-:IU~q%Mt6?bt7of",
  },
  {
    src: photo049,
    width: 777,
    height: 578,
    date: new Date("2023-05-23"),
    blurHash: "L9RbxJ9]v2^Q~C%1NGNGZhR*xuay",
  },
  {
    src: photo050,
    width: 1280,
    height: 1280,
    date: new Date("2023-05-31"),
    blurHash: "L6Rfh3_NM{xu%g00ozR*00M{9F%2",
  },
];

export default imagesList;

export const yearsList: string[] = Array.from(
  imagesList.reduce((acc, imageInfo) => {
    acc.add(imageInfo.date.getFullYear().toString());
    return acc;
  }, new Set<string>())
).sort((a, b) => +b - +a);

// The code below allows to automate manual filling of the array above
// Most probably I will never need to use it...

// import { getImageSize } from "react-image-size";

// const a = "2019_01_19.jpg 2020_02_23.jpg 2020_04_02.jpg 2020_04_28.jpg 2020_05_30.jpg 2020_06_04.jpg 2020_12_26.jpg 2020_12_30.jpg 2021_01_02.jpg 2021_01_15.jpg 2021_01_28.jpg 2021_02_19.jpg 2021_03_23.jpg 2021_05_09.jpg 2021_05_22.jpg 2021_05_23(1).jpg 2021_05_23.jpg 2021_05_27.jpg 2021_06_14.jpg 2021_09_01.jpg 2021_10_09.jpg 2021_10_18.jpg 2021_11_22.jpg 2021_12_04.jpg 2021_12_07.jpg 2021_12_24(1).jpg 2021_12_24.jpg 2022_02_02(2).jpg 2022_02_02.jpg 2022_03_06.jpg 2022_04_15.jpg 2022_05_20.jpg 2022_06_04.jpg 2022_07_06.jpg 2022_08_16(1).jpg 2022_08_16(2).jpg 2022_09_03.jpg 2022_09_07.jpg 2022_10_01.jpg 2022_10_26.jpg 2022_11_04.jpg 2022_12_06.jpg 2022_12_11.jpg 2023_02_01.jpg 2023_04_01(1).jpg 2023_04_01(2).jpg 2023_04_01(3).jpg 2023_05_03.jpg 2023_05_23.jpg 2023_05_31.jpg"

// const b = a.split(" ").map((item, i) => `import photo${(i+1).toString().padStart(2, "0")} from "./assets/gallery/${item}";`)
// b.forEach(e => console.log(e))

// const photos = [
//   photo001,
//   photo002,
//   photo003,
//   photo004,
//   photo005,
//   photo006,
//   photo007,
//   photo008,
//   photo009,
//   photo010,
//   photo011,
//   photo012,
//   photo013,
//   photo014,
//   photo015,
//   photo016,
//   photo017,
//   photo018,
//   photo019,
//   photo020,
//   photo021,
//   photo022,
//   photo023,
//   photo024,
//   photo025,
//   photo026,
//   photo027,
//   photo028,
//   photo029,
//   photo030,
//   photo031,
//   photo032,
//   photo033,
//   photo034,
//   photo035,
//   photo036,
//   photo037,
//   photo038,
//   photo039,
//   photo040,
//   photo041,
//   photo042,
//   photo043,
//   photo044,
//   photo045,
//   photo046,
//   photo047,
//   photo048,
//   photo049,
//   photo050,
// ];

// const test = [];

// for (let i = 0; i < photos.length; i++) {
//   const photoSrc = photos[i];
//   const { width, height } = await getImageSize(photoSrc);
//   // const result = photoSrc.match(/\/(\d{4})_/);
//   // if (result !== null) console.log(result[1]);

//   const regex = /(\d{4})_(\d{2})_(\d{2})/;
//   const match = photoSrc.match(regex);
//   const year = match?.[1];
//   const month = match?.[2];
//   const day = match?.[3];

//   const imageDescription = {
//     src: `photo${(i + 1).toString().padStart(3, "0")}`,
//     width,
//     height,
//     date: `new Date("${year}-${month}-${day})`,
//   };
//   test.push(imageDescription);
// }
