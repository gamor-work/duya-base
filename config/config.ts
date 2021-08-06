import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  theme: {
    '@primary-color': '#1DA57A',
  },
  qiankun: {
    master: {
      apps: [
        {
          name: 'duya-brower-cli', // 唯一 id
          entry: '//localhost:8001', // html entry
        },
      ],
    },
  },
  routes,
  fastRefresh: {},
});
