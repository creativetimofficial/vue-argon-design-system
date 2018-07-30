const isProd = process.env.NODE_ENV === "production";
module.exports = {
  lintOnSave: true,
  baseUrl: isProd ? "/vue-argon-design-system/" : ""
};
