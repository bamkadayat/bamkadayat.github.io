import path from "path";
import { fileURLToPath } from "url";

// Equivalent to __dirname in ESM
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
