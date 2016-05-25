import { Type } from 'angular2/src/facade/lang';
import { LifecycleHooks } from './interfaces';
export function hasLifecycleHook(lcInterface, token) {
    if (!(token instanceof Type))
        return false;
    var proto = token.prototype;
    switch (lcInterface) {
        case LifecycleHooks.AfterContentInit:
            return !!proto.ngAfterContentInit;
        case LifecycleHooks.AfterContentChecked:
            return !!proto.ngAfterContentChecked;
        case LifecycleHooks.AfterViewInit:
            return !!proto.ngAfterViewInit;
        case LifecycleHooks.AfterViewChecked:
            return !!proto.ngAfterViewChecked;
        case LifecycleHooks.OnChanges:
            return !!proto.ngOnChanges;
        case LifecycleHooks.DoCheck:
            return !!proto.ngDoCheck;
        case LifecycleHooks.OnDestroy:
            return !!proto.ngOnDestroy;
        case LifecycleHooks.OnInit:
            return !!proto.ngOnInit;
        default:
            return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlX2xpZmVjeWNsZV9yZWZsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLWpwN3JPMVdPLnRtcC9hbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvZGlyZWN0aXZlX2xpZmVjeWNsZV9yZWZsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSwwQkFBMEI7T0FDdEMsRUFBQyxjQUFjLEVBQUMsTUFBTSxjQUFjO0FBRTNDLGlDQUFpQyxXQUEyQixFQUFFLEtBQUs7SUFDakUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssWUFBWSxJQUFJLENBQUMsQ0FBQztRQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFFM0MsSUFBSSxLQUFLLEdBQVMsS0FBTSxDQUFDLFNBQVMsQ0FBQztJQUVuQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssY0FBYyxDQUFDLGdCQUFnQjtZQUNsQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztRQUNwQyxLQUFLLGNBQWMsQ0FBQyxtQkFBbUI7WUFDckMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7UUFDdkMsS0FBSyxjQUFjLENBQUMsYUFBYTtZQUMvQixNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7UUFDakMsS0FBSyxjQUFjLENBQUMsZ0JBQWdCO1lBQ2xDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO1FBQ3BDLEtBQUssY0FBYyxDQUFDLFNBQVM7WUFDM0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQzdCLEtBQUssY0FBYyxDQUFDLE9BQU87WUFDekIsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQzNCLEtBQUssY0FBYyxDQUFDLFNBQVM7WUFDM0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQzdCLEtBQUssY0FBYyxDQUFDLE1BQU07WUFDeEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQzFCO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VHlwZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7TGlmZWN5Y2xlSG9va3N9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNMaWZlY3ljbGVIb29rKGxjSW50ZXJmYWNlOiBMaWZlY3ljbGVIb29rcywgdG9rZW4pOiBib29sZWFuIHtcbiAgaWYgKCEodG9rZW4gaW5zdGFuY2VvZiBUeXBlKSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBwcm90byA9ICg8YW55PnRva2VuKS5wcm90b3R5cGU7XG5cbiAgc3dpdGNoIChsY0ludGVyZmFjZSkge1xuICAgIGNhc2UgTGlmZWN5Y2xlSG9va3MuQWZ0ZXJDb250ZW50SW5pdDpcbiAgICAgIHJldHVybiAhIXByb3RvLm5nQWZ0ZXJDb250ZW50SW5pdDtcbiAgICBjYXNlIExpZmVjeWNsZUhvb2tzLkFmdGVyQ29udGVudENoZWNrZWQ6XG4gICAgICByZXR1cm4gISFwcm90by5uZ0FmdGVyQ29udGVudENoZWNrZWQ7XG4gICAgY2FzZSBMaWZlY3ljbGVIb29rcy5BZnRlclZpZXdJbml0OlxuICAgICAgcmV0dXJuICEhcHJvdG8ubmdBZnRlclZpZXdJbml0O1xuICAgIGNhc2UgTGlmZWN5Y2xlSG9va3MuQWZ0ZXJWaWV3Q2hlY2tlZDpcbiAgICAgIHJldHVybiAhIXByb3RvLm5nQWZ0ZXJWaWV3Q2hlY2tlZDtcbiAgICBjYXNlIExpZmVjeWNsZUhvb2tzLk9uQ2hhbmdlczpcbiAgICAgIHJldHVybiAhIXByb3RvLm5nT25DaGFuZ2VzO1xuICAgIGNhc2UgTGlmZWN5Y2xlSG9va3MuRG9DaGVjazpcbiAgICAgIHJldHVybiAhIXByb3RvLm5nRG9DaGVjaztcbiAgICBjYXNlIExpZmVjeWNsZUhvb2tzLk9uRGVzdHJveTpcbiAgICAgIHJldHVybiAhIXByb3RvLm5nT25EZXN0cm95O1xuICAgIGNhc2UgTGlmZWN5Y2xlSG9va3MuT25Jbml0OlxuICAgICAgcmV0dXJuICEhcHJvdG8ubmdPbkluaXQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19