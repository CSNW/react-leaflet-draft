"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DraftControl = void 0;

var React = _interopRequireWildcard(require("react"));

var _core = require("@react-leaflet/core");

require("leaflet-draw");

var _factory = require("./factory");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DraftControl = /*#__PURE__*/React.memo((0, _core.createControlComponent)(function (props) {
  var context = (0, _core.useLeafletContext)();
  var onDrawCreated = React.useCallback(function (event) {
    var onCreated = props.onCreated,
        limitLayers = props.limitLayers;
    var container = context.layerContainer || context.map;
    var eventLayers = event.layer;
    var containerLayers = container.getLayers();

    if (containerLayers.length + 1 > limitLayers) {
      onCreated({
        error: {
          layer: 'limit reached'
        }
      });
      return;
    }

    container.addLayer(eventLayers);
    onCreated && onCreated(event);
  }, []);
  React.useEffect(function () {
    __dirname.mapObject(props, function (propValue, propName) {
      if (propName.startsWith('on') && propName !== "onCreated") {
        var event = "draw:".concat(propName.substring(2).toLowerCase());
        context.map.on(event, propValue);
      }
    });
  }, []);
  React.useEffect(function () {
    context.map.on(window.L.Draw.Event.CREATED, onDrawCreated);
  }, []);
  return (0, _factory.createControlDraw)(props, context);
}));
exports.DraftControl = DraftControl;