
import { Configuration } from 'webpack'
import path from 'path'

import { buildWebpack } from "@packages/build-config";
import type { IBuildPaths, IBuildWebpack, IEnvVariable } from "@packages/build-config";
import { EMode } from "@packages/build-config";

export default (env: IEnvVariable) => {

  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  }

  env.port ?? (env.port = 3000)
  env.platform ?? (env.platform = 'desktop')
  env.mode ?? (env.mode = EMode['development'])

  const config: Configuration = buildWebpack({ env, paths })

  return config
}