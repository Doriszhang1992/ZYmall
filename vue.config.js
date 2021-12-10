// module.exports={
//   configurewebpack:{
//     resolve:{
//      alias:{
//        'assets':'@/assets',
//        'common':'@/common',
//        'components':'@/components',
//        'network':'@/network',
//        'views':'@/views',
//      }
//     }
//   }
// }

//npm  install  path  --save
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("network", resolve("src/network"))
      .set("views", resolve("src/views"))
      .set("common", resolve("src/common"))
  },


}