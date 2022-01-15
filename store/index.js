amis.define('store/index.ts', function(require, exports, module, define) {

  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MainStore = void 0;
  var tslib_1 = require("node_modules/tslib/tslib");
  var mobx_state_tree_1 = require("node_modules/mobx-state-tree/dist/mobx-state-tree");
  var Page_1 = require("store/Page.ts");
  var mobx_1 = require("node_modules/mobx/lib/index");
  var pagIndex = 1;
  exports.MainStore = mobx_state_tree_1.types
      .model('MainStore', {
      pages: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.array(Page_1.PageStore), [
          {
              id: "".concat(pagIndex),
              path: 'hello-world',
              label: 'Hello world',
              icon: 'fa fa-file',
              schema: {
                  type: 'page',
                  title: 'Hello world',
                  body: '初始页面'
              }
          }
      ]),
      theme: 'cxd',
      asideFixed: true,
      asideFolded: false,
      offScreen: false,
      addPageIsOpen: false,
      preview: false,
      isMobile: false,
      schema: mobx_state_tree_1.types.frozen()
  })
      .views(function (self) { return ({
      get fetcher() {
          return (0, mobx_state_tree_1.getEnv)(self).fetcher;
      },
      get notify() {
          return (0, mobx_state_tree_1.getEnv)(self).notify;
      },
      get alert() {
          return (0, mobx_state_tree_1.getEnv)(self).alert;
      },
      get copy() {
          return (0, mobx_state_tree_1.getEnv)(self).copy;
      }
  }); })
      .actions(function (self) {
      function toggleAsideFolded() {
          self.asideFolded = !self.asideFolded;
      }
      function toggleAsideFixed() {
          self.asideFixed = !self.asideFixed;
      }
      function toggleOffScreen() {
          self.offScreen = !self.offScreen;
      }
      function setAddPageIsOpen(isOpened) {
          self.addPageIsOpen = isOpened;
      }
      function addPage(data) {
          self.pages.push(Page_1.PageStore.create((0, tslib_1.__assign)((0, tslib_1.__assign)({}, data), { id: "".concat(++pagIndex) })));
      }
      function removePageAt(index) {
          self.pages.splice(index, 1);
      }
      function updatePageSchemaAt(index) {
          self.pages[index].updateSchema(self.schema);
      }
      function updateSchema(value) {
          self.schema = value;
      }
      function setPreview(value) {
          self.preview = value;
      }
      function setIsMobile(value) {
          self.isMobile = value;
      }
      return {
          toggleAsideFolded: toggleAsideFolded,
          toggleAsideFixed: toggleAsideFixed,
          toggleOffScreen: toggleOffScreen,
          setAddPageIsOpen: setAddPageIsOpen,
          addPage: addPage,
          removePageAt: removePageAt,
          updatePageSchemaAt: updatePageSchemaAt,
          updateSchema: updateSchema,
          setPreview: setPreview,
          setIsMobile: setIsMobile,
          afterCreate: function () {
              // persist store
              if (typeof window !== 'undefined' && window.localStorage) {
                  var storeData = window.localStorage.getItem('store');
                  if (storeData)
                      (0, mobx_state_tree_1.applySnapshot)(self, JSON.parse(storeData));
                  (0, mobx_1.reaction)(function () { return (0, mobx_state_tree_1.getSnapshot)(self); }, function (json) {
                      window.localStorage.setItem('store', JSON.stringify(json));
                  });
              }
          }
      };
  });
  //# sourceMappingURL=/store/index.js.map
  

});
