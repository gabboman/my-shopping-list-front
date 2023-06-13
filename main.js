"use strict";
(self["webpackChunklista_compra"] = self["webpackChunklista_compra"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _shopping_list_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-list/about/about.component */ 6664);
/* harmony import */ var _shopping_list_list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-list/list/list.component */ 1875);
/* harmony import */ var _shopping_list_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list/welcome/welcome.component */ 3273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);






const routes = [{
  path: '',
  component: _shopping_list_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__.WelcomeComponent
}, {
  path: 'about',
  component: _shopping_list_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
}, {
  path: 'list/:id',
  component: _shopping_list_list_list_component__WEBPACK_IMPORTED_MODULE_1__.ListComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/megamenu */ 5271);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/toast */ 7281);




class AppComponent {
  constructor() {
    this.items = [{
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: '/'
    }, {
      label: 'About',
      icon: 'pi pi-fw pi-question-circle',
      routerLink: '/about'
    }];
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 11,
  vars: 1,
  consts: [[3, "model"], [1, "container"], ["position", "bottom-center"], ["href", "https://www.flaticon.es/autores/icongeek26", "title", "Icongeek26"], ["href", "https://www.flaticon.es/", "title", "Flaticon"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-megaMenu", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet")(3, "p-toast", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "favicon designed by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Icongeek26");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "www.flaticon.es");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, primeng_megamenu__WEBPACK_IMPORTED_MODULE_2__.MegaMenu, primeng_toast__WEBPACK_IMPORTED_MODULE_3__.Toast],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shopping_list_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list/list/list.component */ 1875);
/* harmony import */ var _shopping_list_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-list/welcome/welcome.component */ 3273);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/listbox */ 731);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/megamenu */ 5271);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 5225);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/checkbox */ 1409);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/progressspinner */ 4482);
/* harmony import */ var _shopping_list_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-list/about/about.component */ 6664);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 8585);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/toast */ 7281);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 3095);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dialog */ 1241);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/password */ 6971);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/radiobutton */ 9903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);





















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder, primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_11__.ListboxModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_12__.MegaMenuModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputTextModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__.CheckboxModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__.ProgressSpinnerModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__.RadioButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonModule, primeng_toast__WEBPACK_IMPORTED_MODULE_18__.ToastModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_19__.DialogModule, primeng_password__WEBPACK_IMPORTED_MODULE_20__.PasswordModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shopping_list_list_list_component__WEBPACK_IMPORTED_MODULE_2__.ListComponent, _shopping_list_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__.WelcomeComponent, _shopping_list_about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_11__.ListboxModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_12__.MegaMenuModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputTextModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__.CheckboxModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__.ProgressSpinnerModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__.RadioButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonModule, primeng_toast__WEBPACK_IMPORTED_MODULE_18__.ToastModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_19__.DialogModule, primeng_password__WEBPACK_IMPORTED_MODULE_20__.PasswordModule]
  });
})();

/***/ }),

/***/ 6664:
/*!********************************************************!*\
  !*** ./src/app/shopping-list/about/about.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class AboutComponent {
  constructor() {}
  ngOnInit() {}
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
};
AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["app-about"]],
  decls: 14,
  vars: 0,
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The most efficient and easy to use shopping list");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Use the text area to write what you're looking for. That will act as a filter. If what you're looking for is not in the list, just press enter and it will be added to the list.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Whenever you add, check, uncheck or delete an element it will be saved automatically");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You can create a new list and share the password with housemates, family members or friends. Anyone with the link and the password will be able to access and modify the shopping list");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "The LOCAL list is only saved in your phone and does not require a password. Please bear in mind that if you visit this web in incognito mode all your data will be lost once you leave");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "This application was made by Gabriel Amalio Amador Garc\u00EDa because he didn't feel like loosing time to organize the shopping every week and has been refined with his own experience to make it more than usable for regular people.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I hope the app helps you to save some precious time in your life and avoid some headaches");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 1875:
/*!******************************************************!*\
  !*** ./src/app/shopping-list/list/list.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _services_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shopping-list.service */ 561);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 5225);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/checkbox */ 1409);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/progressspinner */ 4482);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/radiobutton */ 9903);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 8585);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ 1241);












function ListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p-progressSpinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "p-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function ListComponent_div_12_Template_p_checkbox_onChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.onChange($event));
    })("ngModelChange", function ListComponent_div_12_Template_p_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const item_r4 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r4.active = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListComponent_div_12_Template_i_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const item_r4 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.onDelete(item_r4.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !item_r4.name.toLowerCase().includes(ctx_r1.inputText.toLowerCase()) || ctx_r1.filter === 2 && item_r4.active || ctx_r1.filter === 1 && !item_r4.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("binary", true)("name", item_r4.name)("ngModel", item_r4.active)("label", item_r4.name);
  }
}
function ListComponent_p_progressSpinner_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-progressSpinner");
  }
}
function ListComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "div", 2)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Please introduce the password for this list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "It seems like it's your first time in this list. Please introduce the password for the list.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListComponent_div_16_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.listPassword = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2)(11, "p-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListComponent_div_16_Template_p_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.authorize());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.listPassword);
  }
}
class ListComponent {
  constructor(shoppingListService, formBuilder, activatedRoute) {
    this.shoppingListService = shoppingListService;
    this.formBuilder = formBuilder;
    this.activatedRoute = activatedRoute;
    this.loading = true;
    this.showModal = false;
    this.modalLoading = true;
    this.listPassword = "";
    this.filter = 0;
    this.itemList = [];
    this.oldItemList = [];
    this.inputText = "";
    this.listId = 0;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.listId = parseInt(_this.activatedRoute.snapshot.params.id);
      let avaiableLists = yield _this.shoppingListService.getAvaiableLists();
      let listAvaiable = false;
      avaiableLists.forEach(elem => {
        if (elem.id === _this.listId) {
          listAvaiable = true;
        }
      });
      if (listAvaiable) {
        yield _this.loadList();
      } else {
        _this.showModal = true;
        _this.modalLoading = false;
      }
    })();
  }
  loadList() {
    var _this2 = this;
    return (0,_Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.itemList = yield _this2.shoppingListService.getList(_this2.listId);
      // this way we don't get a reference but a copy
      _this2.oldItemList = JSON.parse(JSON.stringify(_this2.itemList));
      _this2.loading = false;
    })();
  }
  onEnter() {
    var _this3 = this;
    return (0,_Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.loading = true;
      _this3.itemList = yield _this3.shoppingListService.addItemToList(_this3.listId, _this3.inputText);
      _this3.oldItemList = JSON.parse(JSON.stringify(_this3.itemList));
      // should we clean the text once it's added?
      _this3.inputText = '';
      _this3.loading = false;
    })();
  }
  onChange(ev) {
    var _this4 = this;
    return (0,_Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this4.filter);
      _this4.loading = true;
      let itemToChange = _this4.itemList[0];
      _this4.itemList.forEach((item, index) => {
        if (item.active !== _this4.oldItemList[index].active) {
          itemToChange = item;
        }
      });
      _this4.itemList = yield _this4.shoppingListService.checkItemInList(_this4.listId, itemToChange);
      _this4.oldItemList = JSON.parse(JSON.stringify(_this4.itemList));
      _this4.inputText = '';
      _this4.loading = false;
    })();
  }
  onDelete(name) {
    var _this5 = this;
    return (0,_Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.loading = true;
      _this5.itemList = yield _this5.shoppingListService.deleteItemInList(_this5.listId, name);
      _this5.loading = false;
    })();
  }
  authorize() {
    var _this6 = this;
    return (0,_Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.modalLoading = true;
      let success = yield _this6.shoppingListService.checkListPassword(_this6.listId, _this6.listPassword);
      if (success) {
        _this6.loadList();
        _this6.showModal = false;
      }
      _this6.modalLoading = false;
    })();
  }
}
ListComponent.ɵfac = function ListComponent_Factory(t) {
  return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__.ShoppingListService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};
ListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ListComponent,
  selectors: [["app-list"]],
  decls: 17,
  vars: 13,
  consts: [["class", "progress-spinner", 4, "ngIf"], [1, "row"], [1, "col-12"], [3, "ngSubmit"], [1, "p-input-icon-right", 2, "width", "100%", "margin", "1em 0"], [1, "pi", "pi-plus", 3, "click"], ["name", "filter", "type", "text", "pInputText", "", "pInputText", "", 2, "width", "100%", 3, "ngModel", "ngModelChange"], ["name", "pizza", "label", "No filter", 3, "value", "ngModel", "ngModelChange"], ["name", "pizza", "label", "Checked", 3, "value", "ngModel", "ngModelChange"], ["name", "pizza", "label", "Unchecked", 3, "value", "ngModel", "ngModelChange"], [2, "width", "100%", "margin-top", "2em"], ["class", "col-12", 3, "hidden", 4, "ngFor", "ngForOf"], [3, "visible", "modal", "visibleChange"], [4, "ngIf"], [1, "container"], ["class", "row", "style", "min-height: 50vh;", 4, "ngIf"], [1, "progress-spinner"], [1, "col-12", 3, "hidden"], [3, "binary", "name", "ngModel", "label", "onChange", "ngModelChange"], [1, "pi", "pi-trash", "delete-icon", 3, "click"], [1, "row", 2, "min-height", "50vh"], ["type", "password", "pInputText", "", 1, "full-width-input", 3, "ngModel", "ngModelChange"], ["label", "Log in to list", 1, "full-width-input", 3, "click"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ListComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onEnter();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 4)(5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListComponent_Template_i_click_5_listener() {
        return ctx.onEnter();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.inputText = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2)(8, "p-radioButton", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_p_radioButton_ngModelChange_8_listener($event) {
        return ctx.filter = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p-radioButton", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_p_radioButton_ngModelChange_9_listener($event) {
        return ctx.filter = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p-radioButton", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_p_radioButton_ngModelChange_10_listener($event) {
        return ctx.filter = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ListComponent_div_12_Template, 3, 5, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p-dialog", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function ListComponent_Template_p_dialog_visibleChange_13_listener($event) {
        return ctx.showModal = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ListComponent_p_progressSpinner_14_Template, 1, 0, "p-progressSpinner", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ListComponent_div_16_Template, 12, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.inputText);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 0)("ngModel", ctx.filter);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 1)("ngModel", ctx.filter);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 2)("ngModel", ctx.filter);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.itemList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.showModal)("modal", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.modalLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.modalLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__.Checkbox, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__.ProgressSpinner, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9__.RadioButton, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.Dialog],
  styles: [".delete-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcHBpbmctbGlzdC9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5kZWxldGUtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxZW07XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 561:
/*!*****************************************************************!*\
  !*** ./src/app/shopping-list/services/shopping-list.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingListService": () => (/* binding */ ShoppingListService)
/* harmony export */ });
/* harmony import */ var _Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 3095);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);






class ShoppingListService {
  constructor(messageService, http, router) {
    this.messageService = messageService;
    this.http = http;
    this.router = router;
  }
  getList(id) {
    var _this = this;
    return (0,_Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let res;
      if (id === 0) {
        if (localStorage.getItem('datos')) {
          res = JSON.parse(localStorage['datos']);
        } else {
          localStorage.setItem('datos', JSON.stringify([]));
          res = [];
        }
      } else {
        let password = _this.getListPassword(id);
        if (password) {
          let formData = new FormData();
          formData.append('id', id.toString());
          formData.append('password', password);
          let response = yield _this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url + '/getList', formData).toPromise();
          res = response['data'];
        } else {
          res = [];
        }
      }
      return res;
    })();
  }
  addItemToList(id, itemName) {
    var _this2 = this;
    return (0,_Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let status = true;
      let res = yield _this2.getList(id);
      let newName = true;
      res.forEach(elem => {
        if (elem.name.toLowerCase() === itemName.toLowerCase()) {
          newName = false;
        }
      });
      if (newName) {
        const newItem = {
          name: itemName,
          active: false
        };
        res.push(newItem);
        if (id === 0) {
          localStorage.setItem('datos', JSON.stringify(res));
        } else {
          let password = _this2.getListPassword(id);
          if (password) {
            let formData = new FormData();
            formData.append('id', id.toString());
            formData.append('password', password);
            formData.append('item', itemName);
            let response = yield _this2.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url + '/addElement', formData).toPromise();
            res = response['data'];
          } else {
            res = [];
          }
        }
      }
      if (status) {
        _this2.messageService.add({
          severity: 'success',
          summary: 'Element added',
          detail: 'Added ' + itemName + ' succesfully'
        });
      } else {
        _this2.messageService.add({
          severity: 'error',
          summary: 'something went wrong',
          detail: 'Could not add ' + itemName + ' to the list'
        });
      }
      return res;
    })();
  }
  checkItemInList(id, item) {
    var _this3 = this;
    return (0,_Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let status = true;
      let res = yield _this3.getList(id);
      res.forEach(element => {
        if (element.name.toLowerCase() === item.name.toLowerCase()) {
          element.active = item.active;
        }
      });
      if (id === 0) {
        localStorage.setItem('datos', JSON.stringify(res));
      } else {
        let password = _this3.getListPassword(id);
        if (password) {
          console.log(item);
          let formData = new FormData();
          formData.append('id', id.toString());
          formData.append('password', password);
          formData.append('item', item.name);
          formData.append('active', item.active.toString());
          let response = yield _this3.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url + '/updateElement', formData).toPromise();
          res = response['data'];
        } else {
          res = [];
        }
      }
      if (status) {
        _this3.messageService.add({
          severity: 'success',
          summary: 'Element updated',
          detail: 'Updated ' + item.name + ' succesfully'
        });
      }
      return res;
    })();
  }
  // This one looks into the localStorage and returns the avaiable lists
  getAvaiableLists() {
    return (0,_Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let res = [{
        id: 0,
        token: '',
        name: 'Local'
      }];
      if (localStorage.getItem('tokens')) {
        res = JSON.parse(localStorage.tokens);
      } else {
        localStorage.setItem('tokens', JSON.stringify(res));
      }
      return res;
    })();
  }
  deleteItemInList(id, name) {
    var _this4 = this;
    return (0,_Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let status = true;
      let res = yield _this4.getList(id);
      let elementToDelete = -1;
      res.forEach((element, index) => {
        if (element.name.toLowerCase() === name.toLowerCase()) {
          elementToDelete = index;
        }
      });
      if (elementToDelete != -1) {
        res.splice(elementToDelete, 1);
      }
      if (id === 0) {
        localStorage.setItem('datos', JSON.stringify(res));
      } else {
        let password = _this4.getListPassword(id);
        if (password) {
          let formData = new FormData();
          formData.append('id', id.toString());
          formData.append('password', password);
          formData.append('item', name);
          let response = yield _this4.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url + '/removeElement', formData).toPromise();
          res = response['data'];
        } else {
          res = [];
        }
      }
      if (status) {
        _this4.messageService.add({
          severity: 'success',
          summary: 'Element deleted',
          detail: 'Deleted ' + name + ' succesfully'
        });
      }
      return res;
    })();
  }
  createList(password, name) {
    var _this5 = this;
    return (0,_Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = new FormData();
      data.append('password', password);
      data.append('name', name);
      let response = yield _this5.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url + '/createList', data).toPromise();
      console.log(response);
      let tokens = JSON.parse(localStorage.tokens);
      tokens.push({
        name: name,
        token: password,
        id: response.newListId
      });
      localStorage.setItem('tokens', JSON.stringify(tokens));
    })();
  }
  getListPassword(id) {
    let pass;
    let tokens = JSON.parse(localStorage.tokens);
    tokens.forEach(elem => {
      if (elem.id === id) {
        pass = elem.token;
      }
    });
    if (pass) {
      return pass;
    } else {
      this.router.navigate(['/']);
      return null;
    }
  }
  checkListPassword(id, password) {
    var _this6 = this;
    return (0,_Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let res = false;
      try {
        let formData = new FormData();
        formData.append('id', id.toString());
        formData.append('password', password);
        let response = yield _this6.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url + '/authorizeList', formData).toPromise();
        let listas = yield _this6.getAvaiableLists();
        listas.push({
          id: response.id,
          name: response.name,
          token: password
        });
        localStorage.setItem('tokens', JSON.stringify(listas));
        res = true;
      } catch (error) {
        _this6.messageService.add({
          severity: 'error',
          summary: 'Incorrect password or non existent list',
          detail: 'Please check that you got the correct link and the password'
        });
      }
      return res;
    })();
  }
}
ShoppingListService.ɵfac = function ShoppingListService_Factory(t) {
  return new (t || ShoppingListService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
ShoppingListService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ShoppingListService,
  factory: ShoppingListService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 3273:
/*!************************************************************!*\
  !*** ./src/app/shopping-list/welcome/welcome.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComponent": () => (/* binding */ WelcomeComponent)
/* harmony export */ });
/* harmony import */ var _Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _services_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shopping-list.service */ 561);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 5225);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/progressspinner */ 4482);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 8585);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ 1241);











function WelcomeComponent_p_progressSpinner_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-progressSpinner");
  }
}
const _c0 = function (a1) {
  return ["/list", a1];
};
function WelcomeComponent_div_3_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, item_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.name);
  }
}
function WelcomeComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "div", 6)(2, "p-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WelcomeComponent_div_3_Template_p_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.displayModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 8)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Avaiable lists:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, WelcomeComponent_div_3_li_7_Template, 3, 4, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.lists);
  }
}
function WelcomeComponent_p_progressSpinner_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-progressSpinner");
  }
}
function WelcomeComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Choose a password that you can share");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "After creating the list with a password, share it with the link that you will get");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " List name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br")(9, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br")(13, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12)(15, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WelcomeComponent_div_9_Template_p_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.createList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.createListForm.status != "VALID");
  }
}
class WelcomeComponent {
  constructor(listService, fb) {
    this.listService = listService;
    this.fb = fb;
    this.loading = true;
    this.lists = [];
    this.showModal = false;
    this.modalLoading = false;
    this.createListForm = this.fb.group({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
    });
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.lists = yield _this.listService.getAvaiableLists();
      _this.loading = false;
    })();
  }
  displayModal() {
    var _this2 = this;
    return (0,_Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.showModal = true;
    })();
  }
  createList() {
    var _this3 = this;
    return (0,_Users_gabriel_my_shopping_list_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.modalLoading = true;
      yield _this3.listService.createList(_this3.createListForm.value.password, _this3.createListForm.value.name);
      _this3.lists = yield _this3.listService.getAvaiableLists();
      _this3.showModal = false;
      _this3.modalLoading = false;
      _this3.createListForm.patchValue({
        name: '',
        password: ''
      });
    })();
  }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
  return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__.ShoppingListService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder));
};
WelcomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: WelcomeComponent,
  selectors: [["app-welcome"]],
  decls: 10,
  vars: 7,
  consts: [[4, "ngIf"], ["class", "container", 4, "ngIf"], ["header", "Create new list", 3, "visible", "modal", "visibleChange"], [1, "container"], [3, "formGroup", "ngSubmit"], ["class", "row", "style", "min-height: 50vh;", 4, "ngIf"], [1, "row", 2, "padding", "1em 0"], ["label", "Create new list", 3, "click"], [1, "row"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "row", 2, "min-height", "50vh"], [1, "col-12"], [1, "col-6"], ["formControlName", "name", "type", "text", "pInputText", "", 1, "full-width-input"], ["formControlName", "password", "type", "password", "pInputText", "", 1, "full-width-input"], ["label", "Create", 1, "full-width-input", 3, "disabled", "click"]],
  template: function WelcomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Welcome to the shopping list app");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WelcomeComponent_p_progressSpinner_2_Template, 1, 0, "p-progressSpinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WelcomeComponent_div_3_Template, 8, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p-dialog", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function WelcomeComponent_Template_p_dialog_visibleChange_5_listener($event) {
        return ctx.showModal = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, WelcomeComponent_p_progressSpinner_6_Template, 1, 0, "p-progressSpinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3)(8, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function WelcomeComponent_Template_form_ngSubmit_8_listener() {
        return ctx.createList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, WelcomeComponent_div_9_Template, 16, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.showModal)("modal", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.modalLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.createListForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.modalLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_7__.ProgressSpinner, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.Dialog],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var zone_js_plugins_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/plugins/zone-error */ 5856);
/* harmony import */ var zone_js_plugins_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_plugins_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  url: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map