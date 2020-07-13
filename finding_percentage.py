n = int(input())

student_marks = {}

for _ in range(n):
    name, *line = input().split()
    scores = list(map(float, line))
    student_marks[name] = scores


query_name = input()


for q, v in student_marks.items():

    if q == query_name:
        score = 0
        for value in v:
            score += value
        # sum of the values from the dict item / 3
        avg = float(score/3)
        print('%.2f' % avg)
