import { call } from "./etc/https";
import * as api from "pareto-https-api"

export function init(): api.API {
    return {
        call: call
    }
}