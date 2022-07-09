import * as https from "https"
import * as pa from "pareto-api-core"

export function call<T>(
    hostname: string,
    path: string,
    onData: (data: string) => void,
    onError: (e: null) => void,
    onEnd: () => pa.IAsync<T>
): pa.IAsync<T> {
    return {
        execute: (cb) => {
            const options = {
                hostname: hostname,
                //port: 443,
                path: path,
                method: 'GET'
            }

            const req = https.request(options, res => {
                //console.log(`statusCode: ${res.statusCode}`)

                res.on('data', d => {
                    onData(d)
                })
                res.on('end', () => {
                    onEnd().execute((v) => {
                        cb(v)
                    })
                })
            })

            req.on('error', error => {
                console.error("FIX ERROR DATA")
                onError(null)
            })

            req.end()
        }

    }
}