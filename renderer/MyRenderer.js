amis.define('renderer/MyRenderer.tsx', function(require, exports, module, define) {

  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  var tslib_1 = require("node_modules/tslib/tslib");
  var amis_1 = require("node_modules/amis/lib/index");
  var react_1 = (0, tslib_1.__importDefault)(require("node_modules/react/index"));
  var MyRenderer = /** @class */ (function (_super) {
      (0, tslib_1.__extends)(MyRenderer, _super);
      function MyRenderer() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      MyRenderer.prototype.render = function () {
          var target = this.props.target;
          return (react_1.default.createElement("p", null,
              "Hello ",
              target,
              "!"));
      };
      MyRenderer.defaultProps = {
          target: 'world'
      };
      MyRenderer = (0, tslib_1.__decorate)([
          (0, amis_1.Renderer)({
              test: /\bmy-renderer$/,
              name: 'my-renderer'
          })
      ], MyRenderer);
      return MyRenderer;
  }(react_1.default.Component));
  exports.default = MyRenderer;
  //# sourceMappingURL=/renderer/MyRenderer.js.map
  

});
