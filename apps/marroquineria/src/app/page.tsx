import { BlogFeedTemplate } from '@saas/ui/src/templates/BlogFeedTemplate'
import { appConfig, articles } from './content'

export default function Page() {
  return <BlogFeedTemplate {...appConfig} articles={articles} />
}
