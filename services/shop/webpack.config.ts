
import webpack from 'webpack'
import path from 'path'

import { buildWebpack } from "@packages/build-config";
import type { IEnvVariable } from "@packages/build-config";
import { EMode } from "@packages/build-config";

import packageJson from './package.json'

export default (env: IEnvVariable) => {

  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  }

  env.port ?? (env.port = 3001)
  env.platform ?? (env.platform = 'desktop')
  env.mode ?? (env.mode = EMode['development'])

  const config = buildWebpack({ env, paths })

  config.plugins.push(new webpack.container.ModuleFederationPlugin({
    name: 'shop',
    filename: 'remoteEntry.js',
    exposes: {
      './Router': './src/router/Router.tsx',
    },
    shared: {
      ...packageJson.dependencies,
      react: {
        eager: true,
        requiredVersion: packageJson.dependencies['react'],
      },
      'react-router-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-router-dom'],
      },
      'react-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-dom'],
      },
    },
  }))

  return config
}