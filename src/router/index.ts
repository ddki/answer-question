import { createRouter, createWebHashHistory } from 'vue-router'
import ExamView from '../views/ExamView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:id',
      name: 'exam',
      component: ExamView,
    }
  ]
})

export default router
