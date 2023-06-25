async function handler(event: any, content: any){
    return {
        statusCode: 200,
        body: 'hello world!'
    }
}

export {handler}