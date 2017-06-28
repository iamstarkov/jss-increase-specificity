/**
 * use :not(#\20), :not(.\20) and :not(\20) instead of generating unlikely
 * appearing ids…
 * — twitter.com/subzey/status/829050478721896448
 * Rationale: \20 is a css escape for U+0020 Space, and neither classname,
 * nor id, nor tagname can contain a space
 * — twitter.com/subzey/status/829051085885153280
 */

const selector = ':not(#\\20)';

module.exports = function increaseSpecificity({ repeat }={ repeat: 3 }) {
  const prefix = Array(repeat + 1).join(selector);
  const onProcessSheet = (sheet) => {
    sheet.rules.index.forEach(rule => {
      if (rule.type === 'conditional') {
        return onProcessSheet(rule);
      }

      rule.selectorText = prefix + rule.selectorText;
    });
  };

  return { onProcessSheet };
}
