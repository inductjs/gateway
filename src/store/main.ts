import {defineStore} from "pinia";
import {getReqNamespace} from "@/environment";
import axios from "axios";

const {get, post} = axios;

export interface State {}

export interface Getters {}

export interface Actions {}

export const store = defineStore<string, State, Getters, Actions>({
    id: "main",
    state: () => ({
        apiBaseUrl: getReqNamespace(),
        apps: [],
    }),
    getters: {},
    actions: {},
});

export default store;
