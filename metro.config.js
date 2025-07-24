// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.transformer = {
  ...config.transformer,
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  }),
};

config.resolver = {
  ...config.resolver,
  assetExts: [
    ...config.resolver.assetExts,
    "obj",
    "mtl",
    "JPG",
    "vrx",
    "hdr",
    "gltf",
    "glb",
    "bin",
    "arobject",
    "gif",
  ],
  sourceExts: [...config.resolver.sourceExts, "svg", "d.ts"],
};

// metro.config.js

module.exports = config;
