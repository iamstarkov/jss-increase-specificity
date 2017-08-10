# jss-increase-specificity

Increases specificity of selectors. Port of [postcss-increase-specificity][].

[postcss-increase-specificity]: https://github.com/MadLittleMods/postcss-increase-specificity


> use :not(#\20), :not(.\20) and :not(\20) instead of generating unlikely
> appearing ids…  
> —[twitter.com/subzey/status/829050478721896448](twitter.com/subzey/status/829050478721896448)

> Rationale: \20 is a css escape for U+0020 Space, and neither classname,
> nor id, nor tagname can contain a space  
> —[twitter.com/subzey/status/829051085885153280](twitter.com/subzey/status/829051085885153280)


## install

    npm install --save jss-increase-specificity


## Usage

```js

import jss from 'jss'
import preset from 'jss-preset-default'
import increaseSpecificity from 'jss-increase-specificity';

  jss
    .setup(preset())
    .use(increaseSpecificity())

  const styles = {
    button: {
      fontSize: 12,
      '&:hover': {
        background: 'blue'
      }
    },
    ctaButton: {
      extend: 'button',
      '&:hover': {
        background: color('blue').darken(0.3).hexString()
      }
    },
    '@media (min-width: 1024px)': {
      button: {
        width: 200
      }
    }
  }

  const {classes} = jss.createStyleSheet(styles).attach()

  document.body.innerHTML = `
    <button class="${classes.button}">Button</button>
    <button class="${classes.ctaButton}">CTA Button</button>
  `
```

Result

```html
<head>
  <style type="text/css">
    :not(#\20):not(#\20):not(#\20).button-123456 {
      font-size: 12px;
    }
    :not(#\20):not(#\20):not(#\20).button-123456:hover {
      background: blue;
    }
    :not(#\20):not(#\20):not(#\20).ctaButton-789012 {
      font-size: 12px;
    }
    :not(#\20):not(#\20):not(#\20).ctaButton-789012:hover {
      background: red;
    }
    @media (min-width: 1024px) {
      :not(#\20):not(#\20):not(#\20).button-123456 {
        min-width: 200px;
      }
    }
  </style>
</head>
<body>
  <button class="button-123456">Button</button>
  <button class="ctaButton-789012">CTA Button</button>
</body>
```

## API

### increaseSpecificity(options)

Options:

- `repeat`

Type: `Number`  
Default: `3`

How many times should plugin repeat `:not(#\20)`.

### Disable plugin for a Sheet

```js
jss.createStyleSheet(styles, {increaseSpecificity: false})
```

## License

MIT © [Vladimir Starkov](https://iamstarkov@gmail.com)
