import { remark } from 'remark'
import html from 'remark-html'

export async function markdown2Html(markdown) {
  try {
    const result = await remark().use(html).process(markdown)
    return result.toString()

  } catch (e) {
    throw new Error(e)
  }
}