//parent.subclass undefined fix
Class.create = Class.create.wrap(function(proceed, parent) {
  if (Object.isFunction(parent))
    parent.subclasses = parent.subclasses || [];
  return proceed.apply(Class, $A(arguments).slice(1));
})