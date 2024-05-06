import { BuildOptions } from '../types/types';

export function buildBabelLoader(options: BuildOptions) {
  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    }
  }
}