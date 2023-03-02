module.exports = {
    plugins: {
      'postcss-import': {},
			'@csstools/postcss-global-data': {
				files: ["./src/styles/common/queries.css"]
			},
      'postcss-preset-env': {
				stage: 0,
        features: {
					"logical-properties-and-values": false,
					"prefers-color-scheme-query": false,
					"gap-properties": false,
					"custom-properties": false,
					"dir-pseudo-class": false,
					"focus-within-pseudo-class": false,
					"focus-visible-pseudo-class": false,
					"color-functional-notation": false,
					// 'lab-function': {preserve: true},
					// "custom-media-queries": {
					//   importFrom: ["./src/styles/common/queries.css"],
					// },
				},
      },
      // autoprefixer: {
      //   overrideBrowserslist: ['last 2 versions'],
      // },
			autoprefixer: true
    }
};
