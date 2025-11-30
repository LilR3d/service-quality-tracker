// Two arrays to store feedback data
let feedbackComments = [];
let satisfactionRatings = [];

// Ask the user how many feedback entries they want to enter
let count = Number(prompt("How many feedback entries do you want to record?"));

// Loop to collect each feedback item
for (let i = 0; i < count; i++) {

// Ask for the comment
let comment = prompt("Enter customer feedback (short comment):");
feedbackComments.push(comment); // Add comment to array

// Ask for rating 1–5
let rating = Number(prompt("Enter satisfaction rating (1–5):"));
satisfactionRatings.push(rating); // Add rating to array
}

// Print results as tables
console.log("Feedback Comments:");
console.table(feedbackComments);

console.log("Satisfaction Ratings:");
console.table(satisfactionRatings);
