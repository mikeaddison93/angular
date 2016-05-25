'use strict';"use strict";
/**
 * Converts `funcOrValue` to a string which can be used in generated code.
 */
function codify(obj) {
    return JSON.stringify(obj);
}
exports.codify = codify;
function rawString(str) {
    return "'" + str + "'";
}
exports.rawString = rawString;
/**
 * Combine the strings of generated code into a single interpolated string.
 * Each element of `vals` is expected to be a string literal or a codegen'd
 * call to a method returning a string.
 */
function combineGeneratedStrings(vals) {
    return vals.join(' + ');
}
exports.combineGeneratedStrings = combineGeneratedStrings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWdlbl9mYWNhZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLWlGQ2lvbU5QLnRtcC9hbmd1bGFyMi9zcmMvY29yZS9jaGFuZ2VfZGV0ZWN0aW9uL2NvZGVnZW5fZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7R0FFRztBQUNILGdCQUF1QixHQUFRO0lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFGZSxjQUFNLFNBRXJCLENBQUE7QUFFRCxtQkFBMEIsR0FBVztJQUNuQyxNQUFNLENBQUMsTUFBSSxHQUFHLE1BQUcsQ0FBQztBQUNwQixDQUFDO0FBRmUsaUJBQVMsWUFFeEIsQ0FBQTtBQUVEOzs7O0dBSUc7QUFDSCxpQ0FBd0MsSUFBYztJQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQixDQUFDO0FBRmUsK0JBQXVCLDBCQUV0QyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jT3JWYWx1ZWAgdG8gYSBzdHJpbmcgd2hpY2ggY2FuIGJlIHVzZWQgaW4gZ2VuZXJhdGVkIGNvZGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2RpZnkob2JqOiBhbnkpOiBzdHJpbmcge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhd1N0cmluZyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgJyR7c3RyfSdgO1xufVxuXG4vKipcbiAqIENvbWJpbmUgdGhlIHN0cmluZ3Mgb2YgZ2VuZXJhdGVkIGNvZGUgaW50byBhIHNpbmdsZSBpbnRlcnBvbGF0ZWQgc3RyaW5nLlxuICogRWFjaCBlbGVtZW50IG9mIGB2YWxzYCBpcyBleHBlY3RlZCB0byBiZSBhIHN0cmluZyBsaXRlcmFsIG9yIGEgY29kZWdlbidkXG4gKiBjYWxsIHRvIGEgbWV0aG9kIHJldHVybmluZyBhIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVHZW5lcmF0ZWRTdHJpbmdzKHZhbHM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHMuam9pbignICsgJyk7XG59XG4iXX0=