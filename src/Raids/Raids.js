import { PersonalRaidsData } from '../Raids/Personal';
import { MediumRaidsData } from '../Raids/Medium';
import { LargeRaidsData } from '../Raids/Large';
import { EpicRaidsData } from '../Raids/Epic';
import { GiganticRaidsData } from '../Raids/Gigantic';
import { ColossalRaidsData } from '../Raids/Colossal';

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


    return PersonalRaidsData.concat(MediumRaidsData).concat(LargeRaidsData).concat(EpicRaidsData).concat(GiganticRaidsData).concat(ColossalRaidsData);
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
export function CalculateFairShare(hp, size){

	switch(size){

		case("Colosal"):
		return hp/500;
		
		default:
			return null;
	}
}