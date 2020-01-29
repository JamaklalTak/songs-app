export const getScaledValue = (value = 0) => {
  return `${value * 1}px`;
};

export const dim = {
  _0px: getScaledValue(0),
  _1px: getScaledValue(1),
  _2px: getScaledValue(2),
  _4px: getScaledValue(4),
  _6px: getScaledValue(6),
  _8px: getScaledValue(8),
  _10px: getScaledValue(10),
  _12px: getScaledValue(12),
  _14px: getScaledValue(14),
  _16px: getScaledValue(16),
  _18px: getScaledValue(18),
  _20px: getScaledValue(20),
  _22px: getScaledValue(22),
  _24px: getScaledValue(24),
  _26px: getScaledValue(26),
  _28px: getScaledValue(28),
  _30px: getScaledValue(30),
  _32px: getScaledValue(32),
  _34px: getScaledValue(34),
  _36px: getScaledValue(36),
  _38px: getScaledValue(38),
  _40px: getScaledValue(40),
  _42px: getScaledValue(42),
  _44px: getScaledValue(44),
  _46px: getScaledValue(46),
  _48px: getScaledValue(48),
  _50px: getScaledValue(50),
  _52px: getScaledValue(52),
  _54px: getScaledValue(54),
  _56px: getScaledValue(56),
  _58px: getScaledValue(58),
  _60px: getScaledValue(60),
  _62px: getScaledValue(62),
  _64px: getScaledValue(64),
  _66px: getScaledValue(66),
  _68px: getScaledValue(68),
  _70px: getScaledValue(70),
  _scale: function _scale(value) {
    return getScaledValue(value);
  }
};

const Theme = {
  color: {
    base_0: '#000000',
    base_10: '#202124',
    base_20: '#54555d',
    base_30: '#72737d',
    base_80: '#eaebf0',
    base_90: '#f8f8fa',
    base_100: '#ffffff',
    blue_50: '#2f53d7',
    blue_80: '#95a3fb',
    green_50: '#1db510',
    green_80: '#84e57c',
    red_20: '#751818',
    red_50: '#eb5757'
  },
  dim
};

export default Theme;
