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
                        template: "\n    <p>\n      *******test-library works \n      <b>version 0.0.4</b>******** !\n    \n    </p>\n  ",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1saWJyYXJ5LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vdGVzdC1saWJyYXJ5L2xpYi90ZXN0LWxpYnJhcnkuc2VydmljZS50cyIsIm5nOi8vdGVzdC1saWJyYXJ5L2xpYi90ZXN0LWxpYnJhcnkuY29tcG9uZW50LnRzIiwibmc6Ly90ZXN0LWxpYnJhcnkvbGliL3Rlc3QtbGlicmFyeS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUZXN0TGlicmFyeVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdGVzdC1saWJyYXJ5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgICoqKioqKip0ZXN0LWxpYnJhcnkgd29ya3MgXG4gICAgICA8Yj52ZXJzaW9uIDAuMC40PC9iPioqKioqKioqICFcbiAgICBcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVGVzdExpYnJhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVzdExpYnJhcnlDb21wb25lbnQgfSBmcm9tICcuL3Rlc3QtbGlicmFyeS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Rlc3RMaWJyYXJ5Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Rlc3RMaWJyYXJ5Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUZXN0TGlicmFyeU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O2lDQUpEOzs7Ozs7O0FDQUE7UUFlRTtTQUFpQjs7OztRQUVqQix1Q0FBUTs7O1lBQVI7YUFDQzs7b0JBaEJGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsUUFBUSxFQUFFLHVHQU1UO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7O21DQVpEOzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFDUjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzt3QkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7cUJBQ2hDOztnQ0FSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==