const { LocalDataParser, LocalDataPostProcessor } = require('dipe-processors');

// LocalSingleDataParser
const parseFileContent = require('dipe-processors/dist/utils/parseFileContent').default;
const { extname, join } = require('path');

/* */
const LocalSingleDataParser = (data, { source, fileName }, options) => {
  const fileExt = extname(fileName);
  const filePath = join(source, fileName);
  
  // Check if the parser supports the file extension
  const allowedExtensions = ['.md', '.mdx', '.json'];
  if(!allowedExtensions.includes(fileExt)) {
    return {}
  }

  return parseFileContent({ fileName, fileExt, filePath }, options);
}
//

const processors = [
  LocalDataParser,
  LocalDataPostProcessor
];

const config = {
  blog: {
    processors,
    source: './data/blog',
  },
  projects: {
    processors,
    source: './data/projects',
  },
  about: {
    processors: [
      LocalSingleDataParser
    ],
    fileName: './about.md',
    source: './data',
  },
  homepage: {
    processors: [
      LocalSingleDataParser
    ],
    fileName: './homepage.md',
    source: './data',
  },
  blogpage: {
    processors: [
      LocalSingleDataParser
    ],
    fileName: './blog.md',
    source: './data',
  }
};

export default config;