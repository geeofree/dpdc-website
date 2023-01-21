const path = require('path');

module.exports = (eleventyConfig) => {
  // Passthroughs
	eleventyConfig.addPassthroughCopy({ 'src/js': 'js' });
	eleventyConfig.addPassthroughCopy({ 'src/images': 'images' });

	return {
		dir: {
			input: path.resolve(__dirname, 'src'),
			output: path.resolve(__dirname, 'dist'),
			includes: 'templates',
		},
	};
};
