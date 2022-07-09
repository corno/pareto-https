import * as pc from "pareto-api-core"

export type Call = <T>(
    hostname: string,
    path: string,
    onData: (data: string) => void,
    onError: (e: null) => void,
    onEnd: () => pc.IAsync<T>
) => pc.IAsync<T>

export type API = {
    call: Call
}
