#  Give contiguous chocolate segements in relation to the person's birth date [integer] & month [integer]
#  chocolate segments sum to the date with the length of a segment equal to the month
#  return number of segments that meet the requirement

#  chocolate bar, s
s = [1, 2, 1, 3, 2]
#  Birthday = [d,m]
#  birth day, d
#  birth month, m
d = 3
m = 2
# return number of segements that
# 1. segment[sum] = 1 <= d <=30
# 2. segment.length ===  1 <= m <= 12


def birthdayChocolate(s, d, m):
    pieces = 0
    # based on the m, this defines how many pieces are to be summed this should be the first parameter
    # d will be the sum across length m
    #
