import sampleSize from 'lodash.samplesize';
import {spread} from './index.js';
const data = [
	{ 
		name: "Clark Kent",
		city: "Charlotte",
		state: "North Carolina",
		zip: "28105",
		age: 34,
		gender: "Male",
		changed: []
	},
	{ 
		name: "Diana Prince",
		city: "Silver Spring",
		state: "Maryland",
		zip: "20901",
		age: 25,
		gender: "Female",
		changed: []
	},
	{ 
		name: "Peter Parker",
		city: "Olive Branch",
		state: "Mississippi",
		zip: "38654",
		age: 50,
		gender: "Male",
		changed: []
	},
	{ 
		name: "Tony Stark",
		city: "Lewiston",
		state: "Maine",
		zip: "04241",
		age: 30,
		gender: "Female",
		changed: []
	},
	{ 
		name: "Bruce Wayne",
		city: "Great Falls",
		state: "Virginia",
		zip: "22102",
		age: 27,
		gender: "Female",
		changed: []
	},
	{ 
		name: "T'Challa",
		city: "Los Angeles",
		state: "CA",
		zip: "22102",
		age: 30,
		gender: "Female",
		changed: []
	}
];

const treatData = [
	{ 
		name: "Superman",
		city: "Raleigh",
		state: "South Carolina",
		zip: "28106",
		age: 34,
		gender: "Female"
	},
	{ 
		name: "Wonder Woman",
		city: "Annapolis",
		state: "Virginia",
		zip: "20900",
		age: 56,
		gender: "Male"
	},
	{ 
		name: "Spider Man",
		city: "Biloxi",
		state: "Alabama",
		zip: "39654",
		age: 50,
		gender: "Female"
	},
	{ 
		name: "Ironman",
		city: "Portland",
		state: "Vermont",
		zip: "14242",
		age: 30,
		gender: "Male"
	},
	{ 
		name: "Batman",
		city: "Arlington",
		state: "Maryland",
		zip: "22112",
		age: 22,
		gender: "Male"
	},
	{ 
		name: "Black Panther",
		city: "Los Angeles",
		state: "CA",
		zip: "22102",
		age: 30,
		gender: "Female"
	}
];

const getData = (slider = null, formData = null) => {
	if (!slider || !formData) {
		return  [...data];
	}

	const valueKeys = [];

	for (const key in formData) {
		if (Object.hasOwnProperty.call(formData, key)) {
			if (formData[key]) {
				valueKeys.push(key);
			}
		}
	}

	const newData = [];
	
	data.forEach((dt, index) => {
		const thisDt = spread(dt);
		const treatDt = spread(treatData[index]);

		const sampledKeys = sampleSize(valueKeys, slider-1);

		sampledKeys.forEach(key => {
			thisDt[key] = treatDt[key];
			thisDt['changed'].push(key);
		});

		newData.push({...thisDt});
	});

	return newData;
}


export default getData;