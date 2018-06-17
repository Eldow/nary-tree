"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var isLeaf = function (supposedLeaf) {
    return Object.keys(supposedLeaf).sort() === ['tag', 'value'];
};
var isNode = function (supposedNode) {
    return Object.keys(supposedNode).sort() === ['children', 'tag'];
};
var topDownThatTreeFrom = function (root) {
    if (root === null || root === undefined || typeof root !== 'object')
        return false;
    if ('tag' in root && typeof root.tag === 'string') {
        if (root.tag === 'leaf' && isLeaf(root)) {
            return ('value' in root && typeof root.value === 'string');
        }
        else if (root.tag === 'node' && isNode(root)) {
            if ('children' in root && Array.isArray(root.children)) {
                root.children.forEach(function (child) {
                    return topDownThatTreeFrom(child);
                });
                return true;
            }
        }
    }
    return false;
};
var TreeType = /** @class */ (function (_super) {
    __extends(TreeType, _super);
    function TreeType() {
        var _this = _super.call(this, 'Tree', function (m) { return topDownThatTreeFrom(m); }, function (m, c) { return (_this.is(m) ? io_ts_1.success(m) : io_ts_1.failure(m, c)); }, io_ts_1.identity) || this;
        // equivalent to Type<Tree, Tree, mixed> as per type parameter defaults
        _this._tag = 'TreeType';
        return _this;
    }
    return TreeType;
}(io_ts_1.Type));
exports.TreeType = TreeType;
exports.Tree = new TreeType();
//# sourceMappingURL=Tree.js.map