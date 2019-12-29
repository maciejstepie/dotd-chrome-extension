import { PersonalRaidsData } from '../Raids/Personal';

function dynamicSort(property) {
	var sortOrder = 1;
	if (property[0] === "-") {
		sortOrder = -1;
		property = property.substr(1);
	}
	return function(a, b) {
		var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
		return result * sortOrder;
	};
}

function AllRaids() {

    return PersonalRaidsData;
}

function Foo() {


    const ar = AllRaids().map(function(x){
        return x.type
    })
    const merged = [].concat.apply([], ar);
    const uniq = [...new Set(merged)];
    const valuated = uniq.map(function(x){ return {value: x, label: x}})
 return valuated.sort(dynamicSort("value"));
}


export const GetTypes = Foo();
export const GetAllRaids = AllRaids();
