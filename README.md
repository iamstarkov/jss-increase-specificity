# jss-increase-specificity

Increases specificity of selectors. Port of [postcss-increase-specificity][].

[postcss-increase-specificity]: https://github.com/MadLittleMods/postcss-increase-specificity

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
```

Result

```html
<head>
  <style type="text/css">
    :root:root:root .button-123456 {
      font-size: 12px;
    }
    :root:root:root .button-123456:hover {
      background: blue;
    }
    :root:root:root .ctaButton-789012 {
      font-size: 12px;
    }
    :root:root:root .ctaButton-789012:hover {
      background: red;
    }
    @media (min-width: 1024px) {
      :root:root:root .button-123456 {
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


### increaseSpecificity(repeat)

    // increaseSpecificity :: Number -> Function

#### repeat

Type: `Number`  
Default: `3`

How many times should plugin repeat `:root`.

## License

MIT © [Vladimir Starkov](https://iamstarkov@gmail.com)
