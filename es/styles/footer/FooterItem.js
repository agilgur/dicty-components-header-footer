var _templateObject = _taggedTemplateLiteralLoose(["\n  list-style: none;\n  ", ";\n"], ["\n  list-style: none;\n  ", ";\n"]);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from "react";
import styled from "styled-components";
import { space } from "styled-system";

var ItemStyle = styled.li(_templateObject, space);

var FooterItem = function FooterItem(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(
    ItemStyle,
    props,
    children
  );
};

export default FooterItem;