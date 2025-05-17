/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function trackSightings(...animalNames) {
  animalNames.forEach((name) => {
    console.log(`Animal sighted: ${name}`);
  });
}
trackSightings("Elephant", "Tiger", "Giraffe", "Zebra");

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const protectedAreas = [...forestHabitats, ...savannahHabitats];
console.log("Protected Areas:", protectedAreas);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
  population: 500,
  status: "Endangered",
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
const updatedRhinoStatus = {
  ...rhinoStatus,
  population: 600,
  status: "Critically Endangered",
};
console.log("Updated Rhino Status:", updatedRhinoStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
  name: "Leo",
  age: 5,
  species: "Lion",
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
const lionGeneticProfile = {
  ...lionProfile,
  genetics: {
    dnaSequence: "ATCGTAGC",
    traits: ["Mane Color", "Size"],
  },
};
console.log("Lion Genetic Profile:", lionGeneticProfile);

/*
 * Observations:
 * TODO: Explain here.
 * When modifying the `genetics` property of the copied object, it does not affect the original object. This is because the `genetics` property is a new reference in the copied object.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
  waterQuality: "Good",
  foodSupply: {
    herbivores: "Abundant",
    carnivores: "Sufficient",
  },
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
const ecosystemHealthCopy = {
  ...ecosystemHealth,
  foodSupply: {
    ...ecosystemHealth.foodSupply,
    carnivores: "Scarce",
  },
};
console.log("Ecosystem Health Copy:", ecosystemHealthCopy);
/*
 * Observations:
 * When modifying the `foodSupply` property of the copied object, it does not affect the original object. This is because the `foodSupply` property is a new reference in the copied object.
 */
