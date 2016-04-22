# Degree 53 React ESLint Config

This config is dependent on `v2.7.0` of `eslint` and `v4.3.0` of `eslint-plugin-react` being installed to your `./node_modules` at the same level.

Your `.eslintrc` file should be at the same level or deeper than your `./node_modules` and should contain the following:

``` javascript
{
	"extends": [
		"degree53-react"
	]
}
```

***NOTE:*** If you are using `babel`, you will also need to install `babel-eslint` and add the following to your `.esintrc` file:

``` javascript
{
	"parser": "babel-eslint"
}
```

For an explanation of the rules please see the [ESLint documentation](http://eslint.org/docs/rules/).
