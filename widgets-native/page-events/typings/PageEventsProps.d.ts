/**
 * This file was generated from PageEvents.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue } from "mendix";

export interface PageEventsProps<Style> {
    name: string;
    style: Style[];
    onWillFocus?: ActionValue;
    onDidFocus?: ActionValue;
    onWillBlur?: ActionValue;
    onDidBlur?: ActionValue;
}

export interface PageEventsPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    onWillFocus: {} | null;
    onDidFocus: {} | null;
    onWillBlur: {} | null;
    onDidBlur: {} | null;
}
