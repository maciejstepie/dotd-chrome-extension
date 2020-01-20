import { PersonalRaidsData } from "../Raids/Personal";
import { MediumRaidsData } from "../Raids/Medium";
import { LargeRaidsData } from "../Raids/Large";
import { EpicRaidsData } from "../Raids/Epic";
import { GiganticRaidsData } from "../Raids/Gigantic";
import { ColossalRaidsData } from "../Raids/Colossal";
import numeral from "numeral";

function dynamicSort(property) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function(a, b) {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

function AllRaids() {
  return PersonalRaidsData.concat(MediumRaidsData)
    .concat(LargeRaidsData)
    .concat(EpicRaidsData)
    .concat(GiganticRaidsData)
    .concat(ColossalRaidsData);
}
export const GetAllRaids = AllRaids(); //idk but tak trzeba

export function GetTypes() {
  const ar = AllRaids().map(function(x) {
    return x.type;
  });
  const merged = [].concat.apply([], ar);
  const uniq = [...new Set(merged)];
  const valuated = uniq.map(function(x) {
    return { value: x, label: x };
  });
  return valuated.sort(dynamicSort("value"));
}

//Convert number/string to number
function FormatNumber(value, forShow) {
  const isNumber = Number(value);

  let x =
    !isNumber && value !== undefined ? value.split(/(\d+\.?\d?)\s?(\D*)/) : [];

  let t = [];
  x.forEach(element => {
    if (element !== "") t.push(element);
  });
  if (t.length === 2) {
    const num = t[0];

    switch (t[1]) {
      case "q":
        return forShow ? num + " q" : num * 10 ** 18;
      case "qi":
        return forShow ? num + " qi" : num * 10 ** 21;

      default:
        break;
    }
  }

  return forShow
    ? numeral(value).format(`0[.]0 a`)
    : numeral(value).format(`0`);
}

export function ShowFormatedHpDMg(value) {
  if (value) return FormatNumber(value, true);
  else return "?";
}

export function LinkToArt(type, size, url) {
  const mainPath = "/media/SplashArts/";
  let x = mainPath + type + "/" + size + "/" + url;
  return x;
}
