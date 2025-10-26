import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://img.moegirl.org.cn/common/6/61/%E4%B8%89%E5%8F%B8%E7%BB%AB%E6%BF%91_%E8%A7%92%E8%89%B2%E6%AD%8C%E4%B8%93%E8%BE%91%E5%B0%81%E9%9D%A2.jpg',
        namespace: 'https://github.com/Vincent-the-gamer/ayase',
        match: [
          'https://live.bilibili.com/*'
        ],
        license: "https://github.com/Vincent-the-gamer/ayase/blob/main/LICENSE.md"
      },
    }),
  ],
});
