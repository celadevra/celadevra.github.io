const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc, {
		components: "_includes/components/**/*.webc",
	});
	eleventyConfig.addCollection("post", function(collectionApi) {
		return collectionApi.getFilteredByGlob("_posts/*.md");
	});
}
