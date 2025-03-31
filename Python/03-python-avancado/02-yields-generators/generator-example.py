def my_gen():
    n = 1
    print("Primeiro print, n é igual a: {}".format(n))

    yield n

    n += 1
    print("Segundo print, n é igual a: {}".format(n))
    yield n

    n += 1
    print("Terceiro e último print, n é igual a: {}".format(n))
    yield n
