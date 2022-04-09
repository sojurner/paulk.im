import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

export async function markdown2HTML(markdown) {
  try {
    const result = await remark()
      .use(html, { sanitize: false })
      .use(prism)
      .process(markdown);
    return result?.toString();
  } catch (e) {
    throw new Error(e);
  }
}
