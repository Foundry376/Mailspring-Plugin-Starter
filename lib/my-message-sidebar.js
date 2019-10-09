"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mailspring_exports_1 = require("mailspring-exports");
class MyMessageSidebar extends mailspring_exports_1.React.Component {
    // This sidebar component listens to the FocusedContactStore,
    // which gives us access to the Contact object of the currently
    // selected person in the conversation. If you wanted to take
    // the contact and fetch your own data, you'd want to create
    // your own store, so the flow of data would be:
    // FocusedContactStore => Your Store => Your Component
    constructor(props) {
        super(props);
        this._onChange = () => {
            this.setState(this._getStateFromStores());
        };
        this._getStateFromStores = () => {
            return {
                contact: mailspring_exports_1.FocusedContactsStore.focusedContact()
            };
        };
        this.state = this._getStateFromStores();
    }
    componentDidMount() {
        this.unsubscribe = mailspring_exports_1.FocusedContactsStore.listen(this._onChange);
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    _renderContent() {
        // Want to include images or other static assets in your components?
        // Reference them using the mailspring:// URL scheme:
        //
        // <RetinaImg
        //    url="mailspring://<<package.name>>/assets/checkmark_templatethis.2x.png"
        //    mode={RetinaImg.Mode.ContentIsMask}/>
        //
        return (mailspring_exports_1.React.createElement("div", { className: "header" },
            mailspring_exports_1.React.createElement("h1", null,
                this.state.contact.displayName(),
                " is the focused contact.")));
    }
    _renderPlaceholder() {
        return mailspring_exports_1.React.createElement("div", null, " No Data Available ");
    }
    render() {
        const content = this.state.contact
            ? this._renderContent()
            : this._renderPlaceholder();
        return mailspring_exports_1.React.createElement("div", { className: "my-message-sidebar" }, content);
    }
}
exports.default = MyMessageSidebar;
MyMessageSidebar.displayName = "MyMessageSidebar";
// Providing container styles tells the app how to constrain
// the column your component is being rendered in. The min and
// max size of the column are chosen automatically based on
// these values.
MyMessageSidebar.containerStyles = {
    order: 1,
    flexShrink: 0
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbWVzc2FnZS1zaWRlYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL215LW1lc3NhZ2Utc2lkZWJhci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBaUU7QUFFakUsTUFBcUIsZ0JBQWlCLFNBQVEsMEJBQUssQ0FBQyxTQUFTO0lBRzNELDZEQUE2RDtJQUM3RCwrREFBK0Q7SUFDL0QsNkRBQTZEO0lBQzdELDREQUE0RDtJQUM1RCxnREFBZ0Q7SUFFaEQsc0RBQXNEO0lBQ3RELFlBQVksS0FBSztRQUNmLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQVlmLGNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDO1FBRUYsd0JBQW1CLEdBQUcsR0FBRyxFQUFFO1lBQ3pCLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLHlDQUFvQixDQUFDLGNBQWMsRUFBRTthQUMvQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBbkJBLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcseUNBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBWUQsY0FBYztRQUNaLG9FQUFvRTtRQUNwRSxxREFBcUQ7UUFDckQsRUFBRTtRQUNGLGFBQWE7UUFDYiw4RUFBOEU7UUFDOUUsMkNBQTJDO1FBQzNDLEVBQUU7UUFDRixPQUFPLENBQ0wsa0RBQUssU0FBUyxFQUFDLFFBQVE7WUFDckI7Z0JBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFOzJDQUE4QixDQUMvRCxDQUNQLENBQUM7SUFDSixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sNEVBQThCLENBQUM7SUFDeEMsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzlCLE9BQU8sa0RBQUssU0FBUyxFQUFDLG9CQUFvQixJQUFFLE9BQU8sQ0FBTyxDQUFDO0lBQzdELENBQUM7O0FBekRILG1DQTBEQztBQXpEUSw0QkFBVyxHQUFHLGtCQUFrQixDQUFDO0FBMkQxQyw0REFBNEQ7QUFDNUQsOERBQThEO0FBQzlELDJEQUEyRDtBQUMzRCxnQkFBZ0I7QUFDaEIsZ0JBQWdCLENBQUMsZUFBZSxHQUFHO0lBQ2pDLEtBQUssRUFBRSxDQUFDO0lBQ1IsVUFBVSxFQUFFLENBQUM7Q0FDZCxDQUFDIn0=