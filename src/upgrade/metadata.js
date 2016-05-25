'use strict';"use strict";
var core_1 = require('angular2/core');
var COMPONENT_SELECTOR = /^[\w|-]*$/;
var SKEWER_CASE = /-(\w)/g;
var directiveResolver = new core_1.DirectiveResolver();
function getComponentInfo(type) {
    var resolvedMetadata = directiveResolver.resolve(type);
    var selector = resolvedMetadata.selector;
    if (!selector.match(COMPONENT_SELECTOR)) {
        throw new Error('Only selectors matching element names are supported, got: ' + selector);
    }
    var selector = selector.replace(SKEWER_CASE, function (all, letter) { return letter.toUpperCase(); });
    return {
        type: type,
        selector: selector,
        inputs: parseFields(resolvedMetadata.inputs),
        outputs: parseFields(resolvedMetadata.outputs)
    };
}
exports.getComponentInfo = getComponentInfo;
function parseFields(names) {
    var attrProps = [];
    if (names) {
        for (var i = 0; i < names.length; i++) {
            var parts = names[i].split(':');
            var prop = parts[0].trim();
            var attr = (parts[1] || parts[0]).trim();
            var capitalAttr = attr.charAt(0).toUpperCase() + attr.substr(1);
            attrProps.push({
                prop: prop,
                attr: attr,
                bracketAttr: "[" + attr + "]",
                parenAttr: "(" + attr + ")",
                bracketParenAttr: "[(" + attr + ")]",
                onAttr: "on" + capitalAttr,
                bindAttr: "bind" + capitalAttr,
                bindonAttr: "bindon" + capitalAttr
            });
        }
    }
    return attrProps;
}
exports.parseFields = parseFields;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUlOZVpNWWlJLnRtcC9hbmd1bGFyMi9zcmMvdXBncmFkZS9tZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlELGVBQWUsQ0FBQyxDQUFBO0FBR3pFLElBQUksa0JBQWtCLEdBQUcsV0FBVyxDQUFDO0FBQ3JDLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQztBQUMzQixJQUFJLGlCQUFpQixHQUFHLElBQUksd0JBQWlCLEVBQUUsQ0FBQztBQW9CaEQsMEJBQWlDLElBQVU7SUFDekMsSUFBSSxnQkFBZ0IsR0FBc0IsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFFLElBQUksUUFBUSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUN6QyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsTUFBTSxJQUFJLEtBQUssQ0FBQyw0REFBNEQsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBQ0QsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBYyxJQUFLLE9BQUEsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFDNUYsTUFBTSxDQUFDO1FBQ0wsSUFBSSxFQUFFLElBQUk7UUFDVixRQUFRLEVBQUUsUUFBUTtRQUNsQixNQUFNLEVBQUUsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUM1QyxPQUFPLEVBQUUsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztLQUMvQyxDQUFDO0FBQ0osQ0FBQztBQWJlLHdCQUFnQixtQkFhL0IsQ0FBQTtBQUVELHFCQUE0QixLQUFlO0lBQ3pDLElBQUksU0FBUyxHQUFlLEVBQUUsQ0FBQztJQUMvQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ1YsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdEMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLFNBQVMsQ0FBQyxJQUFJLENBQVc7Z0JBQ3ZCLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxJQUFJO2dCQUNWLFdBQVcsRUFBRSxNQUFJLElBQUksTUFBRztnQkFDeEIsU0FBUyxFQUFFLE1BQUksSUFBSSxNQUFHO2dCQUN0QixnQkFBZ0IsRUFBRSxPQUFLLElBQUksT0FBSTtnQkFDL0IsTUFBTSxFQUFFLE9BQUssV0FBYTtnQkFDMUIsUUFBUSxFQUFFLFNBQU8sV0FBYTtnQkFDOUIsVUFBVSxFQUFFLFdBQVMsV0FBYTthQUNuQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDbkIsQ0FBQztBQXJCZSxtQkFBVyxjQXFCMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VHlwZSwgRGlyZWN0aXZlUmVzb2x2ZXIsIERpcmVjdGl2ZU1ldGFkYXRhfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7c3RyaW5naWZ5fSBmcm9tICcuL3V0aWwnO1xuXG52YXIgQ09NUE9ORU5UX1NFTEVDVE9SID0gL15bXFx3fC1dKiQvO1xudmFyIFNLRVdFUl9DQVNFID0gLy0oXFx3KS9nO1xudmFyIGRpcmVjdGl2ZVJlc29sdmVyID0gbmV3IERpcmVjdGl2ZVJlc29sdmVyKCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXR0clByb3Age1xuICBwcm9wOiBzdHJpbmc7XG4gIGF0dHI6IHN0cmluZztcbiAgYnJhY2tldEF0dHI6IHN0cmluZztcbiAgYnJhY2tldFBhcmVuQXR0cjogc3RyaW5nO1xuICBwYXJlbkF0dHI6IHN0cmluZztcbiAgb25BdHRyOiBzdHJpbmc7XG4gIGJpbmRBdHRyOiBzdHJpbmc7XG4gIGJpbmRvbkF0dHI6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRJbmZvIHtcbiAgdHlwZTogVHlwZTtcbiAgc2VsZWN0b3I6IHN0cmluZztcbiAgaW5wdXRzOiBBdHRyUHJvcFtdO1xuICBvdXRwdXRzOiBBdHRyUHJvcFtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcG9uZW50SW5mbyh0eXBlOiBUeXBlKTogQ29tcG9uZW50SW5mbyB7XG4gIHZhciByZXNvbHZlZE1ldGFkYXRhOiBEaXJlY3RpdmVNZXRhZGF0YSA9IGRpcmVjdGl2ZVJlc29sdmVyLnJlc29sdmUodHlwZSk7XG4gIHZhciBzZWxlY3RvciA9IHJlc29sdmVkTWV0YWRhdGEuc2VsZWN0b3I7XG4gIGlmICghc2VsZWN0b3IubWF0Y2goQ09NUE9ORU5UX1NFTEVDVE9SKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignT25seSBzZWxlY3RvcnMgbWF0Y2hpbmcgZWxlbWVudCBuYW1lcyBhcmUgc3VwcG9ydGVkLCBnb3Q6ICcgKyBzZWxlY3Rvcik7XG4gIH1cbiAgdmFyIHNlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZShTS0VXRVJfQ0FTRSwgKGFsbCwgbGV0dGVyOiBzdHJpbmcpID0+IGxldHRlci50b1VwcGVyQ2FzZSgpKTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICBpbnB1dHM6IHBhcnNlRmllbGRzKHJlc29sdmVkTWV0YWRhdGEuaW5wdXRzKSxcbiAgICBvdXRwdXRzOiBwYXJzZUZpZWxkcyhyZXNvbHZlZE1ldGFkYXRhLm91dHB1dHMpXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZpZWxkcyhuYW1lczogc3RyaW5nW10pOiBBdHRyUHJvcFtdIHtcbiAgdmFyIGF0dHJQcm9wczogQXR0clByb3BbXSA9IFtdO1xuICBpZiAobmFtZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGFydHMgPSBuYW1lc1tpXS5zcGxpdCgnOicpO1xuICAgICAgdmFyIHByb3AgPSBwYXJ0c1swXS50cmltKCk7XG4gICAgICB2YXIgYXR0ciA9IChwYXJ0c1sxXSB8fCBwYXJ0c1swXSkudHJpbSgpO1xuICAgICAgdmFyIGNhcGl0YWxBdHRyID0gYXR0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGF0dHIuc3Vic3RyKDEpO1xuICAgICAgYXR0clByb3BzLnB1c2goPEF0dHJQcm9wPntcbiAgICAgICAgcHJvcDogcHJvcCxcbiAgICAgICAgYXR0cjogYXR0cixcbiAgICAgICAgYnJhY2tldEF0dHI6IGBbJHthdHRyfV1gLFxuICAgICAgICBwYXJlbkF0dHI6IGAoJHthdHRyfSlgLFxuICAgICAgICBicmFja2V0UGFyZW5BdHRyOiBgWygke2F0dHJ9KV1gLFxuICAgICAgICBvbkF0dHI6IGBvbiR7Y2FwaXRhbEF0dHJ9YCxcbiAgICAgICAgYmluZEF0dHI6IGBiaW5kJHtjYXBpdGFsQXR0cn1gLFxuICAgICAgICBiaW5kb25BdHRyOiBgYmluZG9uJHtjYXBpdGFsQXR0cn1gXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGF0dHJQcm9wcztcbn1cbiJdfQ==