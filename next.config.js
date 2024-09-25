// @ts-check

/**
 * @type {import('next').NextConfig}
 */

const { withContentlayer } = require('next-contentlayer2');

const nextconfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "standalone",
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 128, 256],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 600000,
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/media",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",

    // If you do not want to use blurry placeholder images, then you can set
    // nextImageExportOptimizer_generateAndUseBlurImages to false and pass
    // `placeholder="empty"` to all <ExportedImage> components.
    nextImageExportOptimizer_generateAndUseBlurImages: "true",

    // If you want to cache the remote images, you can set the time to live of the cache in seconds.
    // The default value is 0 seconds.
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
}


module.exports = withContentlayer(nextconfig)