"""
Topic: Metaclasses and Class Construction
Concepts Covered:
  - type() as dynamic class factory
  - Custom metaclass inheriting from type (__new__, __init__)
  - Auto-registering subclasses
  - Enforcing design rules at class definition time
  - Modern alternative: __init_subclass__
"""

class EnforceAttributesMeta(type):
    """Metaclass ensuring all subclasses define a 'version' string."""
    def __new__(mcs, name, bases, attrs):
        if bases:  # Skip base parent class check
            if "version" not in attrs:
                raise TypeError(f"Class '{name}' must declare class attribute 'version'")
        return super().__new__(mcs, name, bases, attrs)

class PluginBase(metaclass=EnforceAttributesMeta):
    pass

class AudioPlugin(PluginBase):
    version = "1.0.0"

# Modern cleaner alternative in Python 3.6+: __init_subclass__
class AutoRegistryBase:
    registry = {}

    def __init_subclass__(cls, plugin_name: str, **kwargs):
        super().__init_subclass__(**kwargs)
        cls.registry[plugin_name] = cls

class FastExporter(AutoRegistryBase, plugin_name="fast_export"):
    pass

if __name__ == "__main__":
    print(f"AudioPlugin version: {AudioPlugin.version}")
    print("Auto-registered plugins:", AutoRegistryBase.registry)
