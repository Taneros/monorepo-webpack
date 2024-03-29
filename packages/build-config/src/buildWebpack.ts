import { Configuration } from 'webpack'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { EMode, IBuildWebpack } from './types/types'

type ConfigurationExt = Required<Pick<Configuration, 'plugins'>> & Configuration;

export function buildWebpack(options: IBuildWebpack): ConfigurationExt {

  const { env, paths } = options;

  return {
    mode: env.mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash:8].js',
      clean: true,
    },
    plugins: buildPlugins({ env, paths }),
    module: {
      rules: buildLoaders({ env }),
    },
    resolve: buildResolvers({ paths }),
    devtool: env.mode === EMode['development'] ? 'eval-cheap-module-source-map' : false,
    devServer: buildDevServer({ env })
  }
}