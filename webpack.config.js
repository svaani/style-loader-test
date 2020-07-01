const path = require('path');
const miniCssExtract = require('mini-css-extract-plugin');

module.exports = {
"entry" :"./index.js",
"output" : {filename:"main.js",path:path.join(__dirname,"dist")},
"module" : { rules : [{test:/\.scss$/, use : ["style-loader","css-loader","sass-loader"]}]},
}
