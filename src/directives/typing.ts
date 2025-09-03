import type { Directive } from "vue";

export const typing: Directive<HTMLElement, string[]> = {
    mounted(el, binding) {
        const lines = binding.value;

        const chars = Array.from(lines.join("\n"));
        let index = 0;

        function type() {
            if (index < chars.length) {
                const char = chars[index] === "\n" ? "<br>" : chars[index];
                el.innerHTML += char;
                index++;
                setTimeout(type, 60);
            }
        }

        type();
    }
};
