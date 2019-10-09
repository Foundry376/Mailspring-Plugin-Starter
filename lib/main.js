"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mailspring_exports_1 = require("mailspring-exports");
const my_composer_button_1 = __importDefault(require("./my-composer-button"));
const my_message_sidebar_1 = __importDefault(require("./my-message-sidebar"));
// Activate is called when the package is loaded. If your package previously
// saved state using `serialize` it is provided.
//
function activate() {
    mailspring_exports_1.ComponentRegistry.register(my_composer_button_1.default, {
        role: 'Composer:ActionButton',
    });
    mailspring_exports_1.ComponentRegistry.register(my_message_sidebar_1.default, {
        role: 'MessageListSidebar:ContactCard',
    });
}
exports.activate = activate;
// Serialize is called when your package is about to be unmounted.
// You can return a state object that will be passed back to your package
// when it is re-activated.
//
function serialize() { }
exports.serialize = serialize;
// This **optional** method is called when the window is shutting down,
// or when your package is being updated or disabled. If your package is
// watching any files, holding external resources, providing commands or
// subscribing to events, release them here.
//
function deactivate() {
    mailspring_exports_1.ComponentRegistry.unregister(my_composer_button_1.default);
    mailspring_exports_1.ComponentRegistry.unregister(my_message_sidebar_1.default);
}
exports.deactivate = deactivate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkRBQXVEO0FBRXZELDhFQUFvRDtBQUNwRCw4RUFBb0Q7QUFFcEQsNEVBQTRFO0FBQzVFLGdEQUFnRDtBQUNoRCxFQUFFO0FBQ0YsU0FBZ0IsUUFBUTtJQUN0QixzQ0FBaUIsQ0FBQyxRQUFRLENBQUMsNEJBQWdCLEVBQUU7UUFDM0MsSUFBSSxFQUFFLHVCQUF1QjtLQUM5QixDQUFDLENBQUM7SUFDSCxzQ0FBaUIsQ0FBQyxRQUFRLENBQUMsNEJBQWdCLEVBQUU7UUFDM0MsSUFBSSxFQUFFLGdDQUFnQztLQUN2QyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBUEQsNEJBT0M7QUFFRCxrRUFBa0U7QUFDbEUseUVBQXlFO0FBQ3pFLDJCQUEyQjtBQUMzQixFQUFFO0FBQ0YsU0FBZ0IsU0FBUyxLQUFJLENBQUM7QUFBOUIsOEJBQThCO0FBRTlCLHVFQUF1RTtBQUN2RSx3RUFBd0U7QUFDeEUsd0VBQXdFO0FBQ3hFLDRDQUE0QztBQUM1QyxFQUFFO0FBQ0YsU0FBZ0IsVUFBVTtJQUN4QixzQ0FBaUIsQ0FBQyxVQUFVLENBQUMsNEJBQWdCLENBQUMsQ0FBQztJQUMvQyxzQ0FBaUIsQ0FBQyxVQUFVLENBQUMsNEJBQWdCLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBSEQsZ0NBR0MifQ==