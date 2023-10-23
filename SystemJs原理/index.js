System.register(["react-dom", "react"], function (__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
    var __WEBPACK_EXTERNAL__MODULE_react_dom__ = {};
    var __WEBPACK_EXTERNAL__MODULE_react__ = {};
    Object.defineProperty(__WEBPACK_EXTERNAL__MODULE_react_dom__, "__esModule", { value: true });
    Object.defineProperty(__WEBPACK_EXTERNAL__MODULE_react__, "__esModule", { value: true });
    return {
        setters: [function (module) {
            Object.keys(module).forEach(function (key) {
                //findDomNode.render ... {};将加载后的资源对象赋予给 react-dom 上
                __WEBPACK_EXTERNAL__MODULE_react_dom__[key] = module[key];
            });
        },
        function (module) {
            Object.keys(module).forEach(function (key) { //将加载后的react模块放到这个对象上
                __WEBPACK_EXTERNAL__MODULE_react__[key] = module[key];
            });
        }
        ],
        execute: function () {
            // 渲染逻辑
        }
    }
}
)
