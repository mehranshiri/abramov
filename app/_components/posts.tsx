import Link from "next/link";
import { postType } from "../_utils/types";

export const Posts = ( {
  data,
}: {
  data: [postType],
}) => {
  return (
    <div>
      {data && data.length > 0 && data.map((item) => {
      return (
        <div key={item.id} className="relative -top-[10px] flex flex-col gap-8">
          <Link href={`/${item.id}`} data-testid={`anchor-${item.id}`} className="post-link block py-4 hover:scale-[1.005] scale-100 active:scale-100">
            <article>
              <h2 data-testid={`title-${item.id}`} className="text-[28px] font-black text-[--lightLink] dark:text-[--darkLink]">
                {item.title}
              </h2>
              <p className="text-[13px] text-gray-700 dark:text-gray-300">January 4, 2024</p>
              <p className="mt-1">{item.body}</p>
            </article>
          </Link>
        </div>
      )
      })}
    </div>
  )
}
export default Posts;