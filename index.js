
export default function ls(k, v) {
    if (typeof v == 'undefined') {
        try {
            let r = JSON.parse(localStorage.getItem(k))
            return r;
        } catch (e) {
            return false;
        }
    } else {
        localStorage.setItem(k, JSON.stringify(v));
        return v;
    }
}