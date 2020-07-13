# print the name of any students having the second lowest grade

students = [['Harry', 37.21], ['Berry', 37.21], [
    'Tina', 37.2], ['Akriti', 41], ['Harsh', 39]]


student_list = [['Harsh', 20],
                ['Beria', 20],
                ['Varun', 19],
                ['Kakunami', 19],
                ['Vikas', 21]]


test_case3 = [['Rachel', -50],
              ['Mawer', -50],
              ['Sheen', -50],
              ['Shaheen', 51]]
# determine lowest grade & highest grade, determines the range of the grades


def lowest_grade(students):
    lowest_grade = 100

    for grade in students:
        if grade[1] < lowest_grade:
            lowest_grade = grade[1]

    return lowest_grade


def highest_grade(students):
    highest_grade = 0
    for grade in students:
        if grade[1] > highest_grade:
            highest_grade = grade[1]

    return highest_grade

# sort list by grades

# students with SECOND lowest Grades (alphabetically):


def second_lowest(students):
    # low_grade = lowest_grade(students)
    # high_grade = highest_grade(students)

    students.sort(key=lambda x: x[1])
    # print the names of the 2 students with the second lowest grades
    print(students)
    second_lowest_students = []
    if students[0][1] == students[1][1]:
        if students[2][1] == students[3][1]:
            second_lowest_students.append(students[2][0])
            second_lowest_students.append(students[3][0])
            second_lowest_students.sort()
            print(second_lowest_students[0])
            print(second_lowest_students[1])
    elif students[1][1] == students[2][1]:
        second_lowest_students.append(students[1][0])
        second_lowest_students.append(students[2][0])
        second_lowest_students.sort()

        print(second_lowest_students[0])
        print(second_lowest_students[1])

    else:
        print(students[1][0])
        print(students[2][0])


second_lowest(student_list)
