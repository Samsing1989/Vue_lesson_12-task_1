import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkersView from '../views/WorkersView.vue'
import CandidatesView from '../views/CandidatesView.vue'
import InterviewsView from '../views/InterviewsView.vue'
import WorkersEdit from '../views/WorkersEdit.vue'
import CandidatesEdit from '../views/CandidatesEdit.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/worker',
        name: 'worker',
        component: WorkersView,
    },
    {
        path: '/worker/config/:id?',
        name: 'worker-config',
        component: WorkersEdit,
    },

    {
        path: '/candidate',
        name: 'candidate',
        component: CandidatesView,
    },
    {
        path: '/candidate/config/:id?',
        name: 'candidate-config',
        component: CandidatesEdit,
    },
    {
        path: '/interview',
        name: 'interview',
        component: InterviewsView,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
