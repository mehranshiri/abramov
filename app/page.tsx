import Posts from "./_components/posts";
import { postType } from "./_utils/types";

function compare(a: postType, b: postType) {  
	let comparison = 0;
	if (a.id < b.id) {
	  comparison = 1;
	} else if (a.id > b.id) {
	  comparison = -1;
	}
	return comparison;
}

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }  
  const data = await response.json();
  return data.sort(compare);
}

export default async function Home() {
  const posts: [postType]  = await getData();
  return (
    <main>
      <Posts data={posts} />
    </main>
  )
}