import Home from '../pages/Home'
import Week from '../pages/Week'
import Hour from '../pages/Hour'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/week', component: Week },
    { path: '/hour', component: Hour }
]

export { publicRoutes }