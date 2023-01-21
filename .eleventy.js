const path = require('path');

const SECTIONS = ['HOME', 'STAFF'];

module.exports = (eleventyConfig) => {
  // Passthroughs
	eleventyConfig.addPassthroughCopy({ 'src/css': 'css' });
	eleventyConfig.addPassthroughCopy({ 'src/js': 'js' });
	eleventyConfig.addPassthroughCopy({ 'src/images': 'images' });

  // Collections
  eleventyConfig.addCollection('sections', () => SECTIONS.map(section => ({
    label: section,
    path: `#${section.toLowerCase()}`,
  })));

	return {
		dir: {
			input: path.resolve(__dirname, 'src'),
			output: path.resolve(__dirname, 'dist'),
			includes: 'templates',
		},
	};
};
