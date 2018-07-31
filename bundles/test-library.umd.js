(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('test-library', ['exports', '@angular/core'], factory) :
    (factory((global['test-library'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TestLibraryService = (function () {
        function TestLibraryService() {
        }
        TestLibraryService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        TestLibraryService.ctorParameters = function () { return []; };
        /** @nocollapse */ TestLibraryService.ngInjectableDef = i0.defineInjectable({ factory: function TestLibraryService_Factory() { return new TestLibraryService(); }, token: TestLibraryService, providedIn: "root" });
        return TestLibraryService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TestLibraryComponent = (function () {
        function TestLibraryComponent() {
        }
        /**
         * @return {?}
         */
        TestLibraryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TestLibraryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-test-library',
                        template: "\n    <p>\n      *******test-library works Bharath Rocks\n      <b>version 0.0.1</b>******** !\n    \n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        TestLibraryComponent.ctorParameters = function () { return []; };
        return TestLibraryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TestLibraryModule = (function () {
        function TestLibraryModule() {
        }
        TestLibraryModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [TestLibraryComponent],
                        exports: [TestLibraryComponent]
                    },] },
        ];
        return TestLibraryModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.TestLibraryService = TestLibraryService;
    exports.TestLibraryComponent = TestLibraryComponent;
    exports.TestLibraryModule = TestLibraryModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1saWJyYXJ5LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vdGVzdC1saWJyYXJ5L2xpYi90ZXN0LWxpYnJhcnkuc2VydmljZS50cyIsIm5nOi8vdGVzdC1saWJyYXJ5L2xpYi90ZXN0LWxpYnJhcnkuY29tcG9uZW50LnRzIiwibmc6Ly90ZXN0LWxpYnJhcnkvbGliL3Rlc3QtbGlicmFyeS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUZXN0TGlicmFyeVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdGVzdC1saWJyYXJ5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgICoqKioqKip0ZXN0LWxpYnJhcnkgd29ya3MgQmhhcmF0aCBSb2Nrc1xuICAgICAgPGI+dmVyc2lvbiAwLjAuMTwvYj4qKioqKioqKiAhXG4gICAgXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RMaWJyYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cblxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlc3RMaWJyYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi90ZXN0LWxpYnJhcnkuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUZXN0TGlicmFyeUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUZXN0TGlicmFyeUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVGVzdExpYnJhcnlNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OztpQ0FKRDs7Ozs7OztBQ0FBO1FBZUU7U0FBaUI7Ozs7UUFFakIsdUNBQVE7OztZQUFSO2FBQ0M7O29CQWhCRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFFBQVEsRUFBRSxvSEFNVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OzttQ0FaRDs7Ozs7OztBQ0FBOzs7O29CQUdDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7d0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO3FCQUNoQzs7Z0NBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=