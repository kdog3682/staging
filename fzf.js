
import {Fzf} from "https://esm.sh/fzf"

const items = ['aabagaag', 'bb', 'baab', 'bxbxb']
const fzf = new Fzf(items)

function remove(items, item) {
    const index = items.indexOf(item)
    if (index == -1) {
        return false
    }
    items.splice(1, index)
    return true
}

const matches = fzf.find('bb')
console.log(matches)
console.log(matches[0].item == items[1])
console.log(remove(items, matches[0].item))
console.log(items)
console.log(fzf.find('bb'))

function getStyle(has) {
    
}
function h(...args) {
    return args
}


const VFzf = {
    name: 'v-fzf',
    props: ['value'],
    render(h) {
        // we rerender on every single keystroke
        
            const nodes = chars.map(inner)
            return h('li', {
                on: {
                    click() {
                        console.log('hi from click')
                    },
                    keydown(e) {
                        console.log('hi from keydown', e)
                    }
                }
            }, nodes)
        }
        
        const lis = this.value.map(mapper)
        return h('ul', {}, lis)
    }
}

        const input = h(MyInput, {
            props: {value: this.input},
            on: {
                input: handleInput
            }
        })
}


