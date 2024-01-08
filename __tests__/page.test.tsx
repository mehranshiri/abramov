import { expect, test } from 'vitest'
import { getData } from '../app/[id]/page'

const post3 = {
  userId: 1,
  id:	3,
  title:	"ea molestias quasi exercitationem repellat qui ipsa sit aut",
  body:	"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
}

test('Page', async () => {
  expect(await getData(3)).toEqual(post3)
})