# given an input of a time in the 12hr time system, write an algorithm that converts it to the 24hr time system

''' 
Input: 11:21:30 PM
Output: 23:21:30

Input: 12:12:20 AM
Output: 00:12:20

'''


def convert24(str1):

    if str1[-2:] == "AM" and str1[:2] == "12":
        return "00" + str1[2:-2]

    elif str1[-1:] == "AM":
        return str1[:-2]

    elif str1[-2:] == "PM" and str1[:2] == "12":
        return str1[:-2]

    else:
        return str(int(str1[:2]) + 12) + str1[2:8]


print(convert24("12:05:45 AM"))
