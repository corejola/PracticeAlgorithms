
# leap year can be evenly divided by 4 only if
# year can be evenly divided by 100 only if it is evenly divided by 400


def is_leap(year):
    '''
    check to determine if a given year is a leap year
    '''
    leap = False

    if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0):
        leap = True

    else:
        leap = False

    return leap


# year = int(input())

# year = 1992  # true

year = 2100  # should be false


# run function
print(is_leap(year))
