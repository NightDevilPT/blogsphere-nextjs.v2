"use client";
import store from "@/redux/store";
import { ChildrenNode } from "@/types/type";
import React from "react";
import { Provider } from "react-redux";

const ReduxProvide = ({ children }: ChildrenNode) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvide;
