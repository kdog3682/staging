datetime: 03-23-2024 05:02AM

save: loggg
arg:

// import {abc, asa, as as foo} from "/home/kdog3682/2024-javascript/txflow/lexer.js"

export {
    asdf 
}
arg:

function foo(abc) {
    a/*  */ = 1
    const d = 2
}

code:
function main(state) {
    return funcDecl(traverseJavascript(state).children[0])
    return exports(traverseJavascript(state).children[0])
    return traverseJavascript(state)
}
function funcDecl(ast) {
    return 
}

function exports(ast) {
    const child = ast.children[0]
    if (child.name == 'ExportGroup') {
        const store = []
        const children = child.children
        for (const {name, value} of children) {
            if (name == 'VariableName') {
                store.push(value)
            }
        }
        return {
            exports: store,
        }
    }
    if (child.name == 'VariableName') {
        return {
            default: child.value,
        }
    }
}
function imports(ast) {
    const [a, b] = ast.children
    const file = b.value.slice(1, -1)
    const children = a.children
    const imports = []
    for (const {name, value} of children) {
        if (name == 'VariableDefinition') {
            imports.push(value)
        }
    }
    return { file, imports }
}
