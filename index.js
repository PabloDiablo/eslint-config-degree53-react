module.exports = {

	"parser": "babel-eslint",
	
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		}
	},

	"plugins": [
		"react"
	],

	"rules": {
		"react/display-name": [ 2, {
			"ignoreTranspilerName": false
		}],
		"react/forbid-prop-types": 0,
		"react/jsx-boolean-value": [ 2, "always" ],
		"react/jsx-closing-bracket-location": 0,
		"react/jsx-curly-spacing": [ 2, "never" ],
		"react/jsx-equals-spacing": [ 2, "never" ],
		"react/jsx-first-prop-new-line": 0,
		"react/jsx-handler-names": 0,
		"react/jsx-indent": 0,
		"react/jsx-indent-props": 0,
		"react/jsx-key": 2,
		"react/jsx-max-props-per-line": 0,
		"react/jsx-no-bind": [ 2, {
			"allowArrowFunctions": false,
			"allowBind": false,
			"ignoreRefs": true
		}],
		"react/jsx-no-duplicate-props": [ 2, {
			"ignoreCase": true
		}],
		"react/jsx-no-literals": 2,
		"react/jsx-no-undef": 2,
		"react/jsx-pascal-case": 2,
		"react/jsx-sort-props": 0,
		"react/jsx-space-before-closing": 0,
		"react/jsx-uses-react": 2,
		"react/jsx-uses-vars": 2,
		"react/no-danger": 2,
		"react/no-did-mount-set-state": 2,
		"react/no-did-update-set-state": 2,
		"react/no-direct-mutation-state": 2,
		"react/no-is-mounted": 2,
		"react/no-multi-comp": [ 2, {
			"ignoreStateless": true
		}],
		"react/no-set-state": 0,
		"react/no-string-refs": 2,
		"react/no-unknown-property": 2,
		"react/prefer-es6-class": [ 2, "always" ],
		"react/prefer-stateless-function": 0,
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
					"defaultProps",
					"getDefaultProps",
					
					"state",
					"constructor",
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
		"react/sort-prop-types": [ 2, {
			"callbacksLast": false,
			"ignoreCase": false,
			"requiredFirst": false
		}],
		"react/wrap-multilines": [ 2, {
			"assignment": true,
			"declaration": true,
			"return": true
		}]
	}

};
