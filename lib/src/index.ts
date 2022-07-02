import { API } from "./api";
import { call } from "./etc/https";

export * from "./etc/https"

export function init(): API {
    return {
        call: call
    }
}