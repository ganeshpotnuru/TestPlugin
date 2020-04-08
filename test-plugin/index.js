var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var TestPluginOriginal = /** @class */ (function (_super) {
    __extends(TestPluginOriginal, _super);
    function TestPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestPluginOriginal.prototype.coolMethod = function (arg1) { return cordova(this, "coolMethod", {}, arguments); };
    TestPluginOriginal.pluginName = "TestPlugin";
    TestPluginOriginal.plugin = "cordova-plugin-testplugin";
    TestPluginOriginal.pluginRef = "TestPlugin";
    TestPluginOriginal.repo = "https://github.com/ganeshpotnuru/TestPlugin.git";
    TestPluginOriginal.install = "";
    TestPluginOriginal.installVariables = [];
    TestPluginOriginal.platforms = ["iOS"];
    return TestPluginOriginal;
}(IonicNativePlugin));
var TestPlugin = new TestPluginOriginal();
export { TestPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Rlc3QtcGx1Z2luL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLDhCQUEwRixNQUFNLG9CQUFvQixDQUFDOztJQWtDNUYsOEJBQWlCOzs7O0lBUy9DLCtCQUFVLGFBQUMsSUFBWTs7Ozs7Ozs7cUJBdkR6QjtFQThDZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBUZXN0IFBsdWdpblxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgVGVzdFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdGVzdC1wbHVnaW4nO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlc3RQbHVnaW46IFRlc3RQbHVnaW4pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnRlc3RQbHVnaW4uZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdUZXN0UGx1Z2luJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdGVzdHBsdWdpbicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdUZXN0UGx1Z2luJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2dhbmVzaHBvdG51cnUvVGVzdFBsdWdpbi5naXQnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGVzdFBsdWdpbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBkb2VzIHNvbWV0aGluZ1xuICAgKiBAcGFyYW0gYXJnMSB7c3RyaW5nfSBTb21lIHBhcmFtIHRvIGNvbmZpZ3VyZSBzb21ldGhpbmdcbiAgICogQHBhcmFtIGFyZzIge251bWJlcn0gQW5vdGhlciBwYXJhbSB0byBjb25maWd1cmUgc29tZXRoaW5nXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNvb2xNZXRob2QoYXJnMTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbn1cbiJdfQ==