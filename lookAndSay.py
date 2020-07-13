#  Look and Say Sequence

#  Given a pattern as below and an integer n your task is to decode it and print nth row of it. The pattern follows as :
#  Seq.     n'th
#  1        - 1
#  11       - 2
#  21       - 3
#  1211     - 4
#  111221   - 5
#  312211   - 6
#  ............

# the nth row prints out the sequence of the prevous rows sequence by "saying" the number of "integers"

# T is the Test Case
# n is the row

t = "1"


def look_say_sequence(s):
    # set initial condition T row 1 & 2
    # read the count of the intial condition and say the integer of the initial condition
    # concatonate the read & say values into a sequence to be returned.
    # split the integer into a list
    # loop through the list (split the integer into an array), count the repeating values
    #
    result = []
    i = 0
    # while i is less than the length of the string
    while i < len(s):
        count = 1
        while i + 1 < len(s) and s[i] == s[i+1]:
            i += 1
            count += 1
        result.append(str(count) + s[i])
        i += 1
    return ''.join(result)


# s = "1211"
# print(look_say_sequence(s))

t = "1"
n = 6
for i in range(n-1):
    t = look_say_sequence(t)
    print(t)
