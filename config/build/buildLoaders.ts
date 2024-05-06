import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { buildBabelLoader } from './babel/buildBabelLoader';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development';
    const isProd = options.mode === 'production';

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const cssLoadersWithModule = {
        loader: "css-loader",
    }

    const svgrLoader = {
        test: /\.svg$/i,
        use: [
            { 
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                }
                            }
                        ]
                    }
                } 
            }
        ],
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        cssLoadersWithModule,
        "sass-loader",
        ],
    }

    const babelLoader = buildBabelLoader(options);

    return [
        assetLoader,
        scssLoader,
        babelLoader,
        svgrLoader,
    ]
}