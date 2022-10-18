import Vue from 'vue'
import VueRouoter from 'vue-router'
import BackGround from '../src/components/BackGround'

Vue.use(VueRouoter)

const routes = [{
    path: '/',
    name: 'BackGround',
    component: BackGround,
    children: [
        {
            path: '/',
            name: 'login',
            component: () => import('../views/Login')
        }
    ]

}]

const router = new VueRouoter({
    mode: 'history',
    routes
})

export default router