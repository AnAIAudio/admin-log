// import { createRouter, createWebHistory } from 'vue-router';
// import NotFound from '@/views/NotFound.vue';
// import axiosInstance, { setHeaderAuthorization } from '@/utils/axiosInstance';
//
// const router = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     routes: [
//         {
//             path: '/',
//             name: 'LayoutMenu',
//             component: DefaultLayout,
//             children: [
//                 {
//                     path: '/',
//                     name: 'home',
//                     component: MenuList,
//                 },
//                 {
//                     path: '/login',
//                     name: 'LoginView',
//                     component: LoginView,
//                 },
//                 {
//                     path: '/pricing',
//                     name: 'ProductPricing',
//                     component: ProductPricing,
//                 },
//                 {
//                     path: '/legal',
//                     name: 'LegalNotice',
//                     component: LegalNotice,
//                 },
//                 {
//                     path: '/',
//                     name: 'NeedLoginCheckMenus',
//                     beforeEnter: async (to, from, next) => {
//                         const token = localStorage.getItem('token');
//                         const user_api_url = import.meta.env.VITE_API_URL + '/user';
//                         if (token) {
//                             setHeaderAuthorization(token);
//                             const response = await axiosInstance.get<ApiResponse>(`${user_api_url}/check`);
//                             if (response.data && response.data.result) return next();
//                             else next('/login');
//                         } else next('/login');
//                     },
//                     children: [
//                         {
//                             path: '/separate',
//                             name: 'SeparateAudio',
//                             component: SeparateAudio,
//                         },
//                         {
//                             path: '/tts',
//                             name: 'TTSView',
//                             component: TTSView,
//                         },
//                         {
//                             path: '/timbre',
//                             name: 'TimbreSynthesis',
//                             component: TimbreSynthesis,
//                         },
//                         {
//                             path: '/dubby',
//                             name: 'YoutubeMultiLang',
//                             component: YMSView,
//                         },
//                         {
//                             path: '/management',
//                             name: 'ManagementLayout',
//                             component: ManagementLayout,
//                             beforeEnter: async (to, from, next) => {
//                                 const token = localStorage.getItem('token');
//                                 const user_api_url = import.meta.env.VITE_API_URL + '/user';
//                                 if (token) {
//                                     setHeaderAuthorization(token);
//                                     const response = await axiosInstance.get<ApiResponse>(`${user_api_url}/manager`);
//                                     if (response.data && response.data.result) return next();
//                                     else next('/login');
//                                 } else next('/login');
//                             },
//                             children: [
//                                 {
//                                     path: 'timbre',
//                                     name: 'TimbreSynthesisManagement',
//                                     component: TimbreManagement,
//                                 },
//                                 {
//                                     path: 'tts',
//                                     name: 'TTSModelManagement',
//                                     component: TTSManagement,
//                                 },
//                                 {
//                                     path: 'billing',
//                                     name: 'BillingManagement',
//                                     component: BillingManagement,
//                                 },
//                                 {
//                                     path: 'product',
//                                     name: 'ProductManagement',
//                                     component: ProductManagement,
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//             ],
//         },
//         {
//             path: '/google',
//             name: 'GoogleAuth',
//             component: GoogleAuth,
//         },
//         {
//             path: '/:pathMatch(.*)*',
//             name: 'PageNowFounded',
//             component: NotFound,
//         },
//     ],
// });
//
// export default router;
