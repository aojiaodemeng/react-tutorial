export default {
  singular: true,
  plugins: [
    ['umi-plugin-react', {
    	antd: true,
      dva: true,
    }],
  ],
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: '/',
        component: 'helloword'
      },
      {
        path: '/helloword',
        component: 'helloword'
      },
      {
        path: '/dashboard',
        routes: [
            { path: '/dashboard/analysis', component: 'dashboard/Analysis' },
            { path: '/dashboard/monitor', component: 'dashboard/Monitor' },
            { path: '/dashboard/workplace', component: 'dashboard/Workplace' }
        ]
      },
      {
        path: '/puzzlecards',
        component: './puzzlecards'
      }
    ]
  }],
  // proxy: {
  //   '/dev': {
  //     target: 'https://safe-falls-22549.herokuapp.com',
  //     changeOrigin: true,
  //   },
  // },
}