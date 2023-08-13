class Solution:
    def sumOfMultiples(self, n: int) -> int:
        result = 0
        for item in range(1, n + 1):
            if item % 3 == 0 or item % 5 == 0 or item % 7 == 0:
                result = result + item
        return result