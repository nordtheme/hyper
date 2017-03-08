/*
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * title      Nord Hyper                                    +
 * project    nord-hyper                                    +
 * repository https://github.com/arcticicestudio/nord-hyper +
 * author     Arctic Ice Studio                             +
 * email      development@arcticicestudio.com               +
 * copyright  Copyright (c) 2017                            +
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
const nord = {
  nord0: "#2E3440",
  nord1: "#3B4252",
  nord2: "#434C5E",
  nord3: "#4C566A",
  nord4: "#D8DEE9",
  nord5: "#E5E9F0",
  nord6: "#ECEFF4",
  nord7: "#8FBCBB",
  nord8: "#88C0D0",
  nord9: "#81A1C1",
  nord10: "#5E81AC",
  nord11: "#BF616A",
  nord12: "#D08770",
  nord13: "#EBCB8B",
  nord14: "#A3BE8C",
  nord15: "#B48EAD"
};

const backgroundColor = nord.nord0;
const foregroundColor = nord.nord4;
const cursorColor = nord.nord4;
const borderColor = backgroundColor;

const colors = {
  black: nord.nord1,
  red: nord.nord11,
  green: nord.nord14,
  yellow: nord.nord13,
  blue: nord.nord9,
  magenta: nord.nord15,
  cyan: nord.nord8,
  white: nord.nord5,
  lightBlack: nord.nord3,
  lightRed: nord.nord11,
  lightGreen: nord.nord14,
  lightYellow: nord.nord13,
  lightBlue: nord.nord9,
  lightMagenta: nord.nord15,
  lightCyan: nord.nord7,
  lightWhite: nord.nord6,
  colorCubes: nord.nord6,
  grayscale: foregroundColor
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor: cursorColor,
    colors,
    cursorShape: config.cursorShape || "BEAM",
    fontSize: config.fontSize || 16,
    fontFamily: config.fontFamily || "'Source Code Pro', Hack",
    termCSS: `
      ${config.termCSS || ""}
      ::selection {
        background: rgba(67, 76, 94, 0.8) !important;
      }
      .cursor-node {
        border-left-width: 2px;
      }
      @keyframes blink {
        10%, 50% { opacity: 0 }
        60%, 100% { opacity: 1 }
      }
      .cursor-node[focus=true] {
        mix-blend-mode: difference;
      }
      .cursor-node[focus=true]:not([hyper-blink-moving]) {
        box-sizing: content-box !important;
        animation: blink 1s ease infinite;
      }
    `,
    css: `
      ${config.css || ""}
      * {
        text-rendering: optimizeLegibility !important;
      }
      .header_header {
        background-color: ${backgroundColor} !important;
        top: 0 !important;
        right: 0 !important;
        left: 0 !important;
      }
      ::selection {
        background: rgba(67, 76, 94, 0.8) !important;
      }
      .tab_first {
        margin-left: 0 !important;
        padding: 0 !important;
      }
      .tabs_list,
      .tab_tab {
        border: 0 !important;
      }
      .tab_tab {
        color: ${foregroundColor} !important;
        transition: color 400ms ease, background 400ms ease;
      }
      .tab_tab.tab_active,
      .tab_tab:hover {
        background-color: ${nord.nord1};
      }
      .splitpane_divider {
        background-color: rgba(67, 76, 94, 0.8) !important;
      }
      /*+---------------+
       + Plugin Support +
       +----------------+*/
      /*+--- hyper-statusline ---+*/
      .footer_footer {
        background-color: ${nord.nord1};
        transition: opacity 400ms ease;
      }
      .footer_footer .item_item {
        color: ${nord.nord4};
      }
      .footer_footer .item_icon.icon_dirty {
        background-color: ${nord.nord13};
      }
      .footer_footer .item_icon.icon_pull,
      .footer_footer .item_icon.icon_push {
        background-color: ${nord.nord7};
      }
    `
  });
};
