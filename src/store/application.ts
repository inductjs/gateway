import {defineStore} from "pinia";
import {InductGeneratorConfig} from "@yeseh/induct-generator-server/src/types/generator-config";
import {Application} from "../types/application";
import {buildReqUrl} from "../environment";
import axios from "axios";

const {get, post} = axios;

export interface State {
    apps: Application[];
}

export interface Getters {
    appCount: () => number;
    runningCount: () => number;
    stoppedCount: () => number;
}

export interface Actions {
    /** Append one Application, or an array of applications to the stored apps */
    STORE_APP: (app: Application | Application[]) => void;
    createApp: (conf: InductGeneratorConfig) => Promise<Application>;
    fetchApplications: () => Promise<Application[]>;
}

export const store = defineStore<string, State, Getters, Actions>({
    id: "application",
    state: () => ({
        apps: [
            {
                address: "localhost:3000/api",
                isRunning: true,
            },
            {
                address: "localhost:3001/api",
                isRunning: false,
            },
        ],
    }),
    getters: {
        appCount() {
            return this.apps.length;
        },

        runningCount() {
            return this.apps.filter(app => app.isRunning).length;
        },

        stoppedCount() {
            return this.apps.filter(app => !app.isRunning).length;
        },
    },
    actions: {
        STORE_APP(app: Application | Application[]) {
            if (Array.isArray(app)) this.apps = [...this.apps, ...app];
            else this.apps.push(app);
        },

        async createApp(conf: InductGeneratorConfig) {
            const result = await post<Application>(buildReqUrl("app"), conf);

            return result.data;
        },

        async fetchApplications() {
            const url = buildReqUrl("app");

            const result = await get<Application[]>(url);

            this.STORE_APP(result.data);

            return result.data;
        },
    },
});

export default store;
