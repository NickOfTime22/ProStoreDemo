export { auth as middleware } from "@/auth";

export const config = {
  unstable_allowDynamic: [
    "**/node_modules/@auth/prisma-adapter/**",
    "**/node_modules/**prisma**/**",
  ],
};
