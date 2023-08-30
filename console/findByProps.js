const findByProps = (...props) => {
    for (let m of _mods) {
        try {
            if (!m.exports || m.exports === window) continue;
            if (props.every((x) => m.exports?.[x])) return m.exports;

            for (let ex in m.exports) {
                if (props.every((x) => m.exports?.[ex]?.[x])) return m.exports[ex];
            }
        } catch {}
    }
}
// Credit to @mtc3ndi0mtu1mzcxnjm0njg4.cguwnw. (177424155371634688)