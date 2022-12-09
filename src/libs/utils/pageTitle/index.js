import { projectName } from '@/settings'

const title = projectName || 'Video Admin'

export default pageTitle => pageTitle ? `${pageTitle} - ${title}` : `${title}`
