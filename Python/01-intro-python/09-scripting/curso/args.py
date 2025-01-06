from sys import argv

print(argv)
print(type(argv))

index = 0

for arg in argv:
    print(f"args[{index}] = {arg}, type: {type(arg)}")
    index += 1
