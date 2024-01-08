export function generateDateFromPostId(postId: number) {
   
  const startDate = new Date('2023-01-01'); // Set the start date to any desired date
  const millisecondsInADay = 24 * 60 * 60 * 1000;

  const daysToAdd = (postId - 1) % 365;
  const postDate = new Date(startDate.getTime() + daysToAdd * millisecondsInADay);

  return postDate.toDateString();
}
  
