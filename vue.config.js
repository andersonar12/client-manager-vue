module.exports = {
  lintOnSave: false, //deshabilitamos warnings de es-lint
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_global.scss"; `
      }
    }
  }
}
