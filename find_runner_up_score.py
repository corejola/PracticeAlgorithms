# find the runner up score.

n = 5
arr = [2, 3, 6, 6, 5]
ar = [-7, -7, -7, -7, -5]


def find_max_score(arr):
    # what if all the scores are < 0...
    max_score = -100
    for x in arr:
        if x > max_score or x == max_score:
            max_score = x
    return max_score


def find_runner_up_score(n, arr):
    scores = set(arr)
    print("Sorted Array {}".format(arr))
    max_score = find_max_score(scores)

    print("Max Score: {}".format(max_score))

    revised_scores = [scores for scores in arr if scores != max_score]
    revised_scores.sort()
    print(revised_scores)
    print("Runner up Score: {}".format(revised_scores[-1]))

# sort the array
# run the max score func
# remove all instances of the max score
# return the final element of the list


find_runner_up_score(n, ar)
