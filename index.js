const increaseSpecificity = (repeat=3) => rule => {
  rule.selector = ':root'.repeat(repeat) + ' ' + rule.selector;
};

module.exports = increaseSpecificity;
