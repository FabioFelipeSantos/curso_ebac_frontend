def bubble_sort(arr: list[int]) -> list[int]:
    n = len(arr) - 1
    
    while True:
        for i in range(n):
            a = arr[i]
            b = arr[i + 1]
            
            if (b < a):
                arr[i] = b
                arr[i + 1] = a
            else:
                continue
        n -= 1
        
        if (n == 0):
            break                
        
    return arr
