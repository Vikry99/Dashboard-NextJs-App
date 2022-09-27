/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

// function generateIncludes(modules) {
//   return [
//     new RegExp(`(${modules.join("|")})$`),
//     new RegExp(`(${modules.join("|")})/(?!.*node_modules)`),
//   ];
// }

// const includes = generateIncludes([
//   "d3-format", // list any other ES module packages here
// ]);

// module.exports = {
//   webpack: (config, options, nextConfig) => {
//     config.externals = config.externals.map((external) => {
//       if (typeof external !== "function") return external;
//       return (context, request, callback) => {
//         return includes.find((i) =>
//           i.test(
//             request.startsWith(".") ? path.resolve(context, request) : request
//           )
//         )
//           ? callback() // i.e., not an external
//           : external(context, request, callback);
//       };
//     });
//     return config;
//   },
// };
