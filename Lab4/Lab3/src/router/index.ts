import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import Organizerview from '@/views/Organizerview.vue'
import StudentView from '@/views/StudentView.vue'
import EventDetailView from '@/views/event/DetailView.vue'
import EventRegisterView from '@/views/event/RegisterView.vue'
import EventEditView from '@/views/event/EditView.vue'
import EventLayoutView from '@/views/event/LayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/NotFoundView.vue'
import nProgress from 'nprogress'
import EventService from '@/services/EventService'
import { useEventStore } from '@/stores/event'

const router = createRouter({ //createRouter และ createWebHistory นำเข้ามาจาก vue-router เพื่อสร้าง Router และใช้ history ในการควบคุมการเปลี่ยนหน้าโดยไม่ต้องรีเฟรชหน้าเว็บ
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page?.toString() || '1') })
    },
    {
      path: '/about',
      name: 'about',
      // component: () => import('../views/AboutView.vue')
      component: AboutView
    },
    {
      path: '/Organizer',
      name: 'Organizer',
      component: Organizerview
    },
    {
      path: '/Student',
      name: 'Student',
      component: StudentView
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props: true
    },
    {
      path: '/network-error',
      name: 'network-error-view',
      component: NetworkErrorView
    },
    {
      path: '/event/:id',
      name: 'event-layout-view',
      component: EventLayoutView,
      props: true,
      beforeEnter: (to) => {
        const id = parseInt(to.params.id as string)
        const eventStore = useEventStore()
        return EventService.getEvent(id)
          .then((response) => {
            eventStore.setEvent(response.data)
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              return {
                name: '404-resource-view',
                params: { resource: 'event' }
              }
            } else {
              return { name: 'network-error-view' }
            }
          })      
        },
      children: [
        {
          path: '',
          name: 'event-detail-view',
          component: EventDetailView,
          props: true
        },
        {
          path: 'register',
          name: 'event-register-view',
          component: EventRegisterView,
          props: true
        },
        {
          path: 'edit',
          name: 'event-edit-view',
          component: EventEditView,
          props: true
        }
      ]
    }
  ]
})
router.beforeEach(() => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})
export default router