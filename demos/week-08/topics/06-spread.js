// ... -> spread (overloaded with "rest")

// copy / merge objects and arrays
const nums1 = [ 1, 2, 3 ], nums2 = [ 4, 5, 6 ];

// ...nums1, ...nums2 -> nums1[0], nums1[1], nums1[2], nums2[0], nums2[1], nums2[2]
const nums3 = [ ...nums1, ...nums2 ];
console.log( nums3 );

const john = {
    name: 'John',
    age: 32,
};

const johnEmployment = {
    name: 'Jonathan',
    companyName: 'Example Consulting',
    role: 'Fullstack Developer'
};

const johnMaster = {
    // name: john.name, age: john.age, name: je.name, companyName: je.companyName, role: je.role
    ...john,
    ...johnEmployment,
    spouse: 'Jane'
};

console.log( johnMaster );