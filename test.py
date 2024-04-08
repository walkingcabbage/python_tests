# a+d*included
# def solution(a, d, included):
#   result = 0
#   for idx, item in enumerate(included):
#     if item:
#       result+=a+d*(idx+1)
#   return result

# def solution(a, b, c):
#   if a!=b and a!=c and b!=c:
#     return a+b+c
#   if a==b!=c or a==c!=b or b==c!=a:
#     return (a+b+c)*(a*a+b*b+c*c)
#   if a==b and b==c:
#     return (a+b+c)*(a*a+b*b+c*c)*(a*a*a+b*b*b+c*c*c)

# 전체 곱보다 합의 제곱이 작으면 0 크면 1
# def solution(num_list):
#   mul = 1
#   sum = 0
#   for i in num_list:
#     mul *= i
#   for i in num_list:
#     sum += i
#   if mul>sum*sum:
#     print(mul, sum*sum)
#     return 0
#   print(mul, sum*sum)
#   return 1

def solution(num_list):
  even = ''
  odd = ''
  for item in num_list:
    if item%2 == 0:
      odd+=str(item)
    else:
      even+=str(item)
  return int(even)+int(odd)