import { ReactElement, useContext, useEffect } from "react";
import { NavigationContext } from "@react-navigation/native";
import { ActionValue } from "mendix";

import { PageEventsProps } from "../typings/PageEventsProps";

type ActionName = "onWillFocus" | "onDidFocus" | "onWillBlur" | "onDidBlur";

export function PageEvents(props: PageEventsProps<any>): ReactElement | null {
    const navigation = useContext(NavigationContext);

    const bindAction = (actionName: ActionName) => () => {
        const action = props[actionName] as ActionValue | undefined;
        if (action?.canExecute && !action.isExecuting) {
            action.execute();
        }
    };

    useEffect(() => {
        // For coming back to page
        const subFocus = navigation?.addListener("focus", () => {
            bindAction("onWillFocus")();
            bindAction("onDidFocus")();
        });
        // For leaving a page
        const subBlur = navigation?.addListener("blur", () => {
            bindAction("onWillBlur")();
            bindAction("onDidBlur")();
        });
        return () => {
            if (subFocus) {
                subFocus();
            }
            if (subBlur) {
                subBlur();
            }
        };
    });
    return null;
}
