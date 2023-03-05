const pluginWebc = require("@11ty/eleventy-plugin-webc");
const slug = require("limax");

module.exports = function(eleventyConfig) {
	// define location for WebC components
	eleventyConfig.addPlugin(pluginWebc, {
		components: "_includes/components/**/*.webc",
	});
	// define post collection by input path
	eleventyConfig.addCollection("post", function(collectionApi) {
		return collectionApi.getFilteredByGlob("_posts/*.md");
	});
	// use limax to create slug from titles
	eleventyConfig.addFilter("unislug", function(value) {
		return slug(value);
	});
}
