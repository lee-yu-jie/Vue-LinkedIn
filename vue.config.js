const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `"@/assets/css/variables.scss"`
      },
      scss: {
        additionalData: `@import "@/assets/css/variables.scss";`
      }
    }
  }
})
