export const mfConfig = {
  name: "detached",
  filename: "remoteEntry.js",
  library: { type: "var", name: "remote" },
  exposes: {
    "./RemoteEntry": "./src/App.tsx"
  },
  shared: {
    react: {
      eager: true,
      singleton: true
    },
    "react-dom": {
      eager: true,
      singleton: true
    }
  }
};