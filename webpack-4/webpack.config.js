const crypto = require('crypto');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: false,
        lib: {
          test(module) {
            return (
              module.size() > 160000 &&
              /node_modules[/\\]/.test(module.nameForCondition() || '')
            );
          },
          name(module) {
            const hash = crypto.createHash('sha1');
            if (!module.libIdent) {
              throw new Error(
                `Encountered unknown module type: ${module.type}. Please open an issue.`
              );
            }
            hash.update(module.libIdent({ context: path.resolve('.') }));
            return hash.digest('hex').substring(0, 8);
          },
          reuseExistingChunk: true,
        },
      },
    },
  },
};
