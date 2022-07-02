import * as asyncAPI from "pareto-async-api"

export type Call = <T>(
    hostname: string,
    path: string,
    onData: (data: string) => void,
    onError: (e: null) => void,
    onEnd: () => asyncAPI.IAsync<T>
) => asyncAPI.IAsync<T>

export type API = {
    call: Call
}
