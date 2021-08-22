import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const { HotModuleReplacementPlugin } = webpack

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default {
	mode: 'development',
	entry: resolve(__dirname, './src/index.js'),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.css$/i,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	output: {
		path: resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	plugins: [new HotModuleReplacementPlugin(), new HtmlWebpackPlugin()],
	devServer: {
		hot: true,
		port: 3000,
		historyApiFallback: true,
	},
}
