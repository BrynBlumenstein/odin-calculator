# odin-calculator

This is my completed version of Project: Calculator from The Odin Project.

Unexpected behavior to note:
- There may be some slight rounding errors with floating point numbers.
- Once a value becomes too long to fit in the display, the least significant digits of the value will be removed until it can. Consequences of this are that the largest value able to be displayed is 999999999, and the smallest value able to be displayed is -99999999. Additionally, there can only be at most 7 digits after the decimal point.