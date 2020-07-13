# GENERAL WORKSPACE

# List Comprehension

# given 3 integers X, Y, Z representing the coordinates (i, j, k).
# print a list of all possible coordinates given by (i, j, k) on a 3D grid where the sum of i + j + k is != to N

x = 2
y = 2
z = 2
n = 2

ar = []
p = 0
for i in range(x+1):
    for j in range(y+1):
        for k in range(z+1):
            if (i + j + k) != n:
                ar.append([])
                ar[p] = [i, j, k]
                p += 1

print(ar)
