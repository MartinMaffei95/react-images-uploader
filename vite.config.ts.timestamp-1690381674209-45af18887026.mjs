// vite.config.ts
import { defineConfig } from "file:///G:/WEBS/packages/react-images-uploader/image-uploader/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import dts from "file:///G:/WEBS/packages/react-images-uploader/image-uploader/node_modules/vite-plugin-dts/dist/index.mjs";
import libCss from "file:///G:/WEBS/packages/react-images-uploader/image-uploader/node_modules/vite-plugin-libcss/index.js";
import react from "file:///G:/WEBS/packages/react-images-uploader/image-uploader/node_modules/@vitejs/plugin-react-swc/index.mjs";
var __vite_injected_original_dirname = "G:\\WEBS\\packages\\react-images-uploader\\image-uploader";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/main.tsx"),
      name: "ReactImagesUploader",
      fileName: "react-images-uploader",
      formats: ["cjs", "es", "iife", "umd"]
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  },
  plugins: [
    libCss(),
    dts({
      insertTypesEntry: true,
      include: ["src"]
    }),
    react()
  ],
  css: {
    devSourcemap: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxXRUJTXFxcXHBhY2thZ2VzXFxcXHJlYWN0LWltYWdlcy11cGxvYWRlclxcXFxpbWFnZS11cGxvYWRlclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRzpcXFxcV0VCU1xcXFxwYWNrYWdlc1xcXFxyZWFjdC1pbWFnZXMtdXBsb2FkZXJcXFxcaW1hZ2UtdXBsb2FkZXJcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0c6L1dFQlMvcGFja2FnZXMvcmVhY3QtaW1hZ2VzLXVwbG9hZGVyL2ltYWdlLXVwbG9hZGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQgbGliQ3NzIGZyb20gJ3ZpdGUtcGx1Z2luLWxpYmNzcydcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL21haW4udHN4JyksXG4gICAgICBuYW1lOiAnUmVhY3RJbWFnZXNVcGxvYWRlcicsXG4gICAgICBmaWxlTmFtZTogJ3JlYWN0LWltYWdlcy11cGxvYWRlcicsXG4gICAgICBmb3JtYXRzOiBbJ2NqcycsICdlcycsICdpaWZlJywgJ3VtZCddLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAgICdyZWFjdC1kb20nOiAnUmVhY3RET00nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICBlbXB0eU91dERpcjogdHJ1ZSxcbiAgfSxcblxuICBwbHVnaW5zOiBbXG4gICAgbGliQ3NzKCksXG4gICAgZHRzKHtcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgICBpbmNsdWRlOiBbJ3NyYyddLFxuICAgIH0pLFxuICAgIHJlYWN0KCksXG4gIF0sXG4gIGNzczoge1xuICAgIGRldlNvdXJjZW1hcDogdHJ1ZSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJWLFNBQVMsb0JBQW9CO0FBQ3hYLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sV0FBVztBQUpsQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3hDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxPQUFPLE1BQU0sUUFBUSxLQUFLO0FBQUEsSUFDdEM7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxNQUMvQixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxXQUFXO0FBQUEsSUFDWCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0Ysa0JBQWtCO0FBQUEsTUFDbEIsU0FBUyxDQUFDLEtBQUs7QUFBQSxJQUNqQixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
