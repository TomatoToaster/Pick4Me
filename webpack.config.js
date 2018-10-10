/**
 * Configuration for the Front End component of this Project
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const app_dir = path.resolve(__dirname, 'dist/front');
const src_dir = path.resolve(__dirname, 'src/front');

const config = {
	entry: `${src_dir}/index.js`,
	output: {
		path: app_dir,
		filename: 'bundle.js',
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				use: [
							{
								loader: 'babel-loader',
									options: {
										babelrc: false,
										presets: ['react'],
										plugins: ["transform-class-properties"]
									}
							}
				],
				exclude: /node_modules/
			},
			{
				test: /\.(s*)css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				exclude: /node_modules/
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			title: 'Pick for Me!',
			template: `${src_dir}/index.html`,
			filename: `${app_dir}/index.html`,
		}),
	],
};

module.exports = config;