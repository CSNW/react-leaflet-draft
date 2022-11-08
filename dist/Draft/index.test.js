"use strict";

var _ = require(".");

var _reactLeaflet = require("react-leaflet");

var _react = require("@testing-library/react");

var _jsxRuntime = require("react/jsx-runtime");

afterEach(_react.cleanup);
describe('MarkerMuster Component', function () {
  it('should render and unmount component', function () {
    var position = [-22.2108112, -49.6771926];

    var _render = (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactLeaflet.MapContainer, {
      zoon: 10,
      center: position,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactLeaflet.FeatureGroup, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_.DraftControl, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactLeaflet.Marker, {
          position: position
        })]
      })
    })),
        container = _render.container,
        unmount = _render.unmount;

    expect(container).toMatchSnapshot();
    unmount();
  });
});