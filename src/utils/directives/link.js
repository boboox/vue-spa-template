import {
    push,
    replace
} from '../libs/router';

const RouteDirective = {
    name: 'link',
    hooks: {
        inserted: function (el, binding, vnode) {
            const path = binding.value;
            const _$router = vnode.context.$router;
            let excuteFn;

            if (binding.modifiers.replace) {
                excuteFn = replace;
            } else {
                excuteFn = push;
            }

            el.onclick = function () {
                excuteFn(path, _$router);
            };
        },
        update: function (el, binding, vnode) {
            const path = binding.value;
            const oldPath = binding.oldValue;
            if (JSON.stringify(path) !== JSON.stringify(oldPath)) {
                const _$router = vnode.context.$router;
                let excuteFn;

                if (binding.modifiers.replace) {
                    excuteFn = replace;
                } else {
                    excuteFn = push;
                }

                el.onclick = function () {
                    excuteFn(path, _$router);
                };
            }
        },
        unbind: function (el) {
            el.onclick = null;
        }
    }
};

export default RouteDirective;
