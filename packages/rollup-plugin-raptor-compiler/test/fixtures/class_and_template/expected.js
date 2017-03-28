const memoized = Symbol('memoize');
var _tmpl = function ($api, $cmp, $slotset) {
    const m = $cmp[memoized] || ($cmp[memoized] = {});
    return [$api.h(
        "section",
        {},
        ["Test"]
    )];
};
const templateUsedIds = [];

const Test = 1;
class ClassAndTemplate {
    constructor() {
        this.t = Test;

        this.counter = 0;
    }

    render() {
        return _tmpl;
    }

}
ClassAndTemplate.publicProps = {
    t: Test
};
ClassAndTemplate.templateUsedIds = templateUsedIds;

export default ClassAndTemplate;
