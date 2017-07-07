import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '../view/Home'
  import IndexTab from '@/view/Home/children/IndexTab'
  	import Tody from '@/view/Home/children/children/Tody'
  	import Tomorrow from '@/view/Home/children/children/Tomorrow'        
  import FreeTab from '@/view/Home/children/FreeTab'
  import FransnanaTab from '@/view/Home/children/FransnanaTab'
  import LuxuriousTab from '@/view/Home/children/LuxuriousTab'
  import BrandsTab from '@/view/Home/children/BrandsTab'

import Team from '../view/Team'
  import RecommendTab from '@/view/Team/children/RecommendTab'
  import HealthTab from '@/view/Team/children/HealthTab'
  import InfantTab from '@/view/Team/children/InfantTab'
  import CosmeticTab from '@/view/Team/children/CosmeticTab'
  import HomeTab from '@/view/Team/children/HomeTab' 
  import UnderwearTab from '@/view/Team/children/UnderwearTab'
  import WomenTab from '@/view/Team/children/WomenTab'
  import FootwearTab from '@/view/Team/children/FootwearTab'
  import BagsTab from '@/view/Team/children/BagsTab'
  import CosplayTab from '@/view/Team/children/CosplayTab'
  import OutDoorTab from '@/view/Team/children/OutDoorTab'
  import OtherTab from '@/view/Team/children/OtherTab'
  import NextTab from '@/view/Team/children/NextTab'
import Car from '../view/Car'
import My from '../view/My'
  import SignIn from '../view/SignIn'
  import Login from '../view/Login'
  import PasswordLogin from '../view/PasswordLogin'
Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      redirect:"/Home/index/1"
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      redirect:"/Home/index/1/Tody",
      children:[
      	{
          path: 'index/:id',
          component: IndexTab,
          redirect:"/Home/index/1/Tody",
          children:[
	          {
	          	path: 'Tody',
	          	component: Tody
	          },
	          {
	          	path: 'Tomorrow',
	          	component: Tomorrow
	          }
          ]
        },
        {
          path: 'FreeTab/:id',
          component: FreeTab
        },
        {
          path: 'FransnanaTab/:id',
          component: FransnanaTab
        },
        {
          path: 'LuxuriousTab/:id',
          component: LuxuriousTab
        },
        {
          path: 'BrandsTab/:id',
          component: BrandsTab
        }
      ]
    },
    {
      path: '/Team',
      component: Team,
      name:"Team",
      redirect:"/Team/RecommendTab/1",
      children:[
        {
          path: 'RecommendTab/:id',
          component: RecommendTab
        },
        {
          path: 'HealthTab/:id',
          component: HealthTab
        },
        {
          path: 'InfantTab/:id',
          component: InfantTab
        },
        {
          path: 'CosmeticTab/:id',
          component: CosmeticTab
        },
        {
          path: 'HomeTab/:id',
          component: HomeTab
        },
        {
          path: 'UnderwearTab/:id',
          component: UnderwearTab
        },
        {
          path: 'WomenTab/:id',
          component: WomenTab
        },
        {
          path: 'FootwearTab/:id',
          component: FootwearTab
        },
        {
          path: 'BagsTab/:id',
          component: BagsTab
        },
        {
          path: 'CosplayTab/:id',
          component: CosplayTab
        },
        {
          path: 'OutDoorTab/:id',
          component: OutDoorTab
        },
        {
          path: 'OtherTab/:id',
          component: OtherTab
        },
        {
          path: 'NextTab/:id',
          component: NextTab
        }
      ]
    },
    {
      path: '/Car',
      component: Car
    },
    {
      path: '/My',
      component: My
    },
    {
      path: '/SignIn',
      component: SignIn
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/PasswordLogin',
      component: PasswordLogin
    }
  ]
})
