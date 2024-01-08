import { generateDateFromPostId } from "../_utils/date";
import { postType } from "../_utils/types";

export async function getData(id: number) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	if (!response.ok) {
	  throw new Error('Failed to fetch data')
	}  
	const data = await response.json();
	return data;
}

export default async function Post({ params }: { params: { id: number } }) {	
	const post: postType = await getData(params.id);

  return (
		<main>
			<article>
				<h1 className="text-[40px] font-black leading-[44px] text-[--title]" data-testid="title">{post.title}</h1>
				<p className="mt-2 text-[13px] text-gray-700 dark:text-gray-300">{generateDateFromPostId(post.id)}</p>
				<div className="markdown mt-10">
					<p>{post.body}</p>
				</div>
			</article>
		</main>
	)
}