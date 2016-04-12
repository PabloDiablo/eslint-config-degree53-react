module.exports = {

	"parser": "babel-eslint",
	
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		}
	}

	"plugins": [
		"react"
	],

	"rules": {
		"react/display-name": [ 2, {
			"acceptTranspilerName": true
		}],
		"react/forbid-prop-types": 0,
		"react/jsx-boolean-value": [ 2, "always" ],
		"react/jsx-closing-bracket-location": 0,
		"react/jsx-curly-spacing": [ 2, "never" ],
		"react/jsx-handler-names": 0,
		"react/jsx-indent-props": 0,
		"react/jsx-key": 2,
		"react/jsx-max-props-per-line": 0,
		"react/jsx-no-bind": 2,
		"react/jsx-no-duplicate-props": 2,
		"react/jsx-no-literals": 2,
		"react/jsx-no-undef": 2,
		"react/jsx-pascal-case": 2,
		"react/jsx-quotes": 0, // review
		"react/jsx-sort-prop-types": [ 2, {
			"callbacksLast": false,
			"ignoreCase": false
		}],
		"react/jsx-sort-props": 0,
		"react/jsx-uses-react": 2,
		"react/jsx-uses-vars": 2,
		"react/no-danger": 2,
		"react/no-did-mount-set-state": 2,
		"react/no-did-update-set-state": 2,
		"react/no-direct-mutation-state": 2,
		"react/no-multi-comp": 2,
		"react/no-set-state": 0,
		"react/no-unknown-property": 2,
		"react/prefer-es6-class": 0,
		"react/prop-types": 0,
		"react/react-in-jsx-scope": 2,
		"react/require-extension": 0,
		"react/self-closing-comp": 2,
		"react/sort-comp": [ 2, {
			"groups": {
				"lifecycle": [
					
					"displayName",
					
					"mixins",
					
					"statics",
					
					"contextTypes",
					"childContextTypes",
					"getChildContext",
					
					"propTypes",
					"defaultProps", // ES6
					"getDefaultProps",
					
					"state", // ES6
					"constructor", // ES6
					"getInitialState",
					
					"componentWillMount",
					"componentDidMount",
					"componentWillReceiveProps",
					"shouldComponentUpdate",
					"componentWillUpdate",
					"componentDidUpdate",
					"componentWillUnmount"
					
				],
				"eventHandlers": [
					"/^on.+$/"
				],
				"rendering": [
					"/^render.+$/",
					"render"
				]
			},
			"order": [
				"lifecycle",
				"everything-else",
				"eventHandlers",
				"rendering"
			]
		}],
		"react/wrap-multilines": [ 2, {
			"assignment": true,
			"declaration": true,
			"return": true
		}]
	}

};
