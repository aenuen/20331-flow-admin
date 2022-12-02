// 异步加载
import iconsRouter from './modules/icons'
/* 以上固定 */
const asyncRoutes = [
  /* 以下固定 */
  iconsRouter,
  { path: '*', redirect: '/404', hidden: true } // 无页面=404页面
]

export default asyncRoutes
