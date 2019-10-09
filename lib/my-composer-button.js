"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const mailspring_exports_1 = require("mailspring-exports");
class MyComposerButton extends mailspring_exports_1.React.Component {
    constructor() {
        super(...arguments);
        this._onClick = () => {
            const { session, draft } = this.props;
            // To retrieve information about the draft, we fetch the current editing
            // session from the draft store. We can access attributes of the draft
            // and add changes to the session which will be appear immediately.
            const newSubject = `${draft.subject} - It Worked!`;
            electron_1.remote.dialog.showMessageBox({
                title: "Here we go...",
                detail: `Adjusting the subject line To "${newSubject}"`,
                buttons: ["OK"],
                type: "info"
            });
            session.changes.add({ subject: newSubject });
        };
    }
    shouldComponentUpdate(nextProps) {
        // Our render method doesn't use the provided `draft`, and the draft changes
        // constantly (on every keystroke!) `shouldComponentUpdate` helps keep Mailspring fast.
        return nextProps.session !== this.props.session;
    }
    render() {
        return (mailspring_exports_1.React.createElement("div", { className: "my-package" },
            mailspring_exports_1.React.createElement("button", { className: "btn btn-toolbar", onClick: () => this._onClick(), ref: "button" }, "Hello World")));
    }
}
exports.default = MyComposerButton;
// Note: You should assign a new displayName to avoid naming
// conflicts when injecting your item
MyComposerButton.displayName = "MyComposerButton";
// When you register as a composer button, you receive a
// reference to the draft, and you can look it up to perform
// actions and retrieve data.
MyComposerButton.propTypes = {
    draft: mailspring_exports_1.PropTypes.object.isRequired,
    session: mailspring_exports_1.PropTypes.object.isRequired
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY29tcG9zZXItYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL215LWNvbXBvc2VyLWJ1dHRvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBa0M7QUFDbEMsMkRBQXNEO0FBRXRELE1BQXFCLGdCQUFpQixTQUFRLDBCQUFLLENBQUMsU0FBUztJQUE3RDs7UUFtQkUsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNkLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUV0Qyx3RUFBd0U7WUFDeEUsc0VBQXNFO1lBQ3RFLG1FQUFtRTtZQUNuRSxNQUFNLFVBQVUsR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLGVBQWUsQ0FBQztZQUVuRCxpQkFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7Z0JBQzNCLEtBQUssRUFBRSxlQUFlO2dCQUN0QixNQUFNLEVBQUUsa0NBQWtDLFVBQVUsR0FBRztnQkFDdkQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUNmLElBQUksRUFBRSxNQUFNO2FBQ2IsQ0FBQyxDQUFDO1lBRUgsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUM7SUFlSixDQUFDO0lBckNDLHFCQUFxQixDQUFDLFNBQVM7UUFDN0IsNEVBQTRFO1FBQzVFLHVGQUF1RjtRQUN2RixPQUFPLFNBQVMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDbEQsQ0FBQztJQW9CRCxNQUFNO1FBQ0osT0FBTyxDQUNMLGtEQUFLLFNBQVMsRUFBQyxZQUFZO1lBQ3pCLHFEQUNFLFNBQVMsRUFBQyxpQkFBaUIsRUFDM0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDOUIsR0FBRyxFQUFDLFFBQVEsa0JBR0wsQ0FDTCxDQUNQLENBQUM7SUFDSixDQUFDOztBQWpESCxtQ0FrREM7QUFqREMsNERBQTREO0FBQzVELHFDQUFxQztBQUM5Qiw0QkFBVyxHQUFHLGtCQUFrQixDQUFDO0FBRXhDLHdEQUF3RDtBQUN4RCw0REFBNEQ7QUFDNUQsNkJBQTZCO0FBQ3RCLDBCQUFTLEdBQUc7SUFDakIsS0FBSyxFQUFFLDhCQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7SUFDbEMsT0FBTyxFQUFFLDhCQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7Q0FDckMsQ0FBQyJ9